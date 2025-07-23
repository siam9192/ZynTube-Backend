import { ChannelStatus } from '../../../../prisma/generated/client';
import AppError from '../../Errors/AppError';
import prisma from '../../prisma';
import httpStatus from '../../shared/http-status';
import { IAuthUser } from '../../types';
import { EChannelStatus } from './channel.interface';

class ChannelService {
  async checkChannelExistWithUniqueName(name: string) {
    if (!name.startsWith('@')) {
      throw new AppError(httpStatus.BAD_REQUEST, `Unique name must be start with "@"`);
    }
    const channel = await prisma.channel.findUnique({
      where: {
        uniqueName: '@' + name,
      },
    });

    return {
      exist: channel ? true : false,
    };
  }
  async getPublicChannelFromDB(authUser: IAuthUser | undefined, uniqueName: string) {
    const channel = await prisma.channel.findUnique({
      where: {
        uniqueName,
        status: ChannelStatus.ACTIVE,
      },
      include: {
        _count: true,
      },
    });

    if (!channel) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        'Channel not found. It may not exist or has been removed.'
      );
    }

    let isSubscribed = false;
    let isOwn = false;

    if (authUser) {
      const subscribeExist = await prisma.channelSubscriber.findUnique({
        where: {
          channelId_subscriberId: {
            channelId: channel.id,
            subscriberId: authUser.userId,
          },
        },
      });
      isSubscribed = !!subscribeExist;
      isOwn = channel.userId === authUser.userId;
    }

    return {
      ...channel,
      userId: null,
      isSubscribed,
      isOwn,
    };
  }
}

export default new ChannelService();
