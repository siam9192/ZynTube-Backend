import express, { NextFunction, Request, Response } from 'express';

import { sendErrorResponse } from './utils/response';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes';
import webhookRouter from './routes/webhook.route';
const app = express();
// app.use(express.json());

app.use(cors({ credentials: true, origin: ['http://localhost:5173'] }));
app.use(cookieParser());

app.use('/api/v1', express.json(), routes);

app.use('/api/v1/webhooks', webhookRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  sendErrorResponse(res, {
    statusCode: err.statusCode || 500,
    message: err.message || 'Something went wrong',
  });
});

app.use((req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    res.status(200).json({
      message: 'Hey welcome to  server',
    });
  } else {
    res.status(404).json({
      success: false,
      statusCode: 404,
      message: 'Not Found',
    });
  }
});

export default app;
