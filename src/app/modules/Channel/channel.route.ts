import { Router } from 'express';
import channelController from './channel.controller';

const router = Router();

router.get('/:name/exist', channelController.checkChanelExistence);

const channelRouter = router;

export default channelRouter;
