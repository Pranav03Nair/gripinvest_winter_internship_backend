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
const prisma_util_1 = require("../../src/utils/prisma.util");
const transactionLogService = __importStar(require("../../src/services/transactionLog.service"));
const groqUtils = __importStar(require("../../src/utils/groq.utils"));
// Mock Prisma
globals_1.jest.mock('../../src/utils/prisma.util', () => ({
    prisma: {
        transaction_logs: {
            findMany: globals_1.jest.fn(),
        },
    },
}));
// Mock GROQ Utils
globals_1.jest.mock('../../src/utils/groq.utils', () => ({
    generateErrorSummary: globals_1.jest.fn(),
}));
const mockPrisma = prisma_util_1.prisma;
const mockGroqUtils = groqUtils;
describe('Transaction Log Service', () => {
    beforeEach(() => {
        globals_1.jest.clearAllMocks();
    });
    describe('getLogsByUserId', () => {
        it('should return logs for a user', async () => {
            const userId = 'user-1';
            const mockLogs = [
                {
                    id: '1',
                    user_id: userId,
                    endpoint: '/api/test',
                    created_at: new Date(),
                },
                {
                    id: '2',
                    user_id: userId,
                    endpoint: '/api/test2',
                    created_at: new Date(),
                },
            ];
            mockPrisma.transaction_logs.findMany.mockResolvedValue(mockLogs);
            const result = await transactionLogService.getLogsByUserId(userId);
            expect(result).toEqual(mockLogs);
            expect(mockPrisma.transaction_logs.findMany).toHaveBeenCalledWith({
                where: { user_id: userId },
                orderBy: { created_at: 'desc' },
            });
        });
        it('should return empty array if no logs found', async () => {
            const userId = 'user-1';
            mockPrisma.transaction_logs.findMany.mockResolvedValue([]);
            const result = await transactionLogService.getLogsByUserId(userId);
            expect(result).toEqual([]);
        });
    });
    describe('getLogsByEmail', () => {
        it('should return logs for an email', async () => {
            const email = 'test@example.com';
            const mockLogs = [
                {
                    id: '1',
                    email: email,
                    endpoint: '/api/test',
                    created_at: new Date(),
                },
            ];
            mockPrisma.transaction_logs.findMany.mockResolvedValue(mockLogs);
            const result = await transactionLogService.getLogsByEmail(email);
            expect(result).toEqual(mockLogs);
            expect(mockPrisma.transaction_logs.findMany).toHaveBeenCalledWith({
                where: { email },
                orderBy: { created_at: 'desc' },
            });
        });
        it('should return empty array if no logs found', async () => {
            const email = 'test@example.com';
            mockPrisma.transaction_logs.findMany.mockResolvedValue([]);
            const result = await transactionLogService.getLogsByEmail(email);
            expect(result).toEqual([]);
        });
    });
    describe('getErrorSummary', () => {
        it('should throw error if neither userId nor email provided', async () => {
            await expect(transactionLogService.getErrorSummary()).rejects.toThrow('Either userId or email is required');
        });
        it('should return "No errors found" message when no error logs exist', async () => {
            const userId = 'user-1';
            mockPrisma.transaction_logs.findMany.mockResolvedValue([]);
            const result = await transactionLogService.getErrorSummary(userId);
            expect(result).toBe('No errors found for this user.');
            expect(mockPrisma.transaction_logs.findMany).toHaveBeenCalledWith({
                where: { user_id: userId, status_code: { gte: 400 } },
            });
        });
        it('should generate error summary for userId with error logs', async () => {
            const userId = 'user-1';
            const mockErrorLogs = [
                {
                    endpoint: '/api/investment',
                    error_message: 'Insufficient balance',
                    status_code: 400,
                },
                {
                    endpoint: '/api/investment',
                    error_message: 'Insufficient balance',
                    status_code: 400,
                },
                {
                    endpoint: '/api/auth',
                    error_message: 'Invalid credentials',
                    status_code: 401,
                },
            ];
            const mockSummary = 'User has multiple insufficient balance errors on investment endpoint.';
            mockPrisma.transaction_logs.findMany.mockResolvedValue(mockErrorLogs);
            mockGroqUtils.generateErrorSummary.mockResolvedValue(mockSummary);
            const result = await transactionLogService.getErrorSummary(userId);
            expect(result).toBe(mockSummary);
            expect(mockGroqUtils.generateErrorSummary).toHaveBeenCalledWith({
                '/api/investment -> Insufficient balance': 2,
                '/api/auth -> Invalid credentials': 1,
            });
        });
        it('should generate error summary for email with error logs', async () => {
            const email = 'test@example.com';
            const mockErrorLogs = [
                {
                    endpoint: '/api/product',
                    error_message: 'Product not found',
                    status_code: 404,
                },
            ];
            const mockSummary = 'User encountered product not found error.';
            mockPrisma.transaction_logs.findMany.mockResolvedValue(mockErrorLogs);
            mockGroqUtils.generateErrorSummary.mockResolvedValue(mockSummary);
            const result = await transactionLogService.getErrorSummary(undefined, email);
            expect(result).toBe(mockSummary);
            expect(mockPrisma.transaction_logs.findMany).toHaveBeenCalledWith({
                where: { email, status_code: { gte: 400 } },
            });
        });
        it('should handle logs with null error messages', async () => {
            const userId = 'user-1';
            const mockErrorLogs = [
                {
                    endpoint: '/api/test',
                    error_message: null,
                    status_code: 500,
                },
            ];
            const mockSummary = 'Unknown error occurred.';
            mockPrisma.transaction_logs.findMany.mockResolvedValue(mockErrorLogs);
            mockGroqUtils.generateErrorSummary.mockResolvedValue(mockSummary);
            const result = await transactionLogService.getErrorSummary(userId);
            expect(result).toBe(mockSummary);
            expect(mockGroqUtils.generateErrorSummary).toHaveBeenCalledWith({
                '/api/test -> Unknown error': 1,
            });
        });
    });
});
