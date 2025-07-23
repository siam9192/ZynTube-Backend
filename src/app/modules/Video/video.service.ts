import axios from 'axios';
import muxClient from '../../mux';
import { IAuthUser, IPaginationOptions } from '../../types';
import imagekit from '../Imagekit/imagekit.config';
import fs from 'fs';
import path from 'path';
import { UnwrapWebhookEvent } from '@mux/mux-node/resources/webhooks';
import prisma from '../../prisma';
import AppError from '../../Errors/AppError';
import httpStatus from '../../shared/http-status';
import {
  ChannelStatus,
  Prisma,
  Privacy,
  VideoPrivacy,
  VideoReactionType,
  VideoStatus,
} from '../../../../prisma/generated/client';
import { calculatePagination } from '../../helpers/paginationHelper';
import {
  EChannelPublicVideoFilterType,
  ERelatedVideoType,
  IChannelPublicVideoFilterPayload,
  ICreateVideoPayload,
  IUpdateVideoPayload,
  IVideoSearchFilterPayload,
} from './video.interface';

function formatToPublicVideo(
  video: any,
  other: {
    isOwn: boolean;
    reactionType: VideoReactionType | null;
    isWatchLater: boolean;
    isSaved: boolean;
    isSubscribed: boolean;
  }
) {
  const channel = video.channel;

  return {
    id: video.id,
    title: video.title,
    channel: {
      id: channel.id,
      name: channel.name,
      uniqueName: channel.uniqueName,
      profilePhotoUrl: channel.profilePhotoUrl,
      isSubscribed: other.isSubscribed,
    },
    duration: video.duration,
    media: video.media,
    state: video.state,
    createdAt: video.createdAt,
    isOwn: other.isOwn,
    reactionType: other.reactionType,
    isWatchLater: other.isWatchLater,
    isSaved: other.isSaved,
  };
}

class VideoService {
  private myVideoInclude = {
    media: true,
    state: true,
    setting: true,
  };
  private videoInclude = {
    media: true,
    state: true,
    setting: true,
    channel: true,
  };
  async createVideoIntoDB(authUser: IAuthUser, payload: ICreateVideoPayload) {
    const videoPath = path.join(process.cwd(), payload.videoFile.path);
    const thumbnailPath = path.join(process.cwd(), payload.thumbnailFile.path);

    const channel = await prisma.channel.findFirst({
      where: {
        userId: authUser.userId,
        status: { not: ChannelStatus.DELETED },
      },
    });

    if (!channel) {
      throw new AppError(httpStatus.NOT_FOUND, 'Channel not found');
    }

    try {
      await prisma.$transaction(async (txClient) => {
        const createdVideo = await txClient.video.create({
          data: {
            ...{
              channelId: channel.id,
              title: payload.title,
              ...(payload.description && { description: payload.description }),
            },
            state: {
              create: {},
            },
            setting: {
              create: {},
            },
          },
        });

        const muxUpload = await muxClient.video.uploads.create({
          cors_origin: '*',
          new_asset_settings: {
            playback_policy: ['public'],
            passthrough: createdVideo.id.toString(),
            normalize_audio: true,
            master_access: 'none',
          },
        });

        if (!muxUpload?.id || !muxUpload.url) {
          throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Mux asset creation failed');
        }

        const thumbnailBase64 = fs.readFileSync(thumbnailPath, 'base64');

        const imagekitResponse = await imagekit.upload({
          file: thumbnailBase64,
          fileName: payload.thumbnailFile.originalname || payload.thumbnailFile.filename,
          folder: '/ZynTube/photos/thumbnails',
          useUniqueFileName: true,
          isPrivateFile: false,
          tags: ['thumbnail', 'video'],
        });

        await txClient.videoMedia.create({
          data: {
            videoId: createdVideo.id,
            thumbnailUrl: imagekitResponse.url,
            imagekitId: imagekitResponse.fileId,
            muxAssetId: muxUpload.id,
          },
        });

        axios.put(muxUpload.url, fs.createReadStream(videoPath)).catch(async (error) => {
          // Optional: do cleanup or mark as failed later
          await prisma.video.update({
            where: { id: createdVideo.id },
            data: { status: VideoStatus.UPLOAD_FAILED },
          });

          await muxClient.video.assets.delete(muxUpload.asset_id!).catch(() => {});
          await imagekit.deleteFile(imagekitResponse.fileId).catch(() => {});
        });
      });
    } finally {
      // Always clean up temp files
      fs.existsSync(videoPath) && fs.unlinkSync(videoPath);
      fs.existsSync(thumbnailPath) && fs.unlinkSync(thumbnailPath);
    }
  }

