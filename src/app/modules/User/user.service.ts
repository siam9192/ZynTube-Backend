import AppError from '../../Errors/AppError';
import prisma from '../../prisma';
import httpStatus from '../../shared/http-status';
import { IAuthUser } from '../../types';
import { ISetupUserProfilePayload } from './user.interface';

class UserService {
  async getMeFromDB(authUser: IAuthUser) {
    const user = await prisma.user.findUnique({
      where: {
        id: authUser.userId,
      },
      include: {
        sessions: true,
        channel: {
          include: {
            _count: true,
          },
        },
      },
    });
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }
    return user;
  }

  async setupProfileIntoDB(authUser: IAuthUser, payload: ISetupUserProfilePayload) {
    const user = await prisma.user.findUnique({
      where: {
        id: authUser.userId,
      },
    });
    if (!user) throw new AppError(httpStatus.BAD_GATEWAY, 'Bad Gateway');
    if (user.setupStatus) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Your account is already set upped');
    }

    const channelExistByUniqueName = await prisma.channel.findUnique({
      where: {
        uniqueName: payload.channelUniqueName,
      },
    });

    if (channelExistByUniqueName) {
      throw new AppError(httpStatus.FORBIDDEN, 'Unique name is already exist');
    }

    prisma.$transaction(async (txClient) => {
      await txClient.channel.create({
        data: {
          userId: authUser.userId,
          name: payload.channelName,
          uniqueName: payload.channelUniqueName,
          profilePhotoUrl: payload.channelProfilePhotoUrl,
        },
      });
      await txClient.user.update({
        where: {
          id: authUser.userId,
        },
        data: {
          setupStatus: true,
        },
      });
    });
    return await prisma.user.findUnique({
      where: {
        id: authUser.userId,
      },
      include: {
        channel: true,
      },
    });
  }
}

export default new UserService();
