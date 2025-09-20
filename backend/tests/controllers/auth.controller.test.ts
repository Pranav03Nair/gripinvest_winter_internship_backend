import { Request, Response } from 'express';
import * as authController from '../../src/controllers/auth.controller';
import * as authService from '../../src/services/auth.service';
import { sendSuccess } from '../../src/utils/sendResponse.util';

// Mock dependencies
jest.mock('../../src/services/auth.service');
jest.mock('../../src/utils/sendResponse.util');

describe('Auth Controller', () => {
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

  describe('signUp', () => {
    it('should create user and return success response', async () => {
      const mockUserData = {
        token: 'mock-token',
        user: { id: '1', email: 'test@example.com', first_name: 'Test' },
      };

      req.body = {
        email: 'test@example.com',
        password: 'password123',
        first_name: 'Test',
      };

      (authService.createUser as jest.Mock).mockResolvedValue(mockUserData);
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await authController.signUp(req as Request, res as Response);

      expect(authService.createUser).toHaveBeenCalledWith(req.body);
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        mockUserData,
        201,
        'Successfully created User profile',
      );
    });
  });

  describe('login', () => {
    it('should login user and return success response', async () => {
      const mockUserData = {
        token: 'mock-token',
        user: { id: '1', email: 'test@example.com', first_name: 'Test' },
      };

      req.body = {
        email: 'test@example.com',
        password: 'password123',
      };

      (authService.loginUser as jest.Mock).mockResolvedValue(mockUserData);
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await authController.login(req as Request, res as Response);

      expect(authService.loginUser).toHaveBeenCalledWith(req.body);
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        mockUserData,
        200,
        'Successfully Logged In',
      );
    });
  });

  describe('getAllUsers', () => {
    it('should get all users and return success response', async () => {
      const mockUsers = [
        {
          id: '1',
          email: 'user1@example.com',
          first_name: 'User',
          last_name: 'One',
        },
        {
          id: '2',
          email: 'user2@example.com',
          first_name: 'User',
          last_name: 'Two',
        },
      ];

      (authService.getAllUsers as jest.Mock).mockResolvedValue(mockUsers);
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await authController.getAllUsers(req as Request, res as Response);

      expect(authService.getAllUsers).toHaveBeenCalled();
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        mockUsers,
        200,
        'Successfully fetched all users',
      );
    });
  });
});
