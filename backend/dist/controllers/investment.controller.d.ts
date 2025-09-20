import { Response } from 'express';
import { AuthRequest } from '../middleware/authenticate.middleware';
export declare const createInvestment: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getMyInvestments: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const cancelInvestment: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getPortfolioInsights: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const forcematureInvestment: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=investment.controller.d.ts.map