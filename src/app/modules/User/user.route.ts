import { Router } from 'express';
import auth from '../../middlewares/auth';
import userController from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import userValidation from './user.validation';
import { UserRole } from '../../../../prisma/generated/client';

const router = Router();
router.get('/me', auth([UserRole.USER]), userController.getMe);
router.post(
  '/profile/setup',
  auth([UserRole.USER]),
  validateRequest(userValidation.setupProfile),
  userController.setupUserProfile
);
router.put(
  '/profile',
  auth([UserRole.USER]),
  validateRequest(userValidation.updateProfile),
  userController.updateProfile
);

const userRouter = router;

export default userRouter;
