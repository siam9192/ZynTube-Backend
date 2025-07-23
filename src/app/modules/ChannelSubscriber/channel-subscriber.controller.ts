import { paginationOptionPicker } from '../../helpers/paginationHelper';
import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import Pick from '../../utils/pick';
import { sendSuccessResponse } from '../../utils/response';
import channelSubscriberService from './channel-subscriber.service';

class ChannelSubscriberController {
  createSubscriber = catchAsync(async (req, res) => {
    const result = await channelSubscriberService.createSubscriberIntoDB(req.user, req.body);
    sendSuccessResponse(res, {
      message: 'Channel subscribed successfully',
      statusCode: httpStatus.CREATED,
      data: result,
    });
  });
  deleteSubscriber = catchAsync(async (req, res) => {
    const result = await channelSubscriberService.deleteSubscriberFromDB(
      req.user,
      req.params.channelId
    );
    sendSuccessResponse(res, {
      message: 'Channel unsubscribed successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });

   getMySubscribeChannel = catchAsync(async (req, res) => {
    const result = await channelSubscriberService.getMySubscribeChannelsFromDB(req.user,Pick(req.query,['searchTerm']),paginationOptionPicker(req.query));
    sendSuccessResponse(res, {
      message: 'My subscribe channel retrieved successfully',
      statusCode: httpStatus.OK,
     ...result,
    });
  });
}

export default new ChannelSubscriberController();
