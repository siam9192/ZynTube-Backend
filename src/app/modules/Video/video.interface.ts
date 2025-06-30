import { VideoPrivacy } from '../../../../prisma/generated/client';

export interface ICreateVideoPayload {
  title: string;
  description: string;
  videoFile: Express.Multer.File;
  thumbnailFile: Express.Multer.File;
}

export interface IUpdateVideoPayload {
  title?: string;
  description?: string;
  privacy?: VideoPrivacy;
  thumbnailFile?: Express.Multer.File;
}

export enum ERelatedVideoType {
  RELATED = 'related',
  RECOMMENDED = 'recommended',
  FOR_YOU = 'for-you',
  THIS_CHANNEL = 'this-channel',
}
