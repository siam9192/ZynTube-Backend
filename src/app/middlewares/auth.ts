import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../Errors/AppError';
import httpStatus from '../shared/http-status';
import { UserRole, UserStatus } from '../generated/prisma';
import prisma from '../prisma';
import { IGoogleUser } from '../modules/User/user.interface';

function auth(...requiredRoles: UserRole[]) {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized  user!');
    }

    const userInfoUrl = 'https://www.googleapis.com/oauth2/v3/userinfo';

    const response = await fetch(userInfoUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to fetch Google user info');
    }

    const userData: IGoogleUser = await response.json();

    // checking if the user is exist
    const user = await prisma.user.findFirst({
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

    if (!user) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'User not found!');
    }

    // checking if the user is blocked
    if (user.status === UserStatus.BLOCKED) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'User is blocked');
    }

    const { id, email, role } = user;

    // Check session
    if (user.sessions.length) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid session');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized  !');
    }

    req.user = {
      id,
      email,
      role,
    };

    next();
  });
}

export default auth;
