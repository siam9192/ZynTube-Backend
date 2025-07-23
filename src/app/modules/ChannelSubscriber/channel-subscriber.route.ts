import e, { Router } from 'express';
import auth from '../../middlewares/auth';
import { UserRole } from '../../../../prisma/generated/client';
import channelSubscriberController from './channel-subscriber.controller';

const router = Router();
router.post('/', auth([UserRole.USER]), channelSubscriberController.createSubscriber);
router.delete('/:channelId', auth([UserRole.USER]), channelSubscriberController.deleteSubscriber);
router.get('/subscribes/my', auth([UserRole.USER]),channelSubscriberController.getMySubscribeChannel)
const channelSubscriberRouter = router;

export default channelSubscriberRouter;
