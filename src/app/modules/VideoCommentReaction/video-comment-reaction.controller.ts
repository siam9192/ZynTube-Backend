import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import videoCommentReactionService from './video-comment-reaction.service';

class VideoCommentReactionController {
  switchVideoCommentReaction = catchAsync(async (req, res) => {
    const result = await videoCommentReactionService.switchReactionIntoDB(req.user, req.body);
    sendSuccessResponse(res, {
      message: result.message,
      statusCode: httpStatus.OK,
      data: result.data,
    });
  });
  getCurrentUserVideoCommentReaction = catchAsync(async (req, res) => {
    const result = await videoCommentReactionService.getUserVideoReactionIntoDB(
      req.user.userId,
      req.params.videoId
    );
    sendSuccessResponse(res, {
      message: 'Comment reaction  retrieved successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}

export default new VideoCommentReactionController();
