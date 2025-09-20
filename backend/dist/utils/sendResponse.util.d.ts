import { Response } from 'express';
export declare function sendSuccess<T>(res: Response, data: T, status?: number, message?: string): Response<any, Record<string, any>>;
export declare function sendFailure(res: Response, error: string, status?: number, message?: string): Response<any, Record<string, any>>;
//# sourceMappingURL=sendResponse.util.d.ts.map