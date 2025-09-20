import { Request, Response } from 'express';
import * as logService from '../services/transactionLog.service';
import { sendSuccess, sendFailure } from '../utils/sendResponse.util';

export const getLogs = async (req: Request, res: Response) => {
  const { userId, email } = req.body;

  if (!userId && !email) {
    return sendFailure(res, 'Either userId or email is required', 400);
  }

  let logs;
  if (userId) logs = await logService.getLogsByUserId(userId);
  else logs = await logService.getLogsByEmail(email);

  return sendSuccess(res, logs);
};

export const getErrorSummary = async (req: Request, res: Response) => {
  const { userId, email } = req.body;

  try {
    const summary = await logService.getErrorSummary(userId, email);
    return sendSuccess(res, { summary }, 200, 'Error summary fetched');
  } catch (err: any) {
    return sendFailure(res, err.message, 400);
  }
};
