import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequestParams = (zodSchema: AnyZodObject): any => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      zodSchema.parse(req.params);
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default validateRequestParams;
