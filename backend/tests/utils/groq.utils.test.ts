import { jest } from '@jest/globals';

// Mock the GROQ SDK more simply
const mockCreate = jest.fn();
jest.mock('groq-sdk', () => {
  return jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: mockCreate,
      },
    },
  }));
});

import * as groqUtils from '../../src/utils/groq.utils';

describe('GROQ Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.GROQ_API_KEY = 'test-api-key';
  });

  describe('generateProductDescription', () => {
    const mockProductData = {
      name: 'Test Bond',
      investment_type: 'bond' as const,
      tenure_months: 12,
      annual_yield: 8.5,
      risk_level: 'low' as const,
      min_investment: 1000,
      max_investment: 50000,
      description: 'Test description',
    };

    it('should generate product description successfully', async () => {
      const mockResponse = {
        choices: [
          {
            message: {
              content: 'A secure bond investment with 8.5% annual yield.',
            },
          },
        ],
      };

      mockCreate.mockResolvedValue(mockResponse as never);

      const result =
        await groqUtils.generateProductDescription(mockProductData);

      expect(result).toBe('A secure bond investment with 8.5% annual yield.');
      expect(mockCreate).toHaveBeenCalled();
    });

    it('should return fallback description on API error', async () => {
      mockCreate.mockRejectedValue(new Error('API Error') as never);

      const result =
        await groqUtils.generateProductDescription(mockProductData);

      expect(result).toBe(
        'An investment opportunity tailored to your financial goals.',
      );
    });

    it('should handle empty response from API', async () => {
      const mockResponse = {
        choices: [{ message: { content: null } }],
      };

      mockCreate.mockResolvedValue(mockResponse as never);

      const result =
        await groqUtils.generateProductDescription(mockProductData);

      expect(result).toBe(
        'An investment opportunity tailored to your financial goals.',
      );
    });
  });

  describe('generateProductRecommendations', () => {
    const mockProducts = [
      {
        name: 'Low Risk Bond',
        investment_type: 'bond' as const,
        tenure_months: 12,
        annual_yield: 6,
        risk_level: 'low' as const,
        min_investment: 1000,
        max_investment: 10000,
        description: 'Safe bond',
      },
    ];

    it('should return empty array for empty products', async () => {
      const result = await groqUtils.generateProductRecommendations('low', []);
      expect(result).toEqual([]);
    });

    it('should generate recommendations successfully', async () => {
      const mockRecommendations = [mockProducts[0]];
      const mockResponse = {
        choices: [
          {
            message: {
              content: JSON.stringify(mockRecommendations),
            },
          },
        ],
      };

      mockCreate.mockResolvedValue(mockResponse as never);

      const result = await groqUtils.generateProductRecommendations(
        'low',
        mockProducts,
      );

      expect(result).toEqual(mockRecommendations);
    });

    it('should fallback to filtered products on API error', async () => {
      mockCreate.mockRejectedValue(new Error('API Error') as never);

      const result = await groqUtils.generateProductRecommendations(
        'low',
        mockProducts,
      );

      expect(result).toEqual([mockProducts[0]]);
    });
  });

  describe('generatePortfolioInsights', () => {
    it('should return empty string for no investments', async () => {
      const result = await groqUtils.generatePortfolioInsights([], {}, 0, 0);
      expect(result).toBe('');
    });

    it('should generate portfolio insights successfully', async () => {
      const mockInvestments = [
        {
          amount: 1000,
          expected_return: 1080,
          investment_products: {
            name: 'Bond A',
            risk_level: 'low',
            annual_yield: 8,
          },
        },
      ] as any;

      const mockInsights = 'Your portfolio is well diversified.';
      const mockResponse = {
        choices: [{ message: { content: mockInsights } }],
      };

      mockCreate.mockResolvedValue(mockResponse as never);

      const result = await groqUtils.generatePortfolioInsights(
        mockInvestments,
        { low: 100 },
        1000,
        1080,
      );

      expect(result).toBe(mockInsights);
    });

    it('should return fallback insights on API error', async () => {
      const mockInvestments = [
        {
          amount: 1000,
          expected_return: 1080,
          investment_products: {
            name: 'Bond A',
            risk_level: 'low',
            annual_yield: 8,
          },
        },
      ] as any;

      mockCreate.mockRejectedValue(new Error('API Error') as never);

      const result = await groqUtils.generatePortfolioInsights(
        mockInvestments,
        { low: 100 },
        1000,
        1080,
      );

      expect(result).toBe(
        'You have a diversified portfolio. Consider balancing your investments across different risk levels for optimal returns.',
      );
    });
  });

  describe('generateErrorSummary', () => {
    const mockErrorMap = {
      '/api/investment -> Insufficient balance': 3,
      '/api/auth -> Invalid credentials': 1,
    };

    it('should generate error summary successfully', async () => {
      const mockSummary = 'User has insufficient balance errors.';
      const mockResponse = {
        choices: [{ message: { content: mockSummary } }],
      };

      mockCreate.mockResolvedValue(mockResponse as never);

      const result = await groqUtils.generateErrorSummary(mockErrorMap);

      expect(result).toBe(mockSummary);
    });

    it('should return fallback summary on API error', async () => {
      mockCreate.mockRejectedValue(new Error('API Error') as never);

      const result = await groqUtils.generateErrorSummary(mockErrorMap);

      expect(result).toBe('Unable to generate AI summary at this time.');
    });
  });
});
