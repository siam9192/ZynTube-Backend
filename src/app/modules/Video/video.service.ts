import axios from 'axios';
import muxClient from '../../mux';
import { IAuthUser } from '../../types';
import imagekit from '../Imagekit/imagekit.config';
import fs from 'fs';
import path from 'path';
import { UnwrapWebhookEvent } from '@mux/mux-node/resources/webhooks';
import prisma from '../../prisma';

import AppError from '../../Errors/AppError';
import httpStatus from '../../shared/http-status';
import { ChannelStatus, VideoStatus } from '../../../../prisma/generated/client';

class VideoService {
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

    const createVideoData: Record<string, any> = {
      channelId: channel.id,
      title: payload.title,
      ...(payload.description && { description: payload.description }),
    };

    try {
      await prisma.$transaction(async (txClient) => {
        const createdVideo = await txClient.video.create({
          data: createVideoData as any,
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

        if (!muxUpload?.id || !muxUpload.asset_id || !muxUpload.url) {
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
            muxAssetId: muxUpload.asset_id,
          },
        });

        axios.put(muxUpload.url, fs.createReadStream(videoPath)).catch(async (error) => {
          console.error('Mux Upload Failed:', error);

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
    const type = event.type;
    await prisma.$transaction(async (txClient) => {
      switch (type) {
        case 'video.asset.ready':
          const data = event.data;
          const videoId = data.passthrough;
          const playback_ids = data.playback_ids;
          if (!playback_ids?.length) {
            break;
          }
          await txClient.video.update({
            where: {
              id: videoId,
            },
            data: {
              status: VideoStatus.UPLOADED,
              media: {
                update: {
                  muxPlaybackId: playback_ids[0].id,
                },
              },
            },
          });
          break;
        case 'video.asset.errored':
          {
            const data = event.data;
            const videoId = data.passthrough;

            await txClient.video.update({
              where: {
                id: videoId,
              },
              data: {
                status: VideoStatus.UPLOAD_FAILED,
              },
            });
          }
          break;
      }
    });
    return null
  }


}

export default new VideoService();
