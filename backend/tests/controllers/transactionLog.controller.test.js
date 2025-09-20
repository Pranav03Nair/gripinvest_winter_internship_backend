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
const transactionLogController = __importStar(require("../../src/controllers/transactionLog.controller"));
const logService = __importStar(require("../../src/services/transactionLog.service"));
const sendResponse_util_1 = require("../../src/utils/sendResponse.util");
// Mock dependencies
jest.mock('../../src/services/transactionLog.service');
jest.mock('../../src/utils/sendResponse.util');
describe('Transaction Log Controller', () => {
    let req;
    let res;
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
    describe('getLogs', () => {
        it('should get logs by userId when provided', async () => {
            const mockLogs = [{ id: '1', action: 'login', userId: 'user-1' }];
            req.body = { userId: 'user-1' };
            logService.getLogsByUserId.mockResolvedValue(mockLogs);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await transactionLogController.getLogs(req, res);
            expect(logService.getLogsByUserId).toHaveBeenCalledWith('user-1');
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, mockLogs);
        });
        it('should get logs by email when userId not provided', async () => {
            const mockLogs = [
                { id: '1', action: 'login', email: 'test@example.com' },
            ];
            req.body = { email: 'test@example.com' };
            logService.getLogsByEmail.mockResolvedValue(mockLogs);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await transactionLogController.getLogs(req, res);
            expect(logService.getLogsByEmail).toHaveBeenCalledWith('test@example.com');
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, mockLogs);
        });
        it('should return error when neither userId nor email provided', async () => {
            req.body = {};
            sendResponse_util_1.sendFailure.mockReturnValue(res);
            await transactionLogController.getLogs(req, res);
            expect(sendResponse_util_1.sendFailure).toHaveBeenCalledWith(res, 'Either userId or email is required', 400);
            expect(logService.getLogsByUserId).not.toHaveBeenCalled();
            expect(logService.getLogsByEmail).not.toHaveBeenCalled();
        });
    });
    describe('getErrorSummary', () => {
        it('should get error summary successfully', async () => {
            const mockSummary = { totalErrors: 5, criticalErrors: 2 };
            req.body = { userId: 'user-1', email: 'test@example.com' };
            logService.getErrorSummary.mockResolvedValue(mockSummary);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await transactionLogController.getErrorSummary(req, res);
            expect(logService.getErrorSummary).toHaveBeenCalledWith('user-1', 'test@example.com');
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, { summary: mockSummary }, 200, 'Error summary fetched');
        });
        it('should handle service error', async () => {
            const errorMessage = 'Service error occurred';
            req.body = { userId: 'user-1' };
            logService.getErrorSummary.mockRejectedValue(new Error(errorMessage));
            sendResponse_util_1.sendFailure.mockReturnValue(res);
            await transactionLogController.getErrorSummary(req, res);
            expect(sendResponse_util_1.sendFailure).toHaveBeenCalledWith(res, errorMessage, 400);
        });
    });
});
