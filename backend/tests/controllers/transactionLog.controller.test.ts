import { Request, Response } from 'express';
import * as transactionLogController from '../../src/controllers/transactionLog.controller';
import * as logService from '../../src/services/transactionLog.service';
import { sendSuccess, sendFailure } from '../../src/utils/sendResponse.util';

// Mock dependencies
jest.mock('../../src/services/transactionLog.service');
jest.mock('../../src/utils/sendResponse.util');

describe('Transaction Log Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {
      body: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();
  });

  describe('getLogs', () => {
    it('should get logs by userId when provided', async () => {
      const mockLogs = [{ id: '1', action: 'login', userId: 'user-1' }];
      req.body = { userId: 'user-1' };

      (logService.getLogsByUserId as jest.Mock).mockResolvedValue(mockLogs);
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await transactionLogController.getLogs(req as Request, res as Response);

      expect(logService.getLogsByUserId).toHaveBeenCalledWith('user-1');
      expect(sendSuccess).toHaveBeenCalledWith(res, mockLogs);
    });

    it('should get logs by email when userId not provided', async () => {
      const mockLogs = [
        { id: '1', action: 'login', email: 'test@example.com' },
      ];
      req.body = { email: 'test@example.com' };

      (logService.getLogsByEmail as jest.Mock).mockResolvedValue(mockLogs);
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await transactionLogController.getLogs(req as Request, res as Response);

      expect(logService.getLogsByEmail).toHaveBeenCalledWith(
        'test@example.com',
      );
      expect(sendSuccess).toHaveBeenCalledWith(res, mockLogs);
    });

    it('should return error when neither userId nor email provided', async () => {
      req.body = {};
      (sendFailure as jest.Mock).mockReturnValue(res);

      await transactionLogController.getLogs(req as Request, res as Response);

      expect(sendFailure).toHaveBeenCalledWith(
        res,
        'Either userId or email is required',
        400,
      );
      expect(logService.getLogsByUserId).not.toHaveBeenCalled();
      expect(logService.getLogsByEmail).not.toHaveBeenCalled();
    });
  });

  describe('getErrorSummary', () => {
    it('should get error summary successfully', async () => {
      const mockSummary = { totalErrors: 5, criticalErrors: 2 };
      req.body = { userId: 'user-1', email: 'test@example.com' };

      (logService.getErrorSummary as jest.Mock).mockResolvedValue(mockSummary);
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await transactionLogController.getErrorSummary(
        req as Request,
        res as Response,
      );

      expect(logService.getErrorSummary).toHaveBeenCalledWith(
        'user-1',
        'test@example.com',
      );
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        { summary: mockSummary },
        200,
        'Error summary fetched',
      );
    });

    it('should handle service error', async () => {
      const errorMessage = 'Service error occurred';
      req.body = { userId: 'user-1' };

      (logService.getErrorSummary as jest.Mock).mockRejectedValue(
        new Error(errorMessage),
      );
      (sendFailure as jest.Mock).mockReturnValue(res);

      await transactionLogController.getErrorSummary(
        req as Request,
        res as Response,
      );

      expect(sendFailure).toHaveBeenCalledWith(res, errorMessage, 400);
    });
  });
});
