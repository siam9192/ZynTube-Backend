import { z } from 'zod';
import { VideoPrivacy } from '../../../../prisma/generated/client';


const createVideo = z.object({
  title: z
    .string({ required_error: 'title is required.' })
    .nonempty({ message: 'Channel name cannot be empty.' })
    .max(100, { message: 'Channel name must be at most 100 characters.' }),
  description: z
    .string({ required_error: 'title is required.' })
    .nonempty({ message: 'Channel name cannot be empty.' })
    .max(5000, { message: 'Channel name must be at most 100 characters.' })
    .optional(),
  privacy: z.nativeEnum(VideoPrivacy, { message: 'Invalid privacy type' }),
});

export default {
  createVideo,
};
