import { z } from 'zod';
import { VideoPrivacy } from '../../../../prisma/generated/client';

const createVideo = z.object({
  title: z
    .string({ required_error: 'title is required.' })
    .nonempty({ message: 'title  be empty.' })
    .max(100, { message: 'title  must be at most 100 characters.' }),
  description: z
    .string({ required_error: 'title is required.' })
    .max(5000, { message: 'Description must be at most 5000 characters.' })
    .optional(),
  privacy: z.nativeEnum(VideoPrivacy, { message: 'Invalid privacy type' }),
});

const updateVideo = z
  .object({
    title: z
      .string({ required_error: 'title is required.' })
      .nonempty({ message: 'title  be empty.' })
      .max(100, { message: 'title  must be at most 100 characters.' }),
    description: z
      .string({ required_error: 'title is required.' })
      .max(5000, { message: 'Description must be at most 5000 characters.' })
      .nullable(),
    privacy: z.nativeEnum(VideoPrivacy, { message: 'Invalid privacy type' }),
  })
  .partial();

export default {
  createVideo,
  updateVideo,
};
