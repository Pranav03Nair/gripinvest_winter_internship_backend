import { Request, Response, NextFunction } from 'express';
import { AuthRequest } from './authenticate.middleware';
import { prisma } from '../utils/prisma.util';

export const transactionLogger = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const originalJson = res.json;
  const originalStatus = res.status;

  let responseBody: any = null;
  let statusCode: number = 200;
  let errorMessage: string | null = null;

  res.json = function (body: any) {
    responseBody = body;
    return originalJson.call(this, body);
  };

  res.status = function (code: number) {
    statusCode = code;
    return originalStatus.call(this, code);
  };

  res.on('finish', async () => {
    try {
      let userId: string | undefined = undefined;
      let userEmail: string | undefined = undefined;

      if (req.user) {
        userId = req.user.id;
        userEmail = req.user.email || '';
      } else if (req.originalUrl.includes('/auth/')) {
        if (req.body?.email) {
          userEmail = req.body.email;
        }

        if (responseBody?.success && responseBody?.data?.user) {
          userId = responseBody.data.user.id;
          userEmail = responseBody.data.user.email || userEmail;
        }
      }

      if (statusCode >= 400) {
        if (res.locals.errorMessage) {
          errorMessage = res.locals.errorMessage;
        } else if (responseBody?.error) {
          errorMessage = responseBody.error;
        } else if (responseBody?.message && !responseBody?.success) {
          errorMessage = responseBody.message;
        }
      }

      await prisma.transaction_logs.create({
        data: {
          user_id: userId || null,
          email: userEmail || null,
          endpoint: req.originalUrl,
          http_method: req.method as any,
          status_code: statusCode,
          error_message: errorMessage,
        },
      });
    } catch (err) {
      console.error('[TransactionLogger] Failed to log transaction:', err);
    }
  });

  next();
};
