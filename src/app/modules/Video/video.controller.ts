import { paginationOptionPicker } from '../../helpers/paginationHelper';
import muxClient from '../../mux';
import httpStatus from '../../shared/http-status';
import catchAsync from '../../utils/catchAsync';
import Pick from '../../utils/pick';
import { sendSuccessResponse } from '../../utils/response';
import { ERelatedVideoType, IVideoSearchFilterPayload } from './video.interface';
import videoService from './video.service';
import videoValidation from './video.validation';

class VideoController {
  createVideo = catchAsync(async (req, res) => {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const thumbnailFile = files['thumbnail']?.[0];
    const videoFile = files['video']?.[0];

    const body = JSON.parse(req.body.body);

    videoValidation.createVideo.parse(body);

    const result = await videoService.createVideoIntoDB(req.user, {
      ...body,
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
    const headersList = req.headers;
    const body = req.body;
    const strBody = JSON.stringify(body);
    // console.log(`The body type is ${typeof strBody}`,strBody)
    const event = muxClient.webhooks.unwrap(strBody, headersList);
    const result = await videoService.muxWebhook(event);
    sendSuccessResponse(res, {
      message: 'Webhook process completed successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });

  getMyVideos = catchAsync(async (req, res) => {
    const paginationOptions = paginationOptionPicker(req.query);
    const result = await videoService.getMyVideosFromDB(req.user, paginationOptions);
    sendSuccessResponse(res, {
      message: 'My Videos retrieved successfully!',
      statusCode: httpStatus.OK,
      ...result,
    });
  });
  getMyVideoById = catchAsync(async (req, res) => {
    const result = await videoService.getMyVideoByIdFromDB(req.user, req.params.id);
    sendSuccessResponse(res, {
      message: 'Video retrieved successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
  updateVideo = catchAsync(async (req, res) => {
    const thumbnailFile = req.file as Express.Multer.File;

    const body = JSON.parse(req.body.body);
    videoValidation.updateVideo.parse(body);
    const payload = {
      ...body,
      thumbnailFile,
    };
    const result = await videoService.updateVideoIntoDB(req.user, req.params.id, payload);
    sendSuccessResponse(res, {
      message: 'Video retrieved successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
  deleteVideoById = catchAsync(async (req, res) => {
    const result = await videoService.deleteVideoFromDB(req.user, req.params.id);
    sendSuccessResponse(res, {
      message: 'Video deleted successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
  getHomeFeedVideos = catchAsync(async (req, res) => {
    const result = await videoService.getHomeFeedVideosFromDB(
      req.user,
      req.query.category as string,
      paginationOptionPicker(req.params)
    );
    sendSuccessResponse(res, {
      message: 'Home feed videos retrieved successfully!',
      statusCode: httpStatus.OK,
      ...result,
    });
  });
  getWatchVideo = catchAsync(async (req, res) => {
    const result = await videoService.getWatchVideoFromDB(req.user, req.params.id);
    sendSuccessResponse(res, {
      message: 'Home feed videos retrieved successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
  getRelatedVideos = catchAsync(async (req, res) => {
    const result = await videoService.getRelatedVideosFromDB(
      req.user,
      req.params.id,
      req.query.type as ERelatedVideoType
    );
    sendSuccessResponse(res, {
      message: 'Related videos retrieved successfully!',
      statusCode: httpStatus.OK,
      data: result,
    });
  });
  getSearchVideos =  catchAsync(async (req, res) => {
    const filterPayload =  Pick(req.query,['search_query','type','minDuration','maxDuration'])
    const result = await videoService.getSearchVideosFromDB(
      req.user,
     filterPayload,
     paginationOptionPicker(req.query)
    );
    sendSuccessResponse(res, {
      message: 'Related videos retrieved successfully!',
      statusCode: httpStatus.OK,
      ...result,
    });
  });
}

export default new VideoController();
