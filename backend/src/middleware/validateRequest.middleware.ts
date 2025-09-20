import { Request, Response, NextFunction } from 'express';
import { z, ZodType } from 'zod';
import { sendFailure } from '../utils/sendResponse.util';

export const validateRequest = (type: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = type.safeParse(req.body);

    if (!result.success) {
      console.log(result.error);
      const errorMessages = z.treeifyError(result.error);
      return sendFailure(
        res,
        'Invalid Input',
        422,
        JSON.stringify(errorMessages),
      );
    }

    req.body = result.data;

    next();
  };
};
