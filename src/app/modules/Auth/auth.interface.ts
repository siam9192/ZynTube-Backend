import { DeviceType } from '../../generated/prisma';

export interface IGoogleCallbackPayload {
  accessToken: string;
  browser: string;
  ip: string;
  userAgent: string;
  device: {
    name: string;
    type: DeviceType;
    osName: string;
    osVersion: string;
  };
}
