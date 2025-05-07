import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import authService from './auth.service';
import AuthService from './auth.service';

class AuthController {
  googleCallback = catchAsync(async (req, res) => {
    const result = await AuthService.googleCallback(req.body);
    sendSuccessResponse(res, {
      message: 'Login successful',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
  
}

export default new AuthController();
