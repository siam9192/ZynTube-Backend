import { IRouter, Router } from 'express';
import authRouter from '../modules/Auth/auth.route';
import userRouter from '../modules/User/user.route';
import channelRouter from '../modules/Channel/channel.route';
import imagekitRouter from '../modules/Imagekit/imagekit.route';
import videoRouter from '../modules/Video/video.route';
import videoReactionRouter from '../modules/VideoReaction/video-reaction.route';
import channelSubscriberRouter from '../modules/ChannelSubscriber/channel-subscriber.route';
import videoCommentRouter from '../modules/VideoComment/video-comment.route';
import videoCommentReactionRouter from '../modules/VideoCommentReaction/video-comment-reaction.route';

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
    path: '/video-reactions',
    router: videoReactionRouter,
  },
  {
    path: '/video-comments',
    router: videoCommentRouter,
  },
  {
    path: '/video-comment-reactions',
    router: videoCommentReactionRouter,
  },
  {
    path: '/channel-subscribers',
    router: channelSubscriberRouter,
  },
  {
    path: '/imagekit',
    router: imagekitRouter,
  },
];

const routes = moduleRoutes.map((route) => router.use(route.path, route.router));

export default routes;
