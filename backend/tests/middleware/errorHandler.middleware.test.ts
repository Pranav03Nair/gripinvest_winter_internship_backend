import { Request, Response, NextFunction } from 'express';
import { errorHandler } from '../../src/middleware/errorHandler.middleware';
import { sendFailure } from '../../src/utils/sendResponse.util';

// Mock dependencies
jest.mock('../../src/utils/sendResponse.util');

describe('Error Handler Middleware', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {};
    res = {
      locals: {},
    } as Response;
    next = jest.fn();
    jest.clearAllMocks();

    // Mock console.error to avoid noise in test output
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('errorHandler', () => {
    it('should handle error and send failure response', () => {
      const error = new Error('Test error message');
      (sendFailure as jest.Mock).mockReturnValue(res);

      errorHandler(error, req as Request, res as Response, next);

      expect(console.error).toHaveBeenCalledWith(
        '[ERROR] Error: Test error message',
      );
      expect(res.locals!.errorMessage).toBe('Test error message');
      expect(sendFailure).toHaveBeenCalledWith(res, 'Test error message', 500);
    });

    it('should handle custom error types', () => {
      const customError = new TypeError('Type error occurred');
      customError.name = 'CustomError';
      (sendFailure as jest.Mock).mockReturnValue(res);

      errorHandler(customError, req as Request, res as Response, next);

      expect(console.error).toHaveBeenCalledWith(
        '[ERROR] CustomError: Type error occurred',
      );
      expect(res.locals!.errorMessage).toBe('Type error occurred');
      expect(sendFailure).toHaveBeenCalledWith(res, 'Type error occurred', 500);
    });
  });
});
