import { Router } from 'express';
import videoController from '../modules/Video/video.controller';
import bodyParser from 'body-parser';
import express from 'express';

const router = Router();

router.post('/mux', express.raw({ type: 'application/json' }), videoController.muxWebhook);

const webhookRouter = router;

export default webhookRouter;
