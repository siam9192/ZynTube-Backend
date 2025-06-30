import { z } from 'zod';
import { VideoReactionType } from '../../../../prisma/generated/client';

const switchVideoReaction = z.object({
  videoId: z.string({ required_error: 'videoId is required' }).nonempty(),
  type: z.enum([...Object.values(VideoReactionType)] as [string, ...string[], null] as any),
});

export default {
  switchVideoReaction,
};
