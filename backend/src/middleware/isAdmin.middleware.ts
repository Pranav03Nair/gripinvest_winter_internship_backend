import { Response, NextFunction } from 'express';
import { sendFailure } from '../utils/sendResponse.util';
import { AuthRequest } from './authenticate.middleware';

export const isAdmin = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const user = req.user;

  if (!user) {
    return sendFailure(res, 'Unauthorized: No user found', 401);
  }

  if (user.role !== 'admin') {
    return sendFailure(res, 'Forbidden: Admins only', 403);
  }

  next();
};
