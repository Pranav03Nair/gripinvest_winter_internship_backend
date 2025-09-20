import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import {
  authenticate,
  AuthRequest,
} from '../../src/middleware/authenticate.middleware';
import { prisma } from '../../src/utils/prisma.util';
import { sendFailure } from '../../src/utils/sendResponse.util';

// Mock dependencies
jest.mock('jsonwebtoken');
jest.mock('../../src/utils/prisma.util', () => ({
  prisma: {
    users: {
      findUnique: jest.fn(),
    },
  },
}));
jest.mock('../../src/utils/sendResponse.util');

describe('Authentication Middleware', () => {
  let req: Partial<AuthRequest>;
  let res: Partial<Response>;
  let next: NextFunction;
  const mockPrisma = prisma as any;

  beforeEach(() => {
    req = {
      headers: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
    jest.clearAllMocks();
  });

  describe('authenticate', () => {
    it('should authenticate user with valid token', async () => {
      const mockUser = {
        id: 'user-id',
        role: 'user' as const,
        first_name: 'Test',
        last_name: 'User',
        email: 'test@example.com',
      };

      req.headers = { authorization: 'Bearer valid-token' };
      (jwt.verify as jest.Mock).mockReturnValue({ userId: 'user-id' });
      mockPrisma.users.findUnique.mockResolvedValue(mockUser);

      await authenticate(req as AuthRequest, res as Response, next);

      expect(jwt.verify).toHaveBeenCalledWith(
        'valid-token',
        process.env.JWT_SECRET,
      );
      expect(mockPrisma.users.findUnique).toHaveBeenCalledWith({
        where: { id: 'user-id' },
        select: {
          id: true,
          role: true,
          first_name: true,
          last_name: true,
          email: true,
        },
      });
      expect(req.user).toEqual(mockUser);
      expect(next).toHaveBeenCalled();
    });

    it('should return 401 when no authorization header', async () => {
      req.headers = {};
      (sendFailure as jest.Mock).mockReturnValue(res);

      await authenticate(req as AuthRequest, res as Response, next);

      expect(sendFailure).toHaveBeenCalledWith(
        res,
        'Missing or invalid token',
        401,
      );
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 401 when authorization header does not start with Bearer', async () => {
      req.headers = { authorization: 'Invalid token' };
      (sendFailure as jest.Mock).mockReturnValue(res);

      await authenticate(req as AuthRequest, res as Response, next);

      expect(sendFailure).toHaveBeenCalledWith(
        res,
        'Missing or invalid token',
        401,
      );
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 401 when token is invalid', async () => {
      req.headers = { authorization: 'Bearer invalid-token' };
      (jwt.verify as jest.Mock).mockImplementation(() => {
        throw new Error('Invalid token');
      });
      (sendFailure as jest.Mock).mockReturnValue(res);

      await authenticate(req as AuthRequest, res as Response, next);

      expect(sendFailure).toHaveBeenCalledWith(
        res,
        'Invalid or expired token',
        401,
      );
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 401 when token payload is invalid', async () => {
      req.headers = { authorization: 'Bearer invalid-payload-token' };
      (jwt.verify as jest.Mock).mockReturnValue({}); // No userId
      (sendFailure as jest.Mock).mockReturnValue(res);

      await authenticate(req as AuthRequest, res as Response, next);

      expect(sendFailure).toHaveBeenCalledWith(
        res,
        'Invalid token payload',
        401,
      );
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 401 when user not found', async () => {
      req.headers = { authorization: 'Bearer valid-token' };
      (jwt.verify as jest.Mock).mockReturnValue({
        userId: 'non-existent-user',
      });
      mockPrisma.users.findUnique.mockResolvedValue(null);
      (sendFailure as jest.Mock).mockReturnValue(res);

      await authenticate(req as AuthRequest, res as Response, next);

      expect(sendFailure).toHaveBeenCalledWith(res, 'User not found', 401);
      expect(next).not.toHaveBeenCalled();
    });
  });
});
