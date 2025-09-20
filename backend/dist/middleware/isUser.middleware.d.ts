import { Response, NextFunction } from 'express';
import { AuthRequest } from './authenticate.middleware';
export declare const isUser: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=isUser.middleware.d.ts.map