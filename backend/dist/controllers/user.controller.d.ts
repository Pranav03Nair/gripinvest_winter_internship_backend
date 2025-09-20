import { Response } from 'express';
import { AuthRequest } from '../middleware/authenticate.middleware';
export declare const addBalance: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getUserProfile: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getPortfolioSummary: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=user.controller.d.ts.map