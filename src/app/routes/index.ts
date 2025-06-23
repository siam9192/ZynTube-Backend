import { IRouter, Router } from 'express';
import authRouter from '../modules/Auth/auth.route';
import userRouter from '../modules/User/user.route';
import channelRouter from '../modules/Channel/channel.route';
import imagekitRouter from '../modules/Imagekit/imagekit.route';
import videoRouter from '../modules/Video/video.route';

type TModuleRoutes = { path: string; router: IRouter }[];
const router = Router();
const moduleRoutes: TModuleRoutes = [
  {
    path: '/auth',
    router: authRouter,
  },
  {
    path: '/users',
    router: userRouter,
  },
  {
    path: '/channels',
    router: channelRouter,
  },
  {
    path: '/videos',
    router: videoRouter,
  },
  {
    path: '/imagekit',
    router: imagekitRouter,
  },
];

const routes = moduleRoutes.map((route) => router.use(route.path, route.router));

export default routes;
