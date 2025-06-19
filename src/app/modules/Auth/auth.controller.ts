import ms, { StringValue } from 'ms';
import envConfig from '../../config/env.config';
import httpStatus from '../../shared/http-status';
import { EEnvironment } from '../../types';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import AuthService from './auth.service';

class AuthController {
  googleCallback = catchAsync(async (req, res) => {
    const result = await AuthService.googleCallback(req.body);
    res.cookie('accessToken', result.accessToken, {
      httpOnly: true, // Prevents client-side JS from accessing the cookie
      secure: envConfig.environment === EEnvironment.PRODUCTION, // Ensures cookie is only sent over HTTPS in production
      sameSite: envConfig.environment === EEnvironment.PRODUCTION ? 'lax' : 'none', // Helps protect against CSRF
      maxAge: ms(envConfig.jwt.accessTokenExpireTime as StringValue),
      path: '/', // Cookie is accessible on the entire site
    });
    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true, // Prevents client-side JS from accessing the cookie
      secure: envConfig.environment === EEnvironment.PRODUCTION, // Ensures cookie is only sent over HTTPS in production
      sameSite: envConfig.environment === EEnvironment.PRODUCTION ? 'lax' : 'none', // Helps protect against CSRF
      maxAge: ms(envConfig.jwt.refreshTokenExpireTime as StringValue),
      path: '/', // Cookie is accessible on the entire site
    });

    sendSuccessResponse(res, {
      message: 'Login successful',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}

export default new AuthController();
