import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import { sendSuccess } from '../utils/sendResponse.util';
import { AuthRequest } from '../middleware/authenticate.middleware';

export const addBalance = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  if (!userId) {
    throw new Error('User ID not found in request');
  }

  const updatedUser = await userService.addBalance(userId, req.body);
  return sendSuccess(res, updatedUser, 200, 'Balance added successfully');
};

export const getUserProfile = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  if (!userId) {
    throw new Error('User ID not found in request');
  }

  const userProfile = await userService.getUserProfile(userId);
  return sendSuccess(
    res,
    userProfile,
    200,
    'User profile fetched successfully',
  );
};

export const getPortfolioSummary = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  if (!userId) {
    throw new Error('User ID not found in request');
  }

  const portfolioSummary = await userService.getPortfolioSummary(userId);
  return sendSuccess(
    res,
    portfolioSummary,
    200,
    'Portfolio summary fetched successfully',
  );
};
