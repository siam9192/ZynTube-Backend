import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import channelService from './channel.service';

class ChannelController {
  checkChanelExistence = catchAsync(async (req, res) => {
    const result = await channelService.checkChannelExistWithUniqueName(req.params.name);
    sendSuccessResponse(res, {
      message: 'Existence checking successful',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
  getPublicChannel = catchAsync(async (req, res) => {
    const result = await channelService.getPublicChannelFromDB(req.user, req.params.uniqueName);
    sendSuccessResponse(res, {
      message: 'Channel retrieved successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}

export default new ChannelController();
