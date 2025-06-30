import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import videoReactionService from './video-reaction.service';

class VideoReactionController {
  switchVideoReaction = catchAsync(async (req, res) => {
    const result = await videoReactionService.switchVideoReactionIntoDB(req.user, req.body);
    sendSuccessResponse(res, {
      message: result.message,
      statusCode: httpStatus.OK,
      data: result.data,
    });
  });
  getCurrentUserVideoReaction = catchAsync(async (req, res) => {
    const result = await videoReactionService.getUserVideoReactionIntoDB(
      req.user.userId,
      req.params.videoId
    );
    sendSuccessResponse(res, {
      message: 'Video reaction  retrieved successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}

export default new VideoReactionController();
