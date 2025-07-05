import { z } from 'zod';

const createVideoComment = z
  .object({
    parentId: z.string().nonempty().optional(),
    videoId: z.string().nonempty().optional(),
    content: z
      .string()
      .nonempty()
      .trim()
      .max(5000, { message: 'Content must be within 5000 characters.' }),
  })
  .refine(
    (val) => {
      // Ensure exactly one of them is present
      const hasParentId = !!val.parentId;
      const hasVideoId = !!val.videoId;
      return hasParentId !== hasVideoId;
    },
    {
      message:
        'Provide either parentId (for reply) or videoId (for top-level comment), but not both.',
      path: ['videoId'], // You could use a general path like ['videoId'] or ['parentId']
    }
  );

const changeVideoCommentPinStatus = z.object({
  status: z.boolean(),
});

const updateVideoComment = z.object({
  content: z
    .string()
    .nonempty()
    .trim()
    .max(5000, { message: 'content must be in 5000 characters' }),
});

export default {
  createVideoComment,
  changeVideoCommentPinStatus,
  updateVideoComment,
};
