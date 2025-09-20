"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
// Mock the GROQ SDK more simply
const mockCreate = globals_1.jest.fn();
globals_1.jest.mock('groq-sdk', () => {
    return globals_1.jest.fn().mockImplementation(() => ({
        chat: {
            completions: {
                create: mockCreate,
            },
        },
    }));
});
const groqUtils = __importStar(require("../../src/utils/groq.utils"));
describe('GROQ Utils', () => {
    beforeEach(() => {
        globals_1.jest.clearAllMocks();
        process.env.GROQ_API_KEY = 'test-api-key';
    });
    describe('generateProductDescription', () => {
        const mockProductData = {
            name: 'Test Bond',
            investment_type: 'bond',
            tenure_months: 12,
            annual_yield: 8.5,
            risk_level: 'low',
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
            mockCreate.mockResolvedValue(mockResponse);
            const result = await groqUtils.generateProductDescription(mockProductData);
            expect(result).toBe('A secure bond investment with 8.5% annual yield.');
            expect(mockCreate).toHaveBeenCalled();
        });
        it('should return fallback description on API error', async () => {
            mockCreate.mockRejectedValue(new Error('API Error'));
            const result = await groqUtils.generateProductDescription(mockProductData);
            expect(result).toBe('An investment opportunity tailored to your financial goals.');
        });
        it('should handle empty response from API', async () => {
            const mockResponse = {
                choices: [{ message: { content: null } }],
            };
            mockCreate.mockResolvedValue(mockResponse);
            const result = await groqUtils.generateProductDescription(mockProductData);
            expect(result).toBe('An investment opportunity tailored to your financial goals.');
        });
    });
    describe('generateProductRecommendations', () => {
        const mockProducts = [
            {
                name: 'Low Risk Bond',
                investment_type: 'bond',
                tenure_months: 12,
                annual_yield: 6,
                risk_level: 'low',
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
            mockCreate.mockResolvedValue(mockResponse);
            const result = await groqUtils.generateProductRecommendations('low', mockProducts);
            expect(result).toEqual(mockRecommendations);
        });
        it('should fallback to filtered products on API error', async () => {
            mockCreate.mockRejectedValue(new Error('API Error'));
            const result = await groqUtils.generateProductRecommendations('low', mockProducts);
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
            ];
            const mockInsights = 'Your portfolio is well diversified.';
            const mockResponse = {
                choices: [{ message: { content: mockInsights } }],
            };
            mockCreate.mockResolvedValue(mockResponse);
            const result = await groqUtils.generatePortfolioInsights(mockInvestments, { low: 100 }, 1000, 1080);
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
            ];
            mockCreate.mockRejectedValue(new Error('API Error'));
            const result = await groqUtils.generatePortfolioInsights(mockInvestments, { low: 100 }, 1000, 1080);
            expect(result).toBe('You have a diversified portfolio. Consider balancing your investments across different risk levels for optimal returns.');
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
            mockCreate.mockResolvedValue(mockResponse);
            const result = await groqUtils.generateErrorSummary(mockErrorMap);
            expect(result).toBe(mockSummary);
        });
        it('should return fallback summary on API error', async () => {
            mockCreate.mockRejectedValue(new Error('API Error'));
            const result = await groqUtils.generateErrorSummary(mockErrorMap);
            expect(result).toBe('Unable to generate AI summary at this time.');
        });
    });
});
