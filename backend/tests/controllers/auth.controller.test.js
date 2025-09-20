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
const authController = __importStar(require("../../src/controllers/auth.controller"));
const authService = __importStar(require("../../src/services/auth.service"));
const sendResponse_util_1 = require("../../src/utils/sendResponse.util");
// Mock dependencies
jest.mock('../../src/services/auth.service');
jest.mock('../../src/utils/sendResponse.util');
describe('Auth Controller', () => {
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
            authService.createUser.mockResolvedValue(mockUserData);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await authController.signUp(req, res);
            expect(authService.createUser).toHaveBeenCalledWith(req.body);
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, mockUserData, 201, 'Successfully created User profile');
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
            authService.loginUser.mockResolvedValue(mockUserData);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await authController.login(req, res);
            expect(authService.loginUser).toHaveBeenCalledWith(req.body);
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, mockUserData, 200, 'Successfully Logged In');
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
            authService.getAllUsers.mockResolvedValue(mockUsers);
            sendResponse_util_1.sendSuccess.mockReturnValue(res);
            await authController.getAllUsers(req, res);
            expect(authService.getAllUsers).toHaveBeenCalled();
            expect(sendResponse_util_1.sendSuccess).toHaveBeenCalledWith(res, mockUsers, 200, 'Successfully fetched all users');
        });
    });
});
