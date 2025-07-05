import { Router } from 'express';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../prisma/generated/client';
import validateRequest from '../../middlewares/validateRequest';
import videoCommentValidation from './video-comment.validation';
import videoCommentController from './video-comment.controller';

const router = Router();

router.post(
  '/',
  auth([UserRole.USER]),
  validateRequest(videoCommentValidation.createVideoComment),
  videoCommentController.createVideoComment
);

router.patch(
  '/change-pin-status/:id',
  auth([UserRole.USER]),
  validateRequest(videoCommentValidation.changeVideoCommentPinStatus),
  videoCommentController.changeVideoCommentPinStatus
);

router.put(
  '/:id',
  auth([UserRole.USER]),
  validateRequest(videoCommentValidation.updateVideoComment),
  videoCommentController.updateVideoComment
);

router.delete('/:id', auth([UserRole.USER]), videoCommentController.deleteVideoComment);

router.get(
  '/video/:videoId',
  auth([UserRole.USER], { providerMode: true }),
  videoCommentController.getVideoComments
);

router.get(
  '/:id/replies',
  auth([UserRole.USER], { providerMode: true }),
  videoCommentController.getVideoCommentAllReplies
);

const videoCommentRouter = router;

export default videoCommentRouter;
