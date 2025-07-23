import { ChannelStatus, Prisma } from '../../../../prisma/generated/client';
import AppError from '../../Errors/AppError';
import { calculatePagination } from '../../helpers/paginationHelper';
import prisma from '../../prisma';
import httpStatus from '../../shared/http-status';
import { IAuthUser, IPaginationOptions } from '../../types';
import { ICreateChannelSubscriberPayload, IMySubscribeChannelFilterPayload } from './channel-subscriber.interface';

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

  async getMySubscribeChannelsFromDB (authUser:IAuthUser,filterPayload:IMySubscribeChannelFilterPayload,paginationOptions:IPaginationOptions) {
    
    const {searchTerm} =  filterPayload
    const {page,limit,skip,sortBy,sortOrder} =  calculatePagination(paginationOptions)
    
    const andCondition:Prisma.ChannelSubscriberWhereInput[] = []
   
     
    if(searchTerm){
    andCondition.push({
        channel : {
        name:{
          contains:searchTerm,
          mode:'insensitive'
        }
      }
    })
    }

     const whereCondition:Prisma.ChannelSubscriberWhereInput = {
       subscriberId:authUser.userId,
       channel:{
        status:ChannelStatus.ACTIVE
       },
       AND:andCondition
    }

    
    

    const subscribes = await prisma.channelSubscriber.findMany({
      where:whereCondition,
      take:limit,
      skip,
      orderBy:{
        [sortBy]:sortOrder
      },
      include:{
        channel:true
      }
    })

    const totalResult = await prisma.channelSubscriber.count({where:whereCondition})

    const meta = {
      page,
      limit,
      totalResult
    }

    return {
      data:subscribes,
      meta
    }
  }
}

export default new ChannelSubscriberService();
