import { Router } from 'express';
import auth from '../../middlewares/auth';
import { UserRole } from '../../generated/prisma';
import userController from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import userValidation from './user.validation';

const router = Router();
router.get('/me', auth(UserRole.USER), userController.getMe);
router.post(
  '/profile/setup',
  auth(UserRole.USER),
  validateRequest(userValidation.setupProfile),
  userController.setupUserProfile
);

const userRouter = router;

export default userRouter;
