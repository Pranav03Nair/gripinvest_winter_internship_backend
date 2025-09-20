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
const userService = __importStar(require("../../src/services/user.service"));
// Mock Prisma
const mockPrisma = {
    users: {
        findUnique: globals_1.jest.fn(),
        update: globals_1.jest.fn(),
    },
    investments: {
        findMany: globals_1.jest.fn(),
    },
};
globals_1.jest.mock('../../src/utils/prisma.util', () => ({
    prisma: mockPrisma,
}));
describe('User Service', () => {
    beforeEach(() => {
        globals_1.jest.clearAllMocks();
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
