import { Router } from 'express';
import videoReactionController from './video-reaction.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../prisma/generated/client';

const router = Router();

router.post('/', auth([UserRole.USER]), videoReactionController.switchVideoReaction);
router.get(
  '/video/:videoId/me',
  auth([UserRole.USER]),
  videoReactionController.getCurrentUserVideoReaction
);

const videoReactionRouter = router;

export default videoReactionRouter;
