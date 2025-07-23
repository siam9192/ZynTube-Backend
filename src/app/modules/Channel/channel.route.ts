import { Router } from 'express';
import channelController from './channel.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../prisma/generated/client';

const router = Router();

router.get('/:name/exist', channelController.checkChanelExistence);

router.get(
  '/public/:uniqueName',
  auth([UserRole.USER], { providerMode: true }),
  channelController.getPublicChannel
);

const channelRouter = router;
export default channelRouter;