  async muxWebhook(event: UnwrapWebhookEvent) {
    const { type, data } = event;

    await prisma.$transaction(async (txClient) => {
      switch (type) {
        case 'video.asset.ready': {
          const videoId = data.passthrough;
          const playbackIds = data.playback_ids;

          if (!videoId || !playbackIds?.length) {
            console.warn('Missing videoId or playback_ids');
            return;
          }

          await txClient.video.update({
            where: { id: videoId },
            data: {
              status: VideoStatus.UPLOADED,
              media: {
                update: {
                  data: {
                    muxPlaybackId: playbackIds[0].id,
                  },
                },
              },
              resolutionTier: data.resolution_tier,
              duration: data.duration,
              aspectRatio: data.aspect_ratio,
            },
          });
          break;
        }

        case 'video.asset.errored': {
          const videoId = data.passthrough;

          if (!videoId) {
            console.warn('Missing videoId in errored event');
            return;
          }

          await txClient.video.update({
            where: { id: videoId },
            data: {
              status: VideoStatus.UPLOAD_FAILED,
            },
          });
          break;
        }

        // optional: add default case to log unhandled events
        default:
          console.info(`Unhandled Mux webhook event: ${type}`);
          break;
      }
    });

    return null;
  }

  async updateVideoIntoDB(authUser: IAuthUser, id: string, payload: IUpdateVideoPayload) {
    const video = await prisma.video.findUnique({
      where: {
        id,
        channel: {
          userId: authUser.userId,
        },
      },
      include: { media: true },
    });

    if (!video) {
      throw new AppError(httpStatus.NOT_FOUND, 'Video not found');
    }

    const result = await prisma.$transaction(async (tx) => {
      let thumbnailUrl: string | undefined;
      let imagekitId: string | undefined;

      // Upload new thumbnail if provided
      if (payload.thumbnailFile) {
        const thumbnailPath = path.join(process.cwd(), payload.thumbnailFile.path);
        const thumbnailBase64 = fs.readFileSync(thumbnailPath, 'base64');

        const uploadResponse = await imagekit.upload({
          file: thumbnailBase64,
          fileName: payload.thumbnailFile.originalname || payload.thumbnailFile.filename,
          folder: '/ZynTube/photos/thumbnails',
          useUniqueFileName: true,
          isPrivateFile: false,
          tags: ['thumbnail', 'video'],
        });

        thumbnailUrl = uploadResponse.url;
        imagekitId = uploadResponse.fileId; // corrected to `fileId` (likely correct field name)
      }

      // Prepare update data
      const updateData: Record<string, unknown> = {};
      const updatableFields = ['title', 'description'];

      for (const field of updatableFields) {
        const value = (payload as any)[field];
        if (value !== undefined) {
          updateData[field] = value;
        }
      }

      if (payload.privacy) {
        updateData.setting = {
          update: {
            data: {
              privacy: payload.privacy,
            },
          },
        };
      }

      // Include media update if thumbnail was uploaded
      if (thumbnailUrl && imagekitId) {
        updateData.media = {
          update: {
            data: {
              thumbnailUrl,
              imagekitId,
            },
          },
        };
      }

      // Perform video update
      return tx.video.update({
        where: { id },
        data: updateData,
        include: this.myVideoInclude,
      });
    });

    if (payload.thumbnailFile) {
      const thumbnailPath = path.join(process.cwd(), payload.thumbnailFile.path);
      imagekit.deleteFile(video.media!.imagekitId).catch(() => {
        console.log('Imagekit delete process failed');
      });
      fs.existsSync(thumbnailPath) && fs.unlinkSync(thumbnailPath);
    }

    return result;
  }

