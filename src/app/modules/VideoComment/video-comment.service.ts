import {
  Prisma,
  UserRole,
  VideoReactionType,
  VideoStatus,
} from '../../../../prisma/generated/client';
import AppError from '../../Errors/AppError';
import { calculatePagination } from '../../helpers/paginationHelper';
import prisma from '../../prisma';
import httpStatus from '../../shared/http-status';
import { IAuthUser, IPaginationOptions } from '../../types';
import { EVideoCommentFilterType, ICreateVideoCommentPayload } from './video-comment.interface';

function formatToPublicComment(
  comment: any,
  other: {
    reactionType: VideoReactionType | null;
    isOwner: boolean;
  }
) {
  const channel = comment.user.channel;
  const owner = {
    name: channel.name,
    uniqueName: channel.uniqueName,
    profilePhotoUrl: channel.profilePhotoUrl,
    subscribersCount: channel.subscribersCount,
  };

  return {
    id: comment.id,
    content: comment.content,
    likesCount: comment.likesCount,
    dislikesCount: comment.dislikesCount,
    isPinned: comment.isPinned,
    isHidden: comment.isHidden,
    replies: [],
    repliesCount: comment._count.replies,
    reactionType: other.reactionType,
    isOwner: other.isOwner,
    owner,
    createdAt: comment.createdAt,
  };
}

class VideoCommentService {
  async createVideoCommentIntoDB(authUser: IAuthUser, payload: ICreateVideoCommentPayload) {
    let { parentId, videoId, content } = payload;
    if (videoId) {
      const video = await prisma.video.findUnique({
        where: {
          id: videoId,
          status: VideoStatus.UPLOADED,
          deleted: false,
        },
      });
      if (!video) {
        throw new AppError(httpStatus.NOT_FOUND, 'No found for comment');
      }
    }

    if (parentId) {
      const comment = await prisma.videoComment.findUnique({
        where: {
          id: parentId,
        },
      });
      if (!comment) {
        throw new AppError(httpStatus.NOT_FOUND, 'Parent comment not found');
      }
      // if (comment.videoId !== videoId) {
      //   throw new AppError(httpStatus.BAD_GATEWAY, 'This is not a comment of this video');
      // }
      parentId = comment.parentId || parentId;
      videoId = comment.videoId;
    }

    const result = await prisma.videoComment.create({
      data: {
        userId: authUser.userId,
        videoId: videoId,
        parentId: parentId || null,
        content: content,
      },
      include: {
        user: {
          select: {
            channel: true,
          },
        },
      },
    });
    return result;
  }

