import { Response, NextFunction } from 'express';
import { sendFailure } from '../utils/sendResponse.util';
import { AuthRequest } from './authenticate.middleware';

export const isUser = (req: AuthRequest, res: Response, next: NextFunction) => {
  const user = req.user;

  if (!user) {
    return sendFailure(res, 'Unauthorized: No user found', 401);
  }

  if (user.role !== 'user') {
    return sendFailure(res, 'Forbidden: Users only', 403);
  }

  next();
};
