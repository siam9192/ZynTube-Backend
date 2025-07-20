import { VideoReactionType } from '../../../../prisma/generated/client';

export interface IReactVideoCommentPayload {
  type: VideoReactionType;
  commentId: string;
}