  async getMyVideosFromDB(authUser: IAuthUser, paginationOptions: IPaginationOptions) {
    const channel = await prisma.channel.findUnique({
      where: {
        userId: authUser.userId,
      },
    });
    if (!channel) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Bad request,Channel not found!');
    }

    const { page, skip, limit, sortBy, sortOrder } = calculatePagination(paginationOptions, {
      sortFields: ['createdAt', 'views', 'likes', 'dislikes'],
    });

    const whereConditions = {
      channelId: channel.id,
      deleted: false,
    };
    const videos = await prisma.video.findMany({
      where: whereConditions,
      include: {
        media: true,
        state: true,
        setting: true,
      },
      skip,
      take: limit,
      orderBy: {
        [sortBy]: sortOrder,
      },
    });

    const totalResult = await prisma.video.count({
      where: whereConditions,
    });
    const meta = {
      page,
      limit,
      totalResult,
      total: totalResult,
    };

    return {
      data: videos,
      meta,
    };
  }
  async getMyVideoByIdFromDB(authUser: IAuthUser, id: string) {
    const video = await prisma.video.findUnique({
      where: {
        id,
        channel: {
          userId: authUser.userId,
        },
      },
      include: this.myVideoInclude,
    });

    if (!video) {
      throw new AppError(httpStatus.NOT_FOUND, 'Video not found');
    }

    return video;
  }

  async deleteVideoFromDB(authUser: IAuthUser, id: string) {
    // Step 1: Find the video and ensure it belongs to the authenticated user
    const video = await prisma.video.findFirst({
      where: {
        id,
        deleted: false,
        channel: {
          userId: authUser.userId,
        },
      },
      include: {
        media: true,
      },
    });

    if (!video) {
      throw new AppError(httpStatus.NOT_FOUND, 'Video not found or already deleted');
    }

    // Step 2: Mark the video as deleted in the database
    await prisma.video.update({
      where: { id },
      data: { deleted: true },
    });

    // Step 3: Delete media assets from Mux and ImageKit (outside DB transaction)

    await muxClient.video.assets.delete(video.media!.muxAssetId!);
    imagekit
      .deleteFile(video.media?.imagekitId || '')
      .catch((err) => console.error('Failed to delete ImageKit file:', err));
  }
  async getChannelPublicVideosFromDB(
    authUser: IAuthUser | undefined,
    channelId: string,
    filter:IChannelPublicVideoFilterPayload,
    paginationOptions: IPaginationOptions
    
  ) {

    // Fetch the channel
    const channel = await prisma.channel.findUnique({
      where: {
        id: channelId,
        status: ChannelStatus.ACTIVE,
      },
    });

    if (!channel) {
      throw new AppError(httpStatus.NOT_FOUND, 'Channel not found');
    }

    let { page, limit, skip, sortOrder, sortBy } = calculatePagination(paginationOptions);
    const {type} =  filter
    switch (type) {
      case EChannelPublicVideoFilterType.LATEST:
        sortBy = 'createdAt';
        sortOrder = 'desc';
        break;
      case EChannelPublicVideoFilterType.OLDEST:
        sortBy = 'createdAt';
        sortOrder = 'asc';
        break;

      case EChannelPublicVideoFilterType.POPULAR:
        sortBy = 'viewsCount';
        sortOrder = 'asc';
        break;
      default:
      case EChannelPublicVideoFilterType.LATEST:
        sortBy = 'createdAt';
        sortOrder = 'desc';
        break;
    }

    const whereCondition: Prisma.VideoWhereInput = {
      channelId,
      deleted: false,
      status: VideoStatus.UPLOADED,
      setting: {
        privacy: Privacy.PUBLIC,
      },
    };

    const videos = await prisma.video.findMany({
      where: whereCondition,
      include: {
        channel: true,
        media: {
          select: {
            thumbnailUrl: true,
            muxPlaybackId: true,
          },
        },
        state: true,
      },
      take: limit,
      skip:skip,
      orderBy: sortBy === 'views' ? {
        state:{
         viewsCount:sortOrder
        }
      }:{
        [sortBy]:sortOrder
      }
    });
    const totalResult =  await prisma.video.count({
      where:whereCondition
    })

    let data;
    if (authUser) {
      const channelSubscriptions = await prisma.channelSubscriber.findMany({
        where: {
          channelId: {
            in: [...new Set(videos.map((_) => _.channel.id))],
          },
          subscriberId: authUser.userId,
        },
      });

      const videoReactions = await prisma.videoReaction.findMany({
        where: {
          videoId: {
            in: videos.map((_) => _.id),
          },
          userId: authUser.userId,
        },
      });

      data = videos.map((video) => {
        const channel = video.channel;
        const isOwn = video.channel.userId === authUser.userId;
        const reactionType = videoReactions.find((_) => _.videoId === video.id)?.type || null;
        const isWatchLater = false;
        const isSaved = false;
        const isSubscribed = !!channelSubscriptions.find((_) => _.channelId === channel.id);
        return formatToPublicVideo(video, {
          isOwn,
          reactionType,
          isWatchLater,
          isSaved,
          isSubscribed,
        });
      });
    } else {
      data = videos.map((video) => {
        const isOwn = false;
        const reactionType = null;
        const isWatchLater = false;
        const isSaved = false;
        const isSubscribed = false;
        return formatToPublicVideo(video, {
          isOwn,
          reactionType,
          isWatchLater,
          isSaved,
          isSubscribed,
        });
      });
    }
   
    const meta = {
      page,
      limit,
      data,
      totalResult
    }

    return {
      data,
      meta
    };
  }
  async getHomeFeedVideosFromDB(
    authUser: IAuthUser | undefined,
    category: string,
    paginationOptions: IPaginationOptions
  ) {
    const { page, skip, limit } = calculatePagination(paginationOptions, { limit: 20 });
    const andCondition: Prisma.VideoWhereInput[] = [];

    if (category && category !== 'all') {
      andCondition.push({
        OR: [
          {
            title: {
              contains: category,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: category,
              mode: 'insensitive',
            },
          },
        ],
      });
    }

    // Optional personalization logic
    // if (authUser) {
    //   // Example: exclude videos from blocked users or boost subscriptions
    //   const subscriptions = await prisma.subscription.findMany({
    //     where: {
    //       subscriberId: authUser.userId,
    //     },
    //     select: {
    //       channelId: true,
    //     },
    //   });

    //   const subscribedChannelIds = subscriptions.map(sub => sub.channelId);
    //   whereCondition.OR = [
    //     { channelId: { in: subscribedChannelIds } },
    //     { recommended: true }, // Example fallback
    //   ];
    // }

    const whereCondition: Prisma.VideoWhereInput = {
      AND: andCondition,
      deleted: false,
      setting: {
        privacy: VideoPrivacy.PUBLIC,
      },
      status: VideoStatus.UPLOADED,
    };

    const videos = await prisma.video.findMany({
      where: whereCondition,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        channel: true,
        media: {
          select: {
            thumbnailUrl: true,
            muxPlaybackId: true,
          },
        },
        state: true,
      },
      take: limit,
      skip,
    });

    const totalResult = await prisma.video.count({ where: whereCondition });

    let data;
    if (authUser) {
      const channelSubscriptions = await prisma.channelSubscriber.findMany({
        where: {
          channelId: {
            in: [...new Set(videos.map((_) => _.channel.id))],
          },
          subscriberId: authUser.userId,
        },
      });

      const videoReactions = await prisma.videoReaction.findMany({
        where: {
          videoId: {
            in: videos.map((_) => _.id),
          },
          userId: authUser.userId,
        },
      });

      data = videos.map((video) => {
        const channel = video.channel;
        const isOwn = video.channel.userId === authUser.userId;
        const reactionType = videoReactions.find((_) => _.videoId === video.id)?.type || null;
        const isWatchLater = false;
        const isSaved = false;
        const isSubscribed = !!channelSubscriptions.find((_) => _.channelId === channel.id);

        return {
          id: video.id,
          title: video.title,
          channel: {
            id: channel.id,
            name: channel.name,
            uniqueName: channel.uniqueName,
            isSubscribed,
          },
          duration: video.duration,
          media: video.media,
          state: video.state,
          createdAt: video.createdAt,
          isOwn,
          reactionType,
          isWatchLater,
          isSaved,
        };
      });
    } else {
      data = videos.map((video) => {
        const channel = video.channel;
        const isOwn = false;
        const reactionType = null;
        const isWatchLater = false;
        const isSaved = false;
        const isSubscribed = false;

        return formatToPublicVideo(video, {
          isOwn,
          reactionType,
          isSaved,
          isWatchLater,
          isSubscribed,
        });
      });
    }

    const meta = {
      page,
      limit,
      totalResult,
    };
    return {
      data,
      meta,
    };
  }
  async getWatchVideoFromDB(authUser: IAuthUser, id: string) {
    const video = await prisma.video.findUnique({
      where: {
        id,
        deleted: false,
        status: VideoStatus.UPLOADED,
        setting: {
          privacy: VideoPrivacy.PUBLIC,
        },
      },
      include: {
        channel: true,
        media: true,
        state: true,
        setting: true,
      },
    });
    if (!video) {
      throw new AppError(httpStatus.NOT_FOUND, 'Video not found');
    }

    async function asyncProcess(userId: string) {
      await prisma.video.update({
        where: {
          id,
        },
        data: {
          state: {
            update: {
              viewsCount: {
                increment: 1,
              },
            },
          },
        },
      });

      await prisma.watchHistoryVideo.upsert({
        where: {
          videoId_userId: {
            videoId: id,
            userId,
          },
        },
        create: {
          videoId: id,
          userId,
        },
        update: {
          viewCount: {
            increment: 1,
          },
          watchedDuration: 0,
        },
      });
    }

    let data;
    if (authUser) {
      const channelSubscription = await prisma.channelSubscriber.findUnique({
        where: {
          channelId_subscriberId: {
            channelId: video.channelId,
            subscriberId: authUser.userId,
          },
        },
      });

      const videoReactions = await prisma.videoReaction.findMany({
        where: {
          videoId: video.id,
          userId: authUser.userId,
        },
      });

      const channel = video.channel;
      const isOwn = video.channel.userId === authUser.userId;
      const reactionType = videoReactions.find((_) => _.videoId === video.id)?.type || null;
      const isWatchLater = false;
      const isSaved = false;
      const isSubscribed = !!channelSubscription;

      data = {
        id: video.id,
        title: video.title,
        description: video.description,
        channel: {
          id: channel.id,
          name: channel.name,
          uniqueName: channel.uniqueName,
          isOwner: authUser.userId === channel.userId,
          isSubscribed,
        },
        duration: video.duration,
        media: video.media,
        state: video.state,
        setting: video.setting,
        createdAt: video.createdAt,
        isOwn,
        reactionType,
        isWatchLater,
        isSaved,
      };
    } else {
      const channel = video.channel;
      const isOwn = false;
      const reactionType = null;
      const isWatchLater = false;
      const isSaved = false;
      const isSubscribed = false;

      data = {
        id: video.id,
        channel: {
          id: channel.id,
          name: channel.name,
          uniqueName: channel.uniqueName,
          isSubscribed,
        },
        duration: video.duration,
        media: video.media,
        state: video.state,
        setting: video.setting,
        createdAt: video.createdAt,
        isOwn,
        reactionType,
        isWatchLater,
        isSaved,
      };
    }

    if (authUser) {
      const videoReaction = await prisma.videoReaction.findUnique({
        where: {
          videoId_userId: {
            videoId: video.id,
            userId: authUser.userId,
          },
        },
      });

      const channelSubscription = await prisma.channelSubscriber.findUnique({
        where: {
          channelId_subscriberId: {
            channelId: video.channelId,
            subscriberId: authUser.userId,
          },
        },
      });
      data = {
        ...video,
        channel: {
          ...video.channel,
          isSubscribed: !!channelSubscription,
        },
        reactionType: videoReaction?.type || null,
        isOwn: authUser.userId === video.channel.userId,
      };
    } else {
      data = video;
    }

    //Process it if logged user exist
    if (authUser) {
      asyncProcess(authUser.userId);
    }

    return data;
  }
  async getRelatedVideosFromDB(
    authUser: IAuthUser | undefined,
    id: string,
    type: ERelatedVideoType
  ) {
    // Fetch the current video to get its category or tags
    const currentVideo = await prisma.video.findUnique({
      where: { id, deleted: false, status: VideoStatus.UPLOADED },
    });

    if (!currentVideo) {
      throw new AppError(httpStatus.NOT_FOUND, 'Video not found');
    }

    const andCondition: Prisma.VideoWhereInput[] = [];

    const keywords = currentVideo.title
      .split(' ')
      .filter((word) => word.length > 2) // remove short/noisy words
      .map((word) => word.toLowerCase());

    const tags = currentVideo.description
      ?.split(/\s+/) // split by any whitespace
      .filter((word) => word.startsWith('#')) // only keep hashtags
      .map((tag) => tag.toLowerCase()); // optional: normalize to lowercase

    if (keywords.length && tags?.length) {
      andCondition.push({
        OR: [
          {
            OR: keywords.map((keyword) => ({
              title: {
                contains: keyword,
                mode: 'insensitive',
              },
            })),
          },
          {
            OR: tags.map((tag) => ({
              title: {
                contains: tag,
                mode: 'insensitive',
              },
            })),
          },
        ],
      });
    }

    if (keywords.length && tags?.length) {
      andCondition.push({
        OR: [
          {
            OR: keywords.map((keyword) => ({
              title: {
                contains: keyword,
                mode: 'insensitive',
              },
            })),
          },
          {
            OR: tags.map((tag) => ({
              title: {
                contains: tag,
                mode: 'insensitive',
              },
            })),
          },
        ],
      });
    } else if (keywords.length) {
      andCondition.push({
        OR: keywords.map((keyword) => ({
          title: {
            contains: keyword,
            mode: 'insensitive',
          },
        })),
      });
    } else if (tags?.length) {
      andCondition.push({
        OR: tags.map((tag) => ({
          title: {
            contains: tag,
            mode: 'insensitive',
          },
        })),
      });
    }

    const whereCondition: Prisma.VideoWhereInput = {
      id: { not: id },
      deleted: false,
      status: VideoStatus.UPLOADED,
      // AND: andCondition,
    };

    const videos = await prisma.video.findMany({
      where: whereCondition,
      include: {
        channel: true,
        media: {
          select: {
            thumbnailUrl: true,
            muxPlaybackId: true,
          },
        },
        state: true,
      },
      take: 20,
    });

    let data;
    if (authUser) {
      const channelSubscriptions = await prisma.channelSubscriber.findMany({
        where: {
          channelId: {
            in: [...new Set(videos.map((_) => _.channel.id))],
          },
          subscriberId: authUser.userId,
        },
      });

      const videoReactions = await prisma.videoReaction.findMany({
        where: {
          videoId: {
            in: videos.map((_) => _.id),
          },
          userId: authUser.userId,
        },
      });

      data = videos.map((video) => {
        const channel = video.channel;
        const isOwn = video.channel.userId === authUser.userId;
        const reactionType = videoReactions.find((_) => _.videoId === video.id)?.type || null;
        const isWatchLater = false;
        const isSaved = false;
        const isSubscribed = !!channelSubscriptions.find((_) => _.channelId === channel.id);
        return formatToPublicVideo(video, {
          isOwn,
          reactionType,
          isWatchLater,
          isSaved,
          isSubscribed,
        });
      });
    } else {
      data = videos.map((video) => {
        const isOwn = false;
        const reactionType = null;
        const isWatchLater = false;
        const isSaved = false;
        const isSubscribed = false;
        return formatToPublicVideo(video, {
          isOwn,
          reactionType,
          isWatchLater,
          isSaved,
          isSubscribed,
        });
      });
    }

    return data;
  }
  async getSearchVideosFromDB(
    authUser: IAuthUser,
    filterPayload: IVideoSearchFilterPayload,
    paginationOptions: IPaginationOptions
  ) {
    const { page, skip, limit, sortBy, sortOrder } = calculatePagination(paginationOptions);
    const { search_query, type, maxDuration, minDuration } = filterPayload;

    if (!search_query?.trim()) {
      return {
        data: [],
        meta: {
          page: 1,
          limit,
          totalResult: 0,
          total: 0,
        },
      };
    }

    const baseCondition: Prisma.VideoWhereInput = {
      OR: [
        { title: { contains: search_query, mode: 'insensitive' } },
        { description: { contains: search_query, mode: 'insensitive' } },
      ],
      status: VideoStatus.UPLOADED,
      setting: { privacy: VideoPrivacy.PUBLIC },
    };

    const andCondition: Prisma.VideoWhereInput[] = [baseCondition];
    let subscribedChannelIds: string[] = [];

    if (authUser) {
      subscribedChannelIds = (
        await prisma.channelSubscriber.findMany({
          where: { subscriberId: authUser.userId },
          select: { channelId: true },
        })
      ).map((item) => item.channelId);
    }

    // --- Optional Filters ---
    if (type === 'watched' || type === 'unwatched') {
      const watchedVideoIds = (
        await prisma.watchHistoryVideo.findMany({
          select: { id: true },
        })
      ).map((item) => item.id);

      if (type === 'watched') {
        andCondition.push({ id: { in: watchedVideoIds } });
      } else {
        andCondition.push({ id: { notIn: watchedVideoIds } });
      }
    }

    if (type === 'subscribed') {
      if (!authUser) {
        throw new AppError(httpStatus.BAD_REQUEST, 'You must be logged in.');
      }

      andCondition.push({ channelId: { in: subscribedChannelIds } });
    }

    if (type === 'recent') {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      andCondition.push({ createdAt: { gte: oneWeekAgo } });
    }

    // if (minDuration || maxDuration) {
    //   andCondition.push({
    //     duration: {
    //       gte: minDuration ?? 0,
    //       lte: maxDuration ?? Number.MAX_SAFE_INTEGER,
    //     },
    //   });
    // }

    const whereCondition: Prisma.VideoWhereInput = {
      AND: andCondition,
    };

    const [total, videos] = await Promise.all([
      prisma.video.count({ where: whereCondition }),
      prisma.video.findMany({
        where: whereCondition,
        orderBy: { [sortBy]: sortOrder },
        skip,
        take: limit,
        include: this.videoInclude,
      }),
    ]);

    let data;
    if (authUser) {
      const videoReactions = await prisma.videoReaction.findMany({
        where: {
          videoId: {
            in: videos.map((_) => _.id),
          },
          userId: authUser.userId,
        },
      });

      data = videos.map((video) => {
        const isOwn = video.channel.userId === authUser.userId;
        const reactionType = videoReactions.find((_) => _.videoId === video.id)?.type || null;
        const isWatchLater = false;
        const isSaved = false;
        const isSubscribed = subscribedChannelIds.includes(video.channelId);

        return formatToPublicVideo(video, {
          isOwn,
          reactionType,
          isSaved,
          isWatchLater,
          isSubscribed,
        });
      });
    } else {
      data = videos.map((video) => {
        const isOwn = false;
        const reactionType = null;
        const isWatchLater = false;
        const isSaved = false;
        const isSubscribed = false;

        return formatToPublicVideo(video, {
          isOwn,
          reactionType,
          isSaved,
          isWatchLater,
          isSubscribed,
        });
      });
    }
    return {
      data,
      meta: {
        page,
        limit,
        totalResult: data.length,
        total,
      },
    };
  }
}

export default new VideoService();
