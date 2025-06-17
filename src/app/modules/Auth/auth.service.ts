import AppError from '../../Errors/AppError';
import { UserRole, UserStatus } from '../../generated/prisma';
import prisma from '../../prisma';
import httpStatus from '../../shared/http-status';
import { IGoogleUser } from '../User/user.interface';
import { IGoogleCallbackPayload } from './auth.interface';

class AuthService {
  async googleCallback(payload: IGoogleCallbackPayload) {
    const userInfoUrl = 'https://www.googleapis.com/oauth2/v3/userinfo';
    const response = await fetch(userInfoUrl, {
      headers: {
        Authorization: `Bearer ${payload.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch Google user info');
    }

    const userData: IGoogleUser = await response.json();

    const result = prisma.$transaction(async (txClient) => {
      let user;

      const existingUser = await prisma.user.findFirst({
        where: {
          email: userData.email,
          status: {
            not: UserStatus.DELETED,
          },
        },
      });

      if (existingUser) {
        // Create or update user
        await txClient.user.update({
          where: {
            id: existingUser.id,
          },
          data: {
            email: userData.email,
            lastLoginAt: new Date(),
          },
          include: {
            sessions: true,
          },
        });
        user = existingUser;
      } else {
        const newUser = await txClient.user.create({
          data: {
            email: userData.email,
            role: UserRole.USER,
            lastLoginAt: new Date(),
            status: UserStatus.ACTIVE,
          },
          include: {
            sessions: true,
          },
        });

        if (!newUser) {
          throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to create user');
        }
        user = newUser;
      }
      const device = payload.device;
      const createdSession = await txClient.session.create({
        data: {
          userId: user.id,
          sessionToken: payload.accessToken,
          browser: payload.browser,
          ip: payload.ip,
          userAgent: payload.userAgent,
          device: {
            create: device,
          },
          lastSeen: new Date(),
        },
      });
      return {
        sessionId: createdSession.id,
        user,
      };
    });

    return result;
  }
}

export default new AuthService();
