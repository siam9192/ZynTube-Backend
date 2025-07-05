import { paginationOptionPicker } from '../../helpers/paginationHelper';
import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import { EVideoCommentFilterType } from './video-comment.interface';
import videoCommentService from './video-comment.service';

class VideoCommentController {
  createVideoComment = catchAsync(async (req, res) => {
    const result = await videoCommentService.createVideoCommentIntoDB(req.user, req.body);
    sendSuccessResponse(res, {
      message: 'Comment   created successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
  deleteVideoComment = catchAsync(async (req, res) => {
    const result = await videoCommentService.deleteVideoCommentFromDB(req.user, req.params.id);
    sendSuccessResponse(res, {
      message: 'Comment deleted  successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
  changeVideoCommentPinStatus = catchAsync(async (req, res) => {
    const result = await videoCommentService.changeVideoCommentPinStatus(
      req.user,
      req.params.id,
      req.body
    );
    sendSuccessResponse(res, {
      message: result.message,
      statusCode: httpStatus.OK,
      data: result.data,
    });
  });
  updateVideoComment = catchAsync(async (req, res) => {
    const result = await videoCommentService.updateVideoCommentIntoDB(
      req.user,
      req.params.id,
      req.body
    );
    sendSuccessResponse(res, {
      message: 'Comment updated successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });

  getVideoComments = catchAsync(async (req, res) => {
    const result = await videoCommentService.getVideoComments(
      req.user,
      req.params.videoId,
      req.query.type as EVideoCommentFilterType,
      paginationOptionPicker(req.query)
    );

    sendSuccessResponse(res, {
      message: 'Video comments retrieved successfully',
      statusCode: httpStatus.OK,
      ...result,
    });
  });
  getVideoCommentAllReplies = catchAsync(async (req, res) => {
    const result = await videoCommentService.getVideoCommentAllRepliesFromDB(
      req.user,
      req.params.id
    );
    sendSuccessResponse(res, {
      message: 'Video comments retrieved successfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}

export default new VideoCommentController();
