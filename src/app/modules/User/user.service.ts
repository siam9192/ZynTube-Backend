import { Channel } from 'node:diagnostics_channel';
import AppError from '../../Errors/AppError';
import prisma from '../../prisma';
import httpStatus from '../../shared/http-status';
import { IAuthUser } from '../../types';
import { ISetupUserProfilePayload, IUpdateUserProfilePayload } from './user.interface';

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

    let uniqueName = payload.channelUniqueName;
    if (!uniqueName.startsWith('@')) {
      uniqueName = '@' + uniqueName.replace('@', '');
    }

    uniqueName = uniqueName.toLowerCase();
    const channelExistByUniqueName = await prisma.channel.findUnique({
      where: {
        uniqueName: uniqueName,
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
          uniqueName: uniqueName,
          profilePhotoUrl: payload.channelProfilePhotoUrl,
        },
      });
      await txClient.user.update({
        where: {
          id: authUser.userId,
        },
        data: {
          setupStatus: true,
          profileChanges: {
            update: {
              lastChannelNameChange: new Date(),
              lastChannelUniqueNameChange: new Date(),
              lastProfilePhotoChange: new Date(),
            },
          },
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
  async updateUserIntoDB(authUser: IAuthUser, payload: IUpdateUserProfilePayload) {
    console.log(payload);
    const user = await prisma.user.findUnique({
      where: {
        id: authUser.userId,
      },
      include: {
        channel: true,
        profileChanges: true,
      },
    });

    if (!user) {
      throw new AppError(httpStatus.BAD_GATEWAY, 'Bad gateway');
    }

    const { channel } = user;

    if (!channel) {
      throw new AppError(httpStatus.BAD_GATEWAY, 'Bad gateway');
    }
    const channelUpdateData: Record<string, string> = {};

    const changesFields: string[] = [];

    // Handle unique name update
    if (payload.channelUniqueName && payload.channelUniqueName !== channel?.uniqueName) {
      const uniqueName = '@' + payload.channelUniqueName;
      const existingChannel = await prisma.channel.findUnique({
        where: { uniqueName },
      });

      if (existingChannel) {
        throw new AppError(httpStatus.FORBIDDEN, 'This username is already in use');
      }

      channelUpdateData.uniqueName = '@' + payload.channelUniqueName;
      changesFields.push('lastChannelUniqueNameChange');
    }

    // Simple field updates
    if (payload.channelName && payload.channelName !== channel?.name) {
      channelUpdateData.name = payload.channelName;
      changesFields.push('lastChannelNameChange');
    }

    if (payload.channelAbout && payload.channelAbout !== channel?.about) {
      channelUpdateData.about = payload.channelAbout;
      changesFields.push('lastChannelAboutChange');
    }

    // Check for correct comparison: should be !== instead of ===
    if (
      payload.channelProfilePhotoUrl &&
      payload.channelProfilePhotoUrl !== channel?.profilePhotoUrl // fixed this line
    ) {
      channelUpdateData.profilePhotoUrl = payload.channelProfilePhotoUrl;
      changesFields.push('lastProfilePhotoChange');
    }

    if (
      payload.channelProfileCoverPhotoUrl &&
      payload.channelProfileCoverPhotoUrl !== channel?.profileCoverPhotoUrl
    ) {
      channelUpdateData.profileCoverPhotoUrl = payload.channelProfileCoverPhotoUrl;
      changesFields.push('lastCoverPhotoChange');
    }

    console.log(channelUpdateData);
    const result = await prisma.$transaction(async (txClient) => {
      const update = await txClient.channel.update({
        where: {
          id: channel.id,
        },
        data: channelUpdateData,
      });
      console.log(update);
      const today = new Date();
      if (changesFields.length) {
        await txClient.profileChange.update({
          where: {
            userId: user.id,
          },
          data: changesFields.reduce((p, c) => ({ ...p, [c]: today }), {} as Record<string, Date>),
        });
      }
    });

    return await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      include: {
        channel: true,
        profileChanges: true,
      },
    });
  }
}

export default new UserService();
