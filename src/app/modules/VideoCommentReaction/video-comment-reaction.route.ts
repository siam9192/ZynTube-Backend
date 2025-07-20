import { Router } from 'express';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../prisma/generated/client';
import videoCommentReactionController from './video-comment-reaction.controller';

const router = Router();

router.post('/', auth([UserRole.USER]), videoCommentReactionController.switchVideoCommentReaction);
router.get(
  '/comment/:commentId/me',
  auth([UserRole.USER]),
  videoCommentReactionController.getCurrentUserVideoCommentReaction
);

const videoCommentReactionRouter = router;

export default videoCommentReactionRouter;
