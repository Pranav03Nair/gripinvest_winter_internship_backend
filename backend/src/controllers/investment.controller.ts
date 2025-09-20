import { Request, Response } from 'express';
import * as investmentService from '../services/investment.service';
import { sendSuccess } from '../utils/sendResponse.util';
import { AuthRequest } from '../middleware/authenticate.middleware';

export const createInvestment = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id!;
  const investment = await investmentService.createInvestment(userId, req.body);
  return sendSuccess(res, investment, 201, 'Investment created successfully');
};

export const getMyInvestments = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id!;
  const investments = await investmentService.getAllUserInvestments(userId);
  return sendSuccess(res, investments, 200, 'User portfolio fetched');
};

export const cancelInvestment = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id!;
  const investmentId = req.params.id;
  await investmentService.cancelInvestment(userId, investmentId);
  return sendSuccess(res, null, 200, 'Investment cancelled');
};

export const getPortfolioInsights = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id!;
  const portfolio = await investmentService.getPortfolioInsights(userId);
  return sendSuccess(
    res,
    portfolio,
    200,
    'Portfolio insights fetched successfully',
  );
};

//! Illegal
export const forcematureInvestment = async (
  req: AuthRequest,
  res: Response,
) => {
  const userId = req.user?.id!;
  const investmentId = req.params.id;
  const maturedCount = await investmentService.forcematureInvestment(
    userId,
    investmentId,
  );
  return sendSuccess(
    res,
    { maturedCount },
    200,
    'Investment Forcefully Matured',
  );
};
