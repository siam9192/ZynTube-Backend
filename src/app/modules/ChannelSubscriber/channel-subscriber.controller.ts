import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import channelSubscriberService from './channel-subscriber.service';


class ChannelSubscriberController {
  createSubscriber = catchAsync(async (req, res) => {
    const result = await channelSubscriberService.createSubscriberIntoDB(req.user,req.body);
    sendSuccessResponse(res, {
      message: 'Channel subscribed successfully',
      statusCode: httpStatus.OK,
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
}

export default new ChannelSubscriberController();
