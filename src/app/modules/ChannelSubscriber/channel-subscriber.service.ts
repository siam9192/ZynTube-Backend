import { ChannelStatus } from '../../../../prisma/generated/client';
import AppError from '../../Errors/AppError';
import prisma from '../../prisma';
import httpStatus from '../../shared/http-status';
import { IAuthUser } from '../../types';
import { EChannelStatus } from '../Channel/channel.interface';

class ChannelSubscriberService {
  async createSubscriberIntoDB(authUser: IAuthUser, payload: ICreateChannelSubscriberPayload) {
    const channelId = payload.channelId;
    const subscriberId = authUser.userId;
    const channel = await prisma.channel.findUnique({
      where: {
        id: channelId,
        status: {
          not: ChannelStatus.DELETED,
        },
      },
    });

    if (!channel) {
      throw new AppError(httpStatus.NOT_FOUND, 'Channel not found');
    }

    if (channel.userId === authUser.userId) {
      throw new AppError(httpStatus.FORBIDDEN, 'You can not subscribe your own channel');
    }

    if (channel.status !== ChannelStatus.ACTIVE) {
      throw new AppError(httpStatus.FORBIDDEN, `This channel is ${channel.status.toLowerCase()}`);
    }

    const existing = await prisma.channelSubscriber.findUnique({
      where: {
        channelId_subscriberId: {
          channelId,
          subscriberId,
        },
      },
    });
    if (existing) {
      throw new AppError(httpStatus.FORBIDDEN, 'You already subscribed');
    }
    return await prisma.$transaction(async (tx) => {
      await tx.channel.update({
        where: {
          id: channelId,
        },
        data: {
          subscribersCount: {
            increment: 1,
          },
        },
      });
      return await tx.channelSubscriber.create({
        data: {
          channelId,
          subscriberId,
        },
      });
    });
  }
  async deleteSubscriberFromDB(authUser: IAuthUser, channelId: string) {
    const subscriberId = authUser.userId;
    const channel = await prisma.channel.findUnique({
      where: {
        id: channelId,
        status: {
          not: ChannelStatus.DELETED,
        },
      },
    });

    if (!channel) {
      throw new AppError(httpStatus.NOT_FOUND, 'Channel not found');
    }

    if (channel.userId === authUser.userId) {
      throw new AppError(httpStatus.FORBIDDEN, 'You can not subscribe your own channel');
    }

    if (channel.status !== ChannelStatus.ACTIVE) {
      throw new AppError(httpStatus.FORBIDDEN, `This channel is ${channel.status.toLowerCase()}`);
    }

    const existing = await prisma.channelSubscriber.findUnique({
      where: {
        channelId_subscriberId: {
          channelId,
          subscriberId,
        },
      },
    });
    if (!existing) {
      throw new AppError(httpStatus.FORBIDDEN, 'You are not subscribed to this channel');
    }

    return await prisma.$transaction(async (tx) => {
      await tx.channel.update({
        where: {
          id: channelId,
        },
        data: {
          subscribersCount: {
            decrement: 1,
          },
        },
      });
      return await tx.channelSubscriber.delete({
        where: {
          channelId_subscriberId: {
            channelId,
            subscriberId,
          },
        },
      });
    });
  }
}

export default new ChannelSubscriberService();
