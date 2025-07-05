import { Router } from 'express';
import upload from '../../middlewares/uploadMiddleWare';
import videoController from './video.controller';
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
  videoController.createVideo
);
router.put('/:id', upload.single('thumbnail'), auth([UserRole.USER]), videoController.updateVideo);
router.delete('/:id', auth([UserRole.USER]), videoController.deleteVideoById);

router.get('/my', auth([UserRole.USER]), videoController.getMyVideos);
router.get('/my/:id', auth([UserRole.USER]), videoController.getMyVideoById);
router.get('/home-feed', videoController.getHomeFeedVideos);
router.get(
  '/watch/:id',
  auth([UserRole.USER], { providerMode: true }),
  videoController.getWatchVideo
);
router.get('/related/:id', videoController.getRelatedVideos);
router.get('/search',auth([UserRole.USER],{
  providerMode:true
}),videoController.getSearchVideos)
const videoRouter = router;

export default videoRouter;
