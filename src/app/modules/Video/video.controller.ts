import AppError from '../../Errors/AppError';
import muxClient from '../../mux';
import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import { sendSuccessResponse } from '../../utils/response';
import videoService from './video.service';

class VideoController {
  createVideo = catchAsync(async (req, res) => {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const thumbnailFile = files['thumbnail']?.[0];
    const videoFile = files['video']?.[0];

    const result = await videoService.createVideoIntoDB(req.user, {
      ...req.body,
      videoFile,
      thumbnailFile,
    });
    sendSuccessResponse(res, {
      message: 'Video successfully uploaded!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
  muxWebhook = catchAsync(async (req, res) => {
    const event = muxClient.webhooks.unwrap(req.body, req.headers);
    const result = await videoService.muxWebhook(event);
    sendSuccessResponse(res, {
      message: 'Webhook process  completed successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
}

export default new VideoController();
