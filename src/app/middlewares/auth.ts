import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../Errors/AppError';
import httpStatus from '../shared/http-status';
import prisma from '../prisma';
import { IAuthUser } from '../types';
import jwtHelpers from '../helpers/jwtHelpers';
import envConfig from '../config/env.config';
import { JwtPayload } from 'jsonwebtoken';
import { UserRole, UserStatus } from '../../../prisma/generated/client';

function auth(requiredRoles: UserRole[], authConfig?: { providerMode: Boolean }) {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');

    // checking if the token is missing
    if (!token) {
      if (authConfig?.providerMode === true) {
        return next();
      }
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    // checking if the given token is valid
    let decoded;
    try {
      decoded = jwtHelpers.verifyToken(
        token,
        envConfig.jwt.accessTokenSecret as string
      ) as JwtPayload & IAuthUser;
    } catch (error) {
      if (authConfig?.providerMode) return next();
      throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized');
    }

    const { userId, email, role, sessionId } = decoded;

    // checking if the user is exist
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
        status: {
          not: UserStatus.DELETED,
        },
      },
      include: {
        sessions: true,
      },
    });

    if (!user) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'User not found!');
    }

    // checking if the user is blocked
    if (user.status === UserStatus.BLOCKED) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'User is blocked');
    }

    // Check session
    if (user.sessions.length === 0) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid session');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized  !');
    }

    const reqUser: IAuthUser = {
      sessionId,
      userId,
      email,
      role,
    };
    req.user = reqUser;

    next();
  });
}

export default auth;
