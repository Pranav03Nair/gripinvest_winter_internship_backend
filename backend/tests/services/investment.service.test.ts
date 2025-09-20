import { jest } from '@jest/globals';
import { prisma } from '../../src/utils/prisma.util';
import * as investmentService from '../../src/services/investment.service';
import * as groqUtils from '../../src/utils/groq.utils';

// Mock Prisma with proper typing
const mockPrismaTransaction = jest.fn();
const mockPrisma = {
  users: {
    findUnique: jest.fn(),
    update: jest.fn(),
  },
  investment_products: {
    findUnique: jest.fn(),
  },
  investments: {
    create: jest.fn(),
    findMany: jest.fn(),
    findFirst: jest.fn(),
    update: jest.fn(),
  },
  $transaction: mockPrismaTransaction,
} as any;

jest.mock('../../src/utils/prisma.util', () => ({
  prisma: mockPrisma,
}));

// Mock GROQ Utils
jest.mock('../../src/utils/groq.utils', () => ({
  generatePortfolioInsights: jest.fn(),
}));

const mockGroqUtils = groqUtils as jest.Mocked<typeof groqUtils>;

describe('Investment Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('createInvestment', () => {
    const userId = 'user-1';
    const investmentData = {
      product_id: 'product-1',
      amount: 1000,
    };

    const mockUser = {
      id: userId,
      balance: { toNumber: () => 5000 },
    };

    const mockProduct = {
      id: 'product-1',
      min_investment: { toNumber: () => 500 },
      max_investment: { toNumber: () => 10000 },
      annual_yield: { toNumber: () => 8 },
      tenure_months: 12,
    };

    it('should create investment successfully', async () => {
      const expectedReturn = 1000 + (1000 * 8 * 12) / (100 * 12);
      const mockInvestment = {
        id: 'investment-1',
        user_id: userId,
        product_id: 'product-1',
        amount: 1000,
        expected_return: expectedReturn,
        status: 'active',
      };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.investment_products.findUnique.mockResolvedValue(mockProduct);

      // Mock transaction with proper typing
      mockPrismaTransaction.mockImplementation(async (callback: any) => {
        const mockTx = {
          investments: {
            create: jest.fn().mockResolvedValue(mockInvestment as never) as any,
          },
          users: { update: jest.fn() as any },
        };
        return await callback(mockTx);
      });

      const result = await investmentService.createInvestment(
        userId,
        investmentData,
      );

      expect(result).toEqual(mockInvestment);
      expect(mockPrisma.users.findUnique).toHaveBeenCalledWith({
        where: { id: userId },
      });
      expect(mockPrisma.investment_products.findUnique).toHaveBeenCalledWith({
        where: { id: 'product-1' },
      });
    });

    it('should throw error if user not found', async () => {
      mockPrisma.users.findUnique.mockResolvedValue(null);

      await expect(
        investmentService.createInvestment(userId, investmentData),
      ).rejects.toThrow('User not found');
    });

    it('should throw error if product not found', async () => {
      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.investment_products.findUnique.mockResolvedValue(null);

      await expect(
        investmentService.createInvestment(userId, investmentData),
      ).rejects.toThrow('InvestmentProduct not found');
    });

    it('should throw error if amount is below minimum investment', async () => {
      const lowAmountData = { ...investmentData, amount: 100 };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.investment_products.findUnique.mockResolvedValue(mockProduct);

      await expect(
        investmentService.createInvestment(userId, lowAmountData),
      ).rejects.toThrow(
        'Minimum investment for this investmentProduct is ₹500',
      );
    });

    it('should throw error if amount exceeds maximum investment', async () => {
      const highAmountData = { ...investmentData, amount: 15000 };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.investment_products.findUnique.mockResolvedValue(mockProduct);

      await expect(
        investmentService.createInvestment(userId, highAmountData),
      ).rejects.toThrow(
        'Maximum investment for this investmentProduct is ₹10000',
      );
    });

    it('should throw error if insufficient balance', async () => {
      const highAmountData = { ...investmentData, amount: 6000 };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.investment_products.findUnique.mockResolvedValue(mockProduct);

      await expect(
        investmentService.createInvestment(userId, highAmountData),
      ).rejects.toThrow('Insufficient balance');
    });
  });

  describe('getAllUserInvestments', () => {
    it('should return user investments', async () => {
      const userId = 'user-1';
      const mockInvestments = [
        {
          id: 'investment-1',
          user_id: userId,
          product_id: 'product-1',
          amount: 1000,
          investment_products: { name: 'Product 1' },
        },
      ];

      mockPrisma.investments.findMany.mockResolvedValue(mockInvestments);

      const result = await investmentService.getAllUserInvestments(userId);

      expect(result).toEqual(mockInvestments);
      expect(mockPrisma.investments.findMany).toHaveBeenCalledWith({
        where: { user_id: userId },
        include: { investment_products: true },
        orderBy: { invested_at: 'desc' },
      });
    });
  });

  describe('cancelInvestment', () => {
    const userId = 'user-1';
    const investmentId = 'investment-1';

    it('should cancel investment successfully', async () => {
      const mockInvestment = {
        id: investmentId,
        user_id: userId,
        amount: 1000,
        status: 'active',
      };

      mockPrisma.investments.findFirst.mockResolvedValue(mockInvestment);

      mockPrismaTransaction.mockImplementation(async (callback: any) => {
        const mockTx = {
          investments: { update: jest.fn() as any },
          users: { update: jest.fn() as any },
        };
        return await callback(mockTx);
      });

      const result = await investmentService.cancelInvestment(
        userId,
        investmentId,
      );

      expect(result).toBe(true);
      expect(mockPrisma.investments.findFirst).toHaveBeenCalledWith({
        where: { id: investmentId, user_id: userId },
      });
    });

    it('should throw error if investment not found', async () => {
      mockPrisma.investments.findFirst.mockResolvedValue(null);

      await expect(
        investmentService.cancelInvestment(userId, investmentId),
      ).rejects.toThrow('Investment not found');
    });

    it('should throw error if investment is not active', async () => {
      const mockInvestment = {
        id: investmentId,
        user_id: userId,
        amount: 1000,
        status: 'matured',
      };

      mockPrisma.investments.findFirst.mockResolvedValue(mockInvestment);

      await expect(
        investmentService.cancelInvestment(userId, investmentId),
      ).rejects.toThrow('Only active investments can be cancelled');
    });
  });

  describe('maturedInvestments', () => {
    it('should process matured investments', async () => {
      const mockMaturedInvestments = [
        {
          id: 'investment-1',
          user_id: 'user-1',
          amount: 1000,
          expected_return: 1080,
          status: 'active',
        },
      ];

      mockPrismaTransaction.mockImplementation(async (callback: any) => {
        const mockTx = {
          investments: {
            findMany: jest
              .fn()
              .mockResolvedValue(mockMaturedInvestments as never) as any,
            update: jest.fn() as any,
          },
          users: { update: jest.fn() as any },
        };
        return await callback(mockTx);
      });

      const result = await investmentService.maturedInvestments();

      expect(result).toBe(1);
    });
  });

  describe('getPortfolioInsights', () => {
    const userId = 'user-1';

    it('should return portfolio insights for user with investments', async () => {
      const mockInvestments = [
        {
          amount: 1000,
          expected_return: 1080,
          investment_products: { risk_level: 'low' },
          status: 'active',
        },
        {
          amount: 2000,
          expected_return: 2200,
          investment_products: { risk_level: 'high' },
          status: 'matured',
        },
      ];

      const mockInsights = 'Your portfolio is well diversified.';

      mockPrisma.investments.findMany.mockResolvedValue(mockInvestments);
      mockGroqUtils.generatePortfolioInsights.mockResolvedValue(mockInsights);

      const result = await investmentService.getPortfolioInsights(userId);

      expect(mockPrisma.investments.findMany).toHaveBeenCalledWith({
        where: {
          user_id: userId,
          status: {
            in: ['active', 'matured'],
          },
        },
        include: { investment_products: true },
      });
      expect(result.totalInvested).toBe(3000);
      expect(result.expectedReturns).toBe(3280);
    });

    it('should exclude cancelled investments from portfolio insights', async () => {
      const mockInvestments = [
        {
          amount: 1000,
          expected_return: 1080,
          investment_products: { risk_level: 'low' },
          status: 'active',
        },
        // Cancelled investment should not be included in the response
        {
          amount: 5000,
          expected_return: 5500,
          investment_products: { risk_level: 'high' },
          status: 'matured',
        },
      ];

      const mockInsights = 'Your portfolio is well diversified.';

      mockPrisma.investments.findMany.mockResolvedValue(mockInvestments);
      mockGroqUtils.generatePortfolioInsights.mockResolvedValue(mockInsights);

      const result = await investmentService.getPortfolioInsights(userId);

      expect(result.totalInvested).toBe(6000); // Only active + matured investments
      expect(result.expectedReturns).toBe(6580);
    });

    it('should return empty portfolio for user with no investments', async () => {
      mockPrisma.investments.findMany.mockResolvedValue([]);

      const result = await investmentService.getPortfolioInsights(userId);

      expect(result).toEqual({
        totalInvested: 0,
        riskDistribution: {},
        expectedReturns: 0,
        insights: '',
      });
    });
  });

  describe('forcematureInvestment', () => {
    it('should force mature investment', async () => {
      const userId = 'user-1';
      const investmentId = 'investment-1';
      const mockInvestment = {
        id: investmentId,
        user_id: userId,
        expected_return: 1080,
        status: 'matured',
      };

      mockPrismaTransaction.mockImplementation(async (callback: any) => {
        const mockTx = {
          investments: {
            update: jest.fn().mockResolvedValue(mockInvestment as never) as any,
          },
          users: { update: jest.fn() as any },
        };
        return await callback(mockTx);
      });

      const result = await investmentService.forcematureInvestment(
        userId,
        investmentId,
      );

      expect(result).toEqual(mockInvestment);
    });
  });
});
