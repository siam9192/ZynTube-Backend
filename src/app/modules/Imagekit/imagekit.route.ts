import { Router } from 'express';
import imagekit from './imagekit.config';

const router = Router();

router.get('/auth', (req, res) => {
  const authParams = imagekit.getAuthenticationParameters();
  res.json(authParams);
});

const imagekitRouter = router;

export default imagekitRouter;
