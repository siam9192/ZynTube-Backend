import { z } from 'zod';
const setupProfile = z.object({
  channelName: z
    .string({ required_error: 'Channel name is required.' })
    .nonempty({ message: 'Channel name cannot be empty.' })
    .max(20, { message: 'Channel name must be at most 20 characters.' }),

  channelUniqueName: z
    .string({ required_error: 'Unique channel name is required.' })
    .nonempty({ message: 'Unique channel name cannot be empty.' })
    .max(20, { message: 'Unique channel name must be at most 20 characters.' })
    .transform((val) => val.toLowerCase()),

  channelProfilePhotoUrl: z
    .string({ required_error: 'Profile photo URL is required.' })
    .url({ message: 'Profile photo must be a valid URL.' }),
});

export default {
  setupProfile,
};
