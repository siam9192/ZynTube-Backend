import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import authValidation from './auth.validation';
import authController from './auth.controller';

const router = Router();

router.post(
  '/google-callback',
  validateRequest(authValidation.googleCallback),
  authController.googleCallback
);

const authRouter = router;

export default authRouter;
