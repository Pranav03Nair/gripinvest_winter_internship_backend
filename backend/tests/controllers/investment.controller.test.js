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
const investmentController = __importStar(require("../../src/controllers/investment.controller"));
const investmentService = __importStar(require("../../src/services/investment.service"));
const sendResponse_util_1 = require("../../src/utils/sendResponse.util");
// Mock dependencies
jest.mock('../../src/services/investment.service');
jest.mock('../../src/utils/sendResponse.util');
describe('Investment Controller', () => {
    let req;
    let res;
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
            investmentService.createInvestment.mockResolvedValue(mockInvestment);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await investmentController.createInvestment(req, res);
            expect(investmentService.createInvestment).toHaveBeenCalledWith('user-id', req.body);
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, mockInvestment, 201, 'Investment created successfully');
        });
    });
    describe('getMyInvestments', () => {
        it('should get user investments and return success response', async () => {
            const mockInvestments = [
                { id: '1', userId: 'user-id', amount: 1000 },
                { id: '2', userId: 'user-id', amount: 2000 },
            ];
            investmentService.getAllUserInvestments.mockResolvedValue(mockInvestments);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await investmentController.getMyInvestments(req, res);
            expect(investmentService.getAllUserInvestments).toHaveBeenCalledWith('user-id');
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, mockInvestments, 200, 'User portfolio fetched');
        });
    });
    describe('cancelInvestment', () => {
        it('should cancel investment and return success response', async () => {
            req.params = { id: 'investment-1' };
            investmentService.cancelInvestment.mockResolvedValue(undefined);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await investmentController.cancelInvestment(req, res);
            expect(investmentService.cancelInvestment).toHaveBeenCalledWith('user-id', 'investment-1');
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, null, 200, 'Investment cancelled');
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
            investmentService.getPortfolioInsights.mockResolvedValue(mockInsights);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await investmentController.getPortfolioInsights(req, res);
            expect(investmentService.getPortfolioInsights).toHaveBeenCalledWith('user-id');
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, mockInsights, 200, 'Portfolio insights fetched successfully');
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
            investmentService.forcematureInvestment.mockResolvedValue(mockMaturedInvestment);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await investmentController.forcematureInvestment(req, res);
            expect(investmentService.forcematureInvestment).toHaveBeenCalledWith('user-id', 'investment-1');
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, { maturedCount: mockMaturedInvestment }, 200, 'Investment Forcefully Matured');
        });
    });
});
