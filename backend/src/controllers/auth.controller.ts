import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
import { sendSuccess } from '../utils/sendResponse.util';
import { AuthRequest } from '../middleware/authenticate.middleware';

export const signUp = async (req: Request, res: Response) => {
  const userData = await authService.createUser(req.body);
  return sendSuccess(res, userData, 201, 'Successfully created User profile');
};

export const login = async (req: Request, res: Response) => {
  const userData = await authService.loginUser(req.body);
  return sendSuccess(res, userData, 200, 'Successfully Logged In');
};

export const getAllUsers = async (req: AuthRequest, res: Response) => {
  const currentUserId = req.user?.id;
  const users = await authService.getAllUsers(currentUserId);
  return sendSuccess(res, users, 200, 'Successfully fetched all users');
};
