import envConfig from '../../config/env.config';
import AppError from '../../Errors/AppError';
import { UserRole, UserStatus } from '../../generated/prisma';
import jwtHelpers from '../../helpers/jwtHelpers';
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

    const result = await prisma.$transaction(async (txClient) => {
      let user;

      const existingUser = await prisma.user.findFirst({
        where: {
          email: userData.email,
          status: {
            not: UserStatus.DELETED,
          },
        },
        include: {
          sessions: true,
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
          browser: payload.browser,
          ip: payload.ip,
          userAgent: payload.userAgent,
          device: {
            create: device,
          },
          lastSeen: new Date(),
        },
      });

      user.sessions.push(createdSession);

      return {
        sessionId: createdSession.id,
        user,
      };
    });
    const user = result.user;

    if (user.status === UserStatus.BLOCKED) {
      throw new AppError(httpStatus.FORBIDDEN, 'This account is blocked');
    }

    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
      sessionId: result.sessionId,
    };

    const accessToken = jwtHelpers.generateToken(
      tokenPayload,
      envConfig.jwt.accessTokenSecret as string,
      envConfig.jwt.accessTokenExpireTime as string
    );
    const refreshToken = jwtHelpers.generateToken(
      tokenPayload,
      envConfig.jwt.refreshTokenSecret as string,
      envConfig.jwt.refreshTokenExpireTime as string
    );

    return {
      accessToken,
      refreshToken,
    };
  }
}

export default new AuthService();
