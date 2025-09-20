import { jest } from '@jest/globals';
import { prisma } from '../../src/utils/prisma.util';
import * as userService from '../../src/services/user.service';

// Mock Prisma
const mockPrisma = {
  users: {
    findUnique: jest.fn(),
    update: jest.fn(),
  },
  investments: {
    findMany: jest.fn(),
  },
} as any;

jest.mock('../../src/utils/prisma.util', () => ({
  prisma: mockPrisma,
}));

describe('User Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ...existing tests...

  describe('getPortfolioSummary', () => {
    const userId = 'user-1';

    it('should return portfolio summary excluding cancelled investments', async () => {
      const mockInvestments = [
        {
          amount: 1000,
          expected_return: 1080,
          status: 'active',
          investment_products: { risk_level: 'low' },
        },
        {
          amount: 2000,
          expected_return: 2200,
          status: 'matured',
          investment_products: { risk_level: 'high' },
        },
        // This cancelled investment should not affect the summary
      ];

      mockPrisma.investments.findMany.mockResolvedValue(mockInvestments);

      const result = await userService.getPortfolioSummary(userId);

      expect(mockPrisma.investments.findMany).toHaveBeenCalledWith({
        where: {
          user_id: userId,
          status: {
            in: ['active', 'matured'],
          },
        },
        include: {
          investment_products: true,
        },
      });

      expect(result.totalInvested).toBe(3000);
      expect(result.totalReturns).toBe(280); // (1080 + 2200) - (1000 + 2000)
      expect(result.returnsPercentage).toBeCloseTo(9.33, 2);
      expect(result.activeInvestments).toBe(1); // Only one active investment
    });

    it('should return zero summary for user with no investments', async () => {
      mockPrisma.investments.findMany.mockResolvedValue([]);

      const result = await userService.getPortfolioSummary(userId);

      expect(result).toEqual({
        totalInvested: 0,
        currentValue: 0,
        totalReturns: 0,
        returnsPercentage: 0,
        activeInvestments: 0,
      });
    });

    it('should handle investments with no expected returns', async () => {
      const mockInvestments = [
        {
          amount: 1000,
          expected_return: null,
          status: 'active',
          investment_products: { risk_level: 'low' },
        },
      ];

      mockPrisma.investments.findMany.mockResolvedValue(mockInvestments);

      const result = await userService.getPortfolioSummary(userId);

      expect(result.totalInvested).toBe(1000);
      expect(result.totalReturns).toBe(-1000); // 0 - 1000
      expect(result.returnsPercentage).toBe(-100);
      expect(result.activeInvestments).toBe(1);
    });
  });
});
