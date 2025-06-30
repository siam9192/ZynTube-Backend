import { VideoReactionType } from '../../../../prisma/generated/client';

export interface IReactVideoPayload {
  type: VideoReactionType;
  videoId: string;
}
