import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import userService from './user.service';
import { sendSuccessResponse } from '../../utils/response';
import httpStatus from '../../shared/http-status';

class UserController {
  getMe = catchAsync(async (req: Request, res: Response) => {
    const result = await userService.getMeFromDB(req.user);
    sendSuccessResponse(res, {
      statusCode: httpStatus.OK,
      message: 'My profile retrieved successfully',
      data: result,
    });
  });
  setupUserProfile = catchAsync(async (req: Request, res: Response) => {
    const result = await userService.setupProfileIntoDB(req.user, req.body);
    sendSuccessResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Profile setup successful',
      data: result,
    });
  });
  updateProfile = catchAsync(async (req: Request, res: Response) => {
    const result = await userService.updateUserIntoDB(req.user, req.body);
    sendSuccessResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Profile updated successfully',
      data: result,
    });
  });
}

export default new UserController();