  async deleteVideoCommentFromDB(authUser: IAuthUser, id: string) {
    const comment = await prisma.videoComment.findUnique({
      where: {
        id,
      },
    });
    if (!comment) {
      throw new AppError(httpStatus.NOT_FOUND, 'Comment not found');
    }

    if (authUser.role === UserRole.USER) {
      if (comment.userId !== authUser.userId) {
        throw new AppError(httpStatus.FORBIDDEN, 'This comment is not yours');
      }
    }
    await prisma.videoComment.delete({
      where: {
        id,
      },
    });

    return null;
  }
  async changeVideoCommentPinStatus(
    authUser: IAuthUser,
    commentId: string,
    payload: { status: boolean }
  ) {
    const comment = await prisma.videoComment.findUnique({
      where: {
        id: commentId,
      },
      include: {
        video: {
          select: {
            channel: true,
          },
        },
      },
    });
    if (!comment) {
      throw new AppError(httpStatus.NOT_FOUND, 'Comment not found');
    }
    if (comment.parentId) {
      throw new AppError(httpStatus.FORBIDDEN, 'Child comment is not for pin');
    }
    const pinStatus = payload.status;
    if (pinStatus === comment.isPinned) {
      throw new AppError(
        httpStatus.FORBIDDEN,
        `This comment is already  ${pinStatus ? 'pinned' : 'unpinned'}`
      );
    }
    // Check if the changer is the owner of this channel
    if (comment.video.channel.userId !== authUser.userId) {
      throw new AppError(httpStatus.FORBIDDEN, "You're not the owner of this video's channel");
    }

    const data = await prisma.videoComment.update({
      where: {
        id: commentId,
      },
      data: {
        isPinned: payload.status,
      },
    });

    const message = `Comment ${pinStatus ? 'pinned' : 'unpinned'} successfully`;
    return {
      message,
      data,
    };
  }
  async getVideoComments(
    authUser: IAuthUser | undefined,
    videoId: string,
    type: EVideoCommentFilterType = EVideoCommentFilterType.ALL,
    paginationOptions: IPaginationOptions
  ) {
    const video = await prisma.video.findUnique({
      where: {
        id: videoId,
      },
      include: {
        channel: true,
      },
    });
    if (!video) {
      throw new AppError(httpStatus.NOT_FOUND, 'Video not found');
    }

    let { page, skip, limit, sortBy, sortOrder } = calculatePagination(paginationOptions, {
      sortFields: ['createdAt', 'updatedAt', 'content'],
    });

    const andCondition: Prisma.VideoCommentWhereInput[] = [
      {
        videoId,
        parentId: null,
      },
    ];
    switch (type) {
      case EVideoCommentFilterType.ALL:
        break;
      case EVideoCommentFilterType.OWN:
        if (!authUser) break;
        andCondition.push({
          userId: authUser.userId,
        });
        break;
      case EVideoCommentFilterType.TOP:
        sortBy = 'likesCount';
        sortOrder = 'desc';
        break;
      case EVideoCommentFilterType.MEMBER:
        andCondition.push({
          user: {
            channelSubscriptions: {
              some: {
                channelId: video.channel.id,
              },
            },
          },
        });
        break;
    }

    const whereCondition: Prisma.VideoCommentWhereInput = {
      AND: andCondition,
    };

    const comments = await prisma.videoComment.findMany({
      where: whereCondition,
      include: {
        user: {
          select: {
            channel: true,
          },
        },
        _count: true,
      },
      skip,
      take: limit,
      orderBy: {
        [sortBy]: sortOrder,
      },
    });

    const totalResult = await prisma.videoComment.count({ where: whereCondition });
    const total = await prisma.videoComment.count({
      where: {
        videoId,
      },
    });

    let data;
    if (authUser) {
      const allCommentsIds: string[] = comments.map((comment) => comment.id);
      const userCommentReactions = await prisma.videoCommentReaction.findMany({
        where: {
          userId: authUser.userId,
          commentId: {
            in: allCommentsIds,
          },
        },
      });

      data = comments.map((comment) => {
        let reactionType =
          userCommentReactions.find((_) => _.commentId === comment.id)?.type || null;

        let isOwner = comment.userId === authUser.userId;
        return formatToPublicComment(comment, { reactionType, isOwner });
      });
    } else {
      data = comments.map((comment) => {
        let reactionType = null;
        let isOwner = false;
        return formatToPublicComment(comment, { reactionType, isOwner });
      });
    }
    const meta = {
      page,
      limit,
      totalResult,
      total,
    };

    return {
      data,
      meta,
    };
  }

  async getVideoCommentAllRepliesFromDB(authUser: IAuthUser, id: string) {
    const comment = await prisma.videoComment.findUnique({
      where: {
        id: id,
      },
    });
    if (!comment) {
      throw new AppError(httpStatus.NOT_FOUND, 'Comment not found');
    }

    const replies = await prisma.videoComment.findMany({
      where: {
        parentId: id,
      },
      include: {
        user: {
          select: {
            channel: true,
          },
        },
        _count: true,
      },
    });

    let data;
    if (authUser) {
      const userCommentReactions = await prisma.videoCommentReaction.findMany({
        where: {
          userId: authUser.userId,
          commentId: { in: replies.map((_) => _.id) },
        },
      });

      data = replies.map((comment) => {
        let reactionType =
          userCommentReactions.find((_) => _.commentId === comment.id)?.type || null;
        let isOwner = comment.userId === authUser.userId;
        return formatToPublicComment(comment, { reactionType, isOwner });
      });
    } else {
      data = replies.map((comment) => {
        let reactionType = null;
        let isOwner = false;
        return formatToPublicComment(comment, { reactionType, isOwner });
      });
    }
    return data;
  }

  async updateVideoCommentIntoDB(authUser: IAuthUser, id: string, payload: { content: string }) {
    const comment = await prisma.videoComment.findUnique({
      where: {
        id: id,
      },
    });
    if (!comment) {
      throw new AppError(httpStatus.NOT_FOUND, 'Comment not found');
    }
    if (comment.userId !== authUser.userId) {
      throw new AppError(httpStatus.FORBIDDEN, 'This comment is not yours');
    }
    return await prisma.videoComment.update({
      where: {
        id,
      },
      data: {
        content: payload.content.trim(),
      },
    });
  }
}

export default new VideoCommentService();
