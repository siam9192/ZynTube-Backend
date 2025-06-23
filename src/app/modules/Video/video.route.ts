import { Router } from 'express';
import upload from '../../middlewares/uploadMiddleWare';
import videoController from './video.controller';
import validateRequest from '../../middlewares/validateRequest';
import videoValidation from './video.validation';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../prisma/generated/client';

const router = Router();
router.post(
  '/upload',
  auth([UserRole.USER]),
  upload.fields([
    { name: 'video', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 },
  ]),
  validateRequest(videoValidation.createVideo),
  videoController.createVideo
);
router.post('/mux-webhook',videoController.muxWebhook)

const videoRouter = router;

export default videoRouter;
