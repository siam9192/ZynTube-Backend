import { z } from 'zod';
import { DeviceType } from '../../../../prisma/generated/client';


const googleCallback = z.object({
  accessToken: z.string().min(1, 'Access token is required'),
  browser: z.string().min(1, 'Browser is required'),
  ip: z.string().ip('Invalid IP address format'),
  userAgent: z.string().min(1, 'User agent is required'),
  device: z.object({
    name: z.string().min(1, 'Device name is required'),
    type: z.nativeEnum(DeviceType),
    osName: z.string().min(1, 'OS name is required'),
    osVersion: z.string().min(1, 'OS version is required'),
  }),
});

export default {
  googleCallback,
};
