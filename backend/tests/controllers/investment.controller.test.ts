import { Response } from 'express';
import * as investmentController from '../../src/controllers/investment.controller';
import * as investmentService from '../../src/services/investment.service';
import { sendSuccess } from '../../src/utils/sendResponse.util';
import { AuthRequest } from '../../src/middleware/authenticate.middleware';

// Mock dependencies
jest.mock('../../src/services/investment.service');
jest.mock('../../src/utils/sendResponse.util');

describe('Investment Controller', () => {
  let req: Partial<AuthRequest>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {
      body: {},
      params: {},
      user: {
        id: 'user-id',
        role: 'user',
        first_name: 'Test',
        last_name: 'User',
        email: 'test@example.com',
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();
  });

  describe('createInvestment', () => {
    it('should create investment and return success response', async () => {
      const mockInvestment = { id: '1', userId: 'user-id', amount: 1000 };
      req.body = { productId: 'product-1', amount: 1000 };

      (investmentService.createInvestment as jest.Mock).mockResolvedValue(
        mockInvestment,
      );
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await investmentController.createInvestment(
        req as AuthRequest,
        res as Response,
      );

      expect(investmentService.createInvestment).toHaveBeenCalledWith(
        'user-id',
        req.body,
      );
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        mockInvestment,
        201,
        'Investment created successfully',
      );
    });
  });

  describe('getMyInvestments', () => {
    it('should get user investments and return success response', async () => {
      const mockInvestments = [
        { id: '1', userId: 'user-id', amount: 1000 },
        { id: '2', userId: 'user-id', amount: 2000 },
      ];

      (investmentService.getAllUserInvestments as jest.Mock).mockResolvedValue(
        mockInvestments,
      );
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await investmentController.getMyInvestments(
        req as AuthRequest,
        res as Response,
      );

      expect(investmentService.getAllUserInvestments).toHaveBeenCalledWith(
        'user-id',
      );
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        mockInvestments,
        200,
        'User portfolio fetched',
      );
    });
  });

  describe('cancelInvestment', () => {
    it('should cancel investment and return success response', async () => {
      req.params = { id: 'investment-1' };

      (investmentService.cancelInvestment as jest.Mock).mockResolvedValue(
        undefined,
      );
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await investmentController.cancelInvestment(
        req as AuthRequest,
        res as Response,
      );

      expect(investmentService.cancelInvestment).toHaveBeenCalledWith(
        'user-id',
        'investment-1',
      );
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        null,
        200,
        'Investment cancelled',
      );
    });
  });

  describe('getPortfolioInsights', () => {
    it('should get portfolio insights and return success response', async () => {
      const mockInsights = {
        totalInvested: 5000,
        expectedReturns: 5400,
        riskDistribution: { low: 60, moderate: 30, high: 10 },
        insights: 'Your portfolio is well diversified with a conservative approach.',
      };

      (investmentService.getPortfolioInsights as jest.Mock).mockResolvedValue(
        mockInsights,
      );
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await investmentController.getPortfolioInsights(
        req as AuthRequest,
        res as Response,
      );

      expect(investmentService.getPortfolioInsights).toHaveBeenCalledWith(
        'user-id',
      );
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        mockInsights,
        200,
        'Portfolio insights fetched successfully',
      );
    });
  });

  describe('forcematureInvestment', () => {
    it('should force mature investment and return success response', async () => {
      req.params = { id: 'investment-1' };
      const mockMaturedInvestment = {
        id: 'investment-1',
        status: 'matured',
        expected_return: 1080,
      };

      (investmentService.forcematureInvestment as jest.Mock).mockResolvedValue(
        mockMaturedInvestment,
      );
      (sendSuccess as jest.Mock).mockReturnValue(res);

      await investmentController.forcematureInvestment(
        req as AuthRequest,
        res as Response,
      );

      expect(investmentService.forcematureInvestment).toHaveBeenCalledWith(
        'user-id',
        'investment-1',
      );
      expect(sendSuccess).toHaveBeenCalledWith(
        res,
        { maturedCount: mockMaturedInvestment },
        200,
        'Investment Forcefully Matured',
      );
    });
  });
});
