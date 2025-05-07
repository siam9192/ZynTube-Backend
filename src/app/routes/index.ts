import { IRouter, Router } from 'express';
import authRouter from '../modules/Auth/auth.route';


type TModuleRoutes = { path: string; router: IRouter }[];
const router = Router();
const moduleRoutes: TModuleRoutes = [
  {
    path: '/auth',
    router: authRouter,
  },
  
];

const routes = moduleRoutes.map((route) => router.use(route.path, route.router));

export default routes;
