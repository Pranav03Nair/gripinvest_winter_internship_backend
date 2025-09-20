import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';
export declare const validateRequest: (type: ZodType) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validateRequest.middleware.d.ts.map