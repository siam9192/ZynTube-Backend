import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import systemSettingService from './system-setting.service';

class SystemSettingController {
  getCurrentSystemSetting = catchAsync(async (req, res) => {
    const result = await systemSettingService.getCurrentSettings();
    sendSuccessResponse(res, {
      message: 'System setting retrieved successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
  updateSystemSetting = catchAsync(async (req, res) => {
    const result = await systemSettingService.updateSystemSetting(req.body);
    sendSuccessResponse(res, {
      message: 'System setting updated successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}

export default new SystemSettingController();
