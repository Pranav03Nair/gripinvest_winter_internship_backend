import { Request, Response, NextFunction } from 'express';
import { sendFailure } from '../utils/sendResponse.util';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(`[ERROR] ${err.name}: ${err.message}`);

  res.locals.errorMessage = err.message;

  return sendFailure(res, err.message, 500);
};
