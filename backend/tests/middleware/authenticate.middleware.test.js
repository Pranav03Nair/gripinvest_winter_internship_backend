"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate_middleware_1 = require("../../src/middleware/authenticate.middleware");
const prisma_util_1 = require("../../src/utils/prisma.util");
const sendResponse_util_1 = require("../../src/utils/sendResponse.util");
// Mock dependencies
jest.mock('jsonwebtoken');
jest.mock('../../src/utils/prisma.util', () => ({
    prisma: {
        users: {
            findUnique: jest.fn(),
        },
    },
}));
jest.mock('../../src/utils/sendResponse.util');
describe('Authentication Middleware', () => {
    let req;
    let res;
    let next;
    const mockPrisma = prisma_util_1.prisma;
    beforeEach(() => {
        req = {
            headers: {},
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        next = jest.fn();
        jest.clearAllMocks();
    });
    describe('authenticate', () => {
        it('should authenticate user with valid token', async () => {
            const mockUser = {
                id: 'user-id',
                role: 'user',
                first_name: 'Test',
                last_name: 'User',
                email: 'test@example.com',
            };
            req.headers = { authorization: 'Bearer valid-token' };
            jsonwebtoken_1.default.verify.mockReturnValue({ userId: 'user-id' });
            mockPrisma.users.findUnique.mockResolvedValue(mockUser);
            await (0, authenticate_middleware_1.authenticate)(req, res, next);
            expect(jsonwebtoken_1.default.verify).toHaveBeenCalledWith('valid-token', process.env.JWT_SECRET);
            expect(mockPrisma.users.findUnique).toHaveBeenCalledWith({
                where: { id: 'user-id' },
                select: {
                    id: true,
                    role: true,
                    first_name: true,
                    last_name: true,
                    email: true,
                },
            });
            expect(req.user).toEqual(mockUser);
            expect(next).toHaveBeenCalled();
        });
        it('should return 401 when no authorization header', async () => {
            req.headers = {};
            sendResponse_util_1.sendFailure.mockReturnValue(res);
            await (0, authenticate_middleware_1.authenticate)(req, res, next);
            expect(sendResponse_util_1.sendFailure).toHaveBeenCalledWith(res, 'Missing or invalid token', 401);
            expect(next).not.toHaveBeenCalled();
        });
        it('should return 401 when authorization header does not start with Bearer', async () => {
            req.headers = { authorization: 'Invalid token' };
            sendResponse_util_1.sendFailure.mockReturnValue(res);
            await (0, authenticate_middleware_1.authenticate)(req, res, next);
            expect(sendResponse_util_1.sendFailure).toHaveBeenCalledWith(res, 'Missing or invalid token', 401);
            expect(next).not.toHaveBeenCalled();
        });
        it('should return 401 when token is invalid', async () => {
            req.headers = { authorization: 'Bearer invalid-token' };
            jsonwebtoken_1.default.verify.mockImplementation(() => {
                throw new Error('Invalid token');
            });
            sendResponse_util_1.sendFailure.mockReturnValue(res);
            await (0, authenticate_middleware_1.authenticate)(req, res, next);
            expect(sendResponse_util_1.sendFailure).toHaveBeenCalledWith(res, 'Invalid or expired token', 401);
            expect(next).not.toHaveBeenCalled();
        });
        it('should return 401 when token payload is invalid', async () => {
            req.headers = { authorization: 'Bearer invalid-payload-token' };
            jsonwebtoken_1.default.verify.mockReturnValue({}); // No userId
            sendResponse_util_1.sendFailure.mockReturnValue(res);
            await (0, authenticate_middleware_1.authenticate)(req, res, next);
            expect(sendResponse_util_1.sendFailure).toHaveBeenCalledWith(res, 'Invalid token payload', 401);
            expect(next).not.toHaveBeenCalled();
        });
        it('should return 401 when user not found', async () => {
            req.headers = { authorization: 'Bearer valid-token' };
            jsonwebtoken_1.default.verify.mockReturnValue({
                userId: 'non-existent-user',
            });
            mockPrisma.users.findUnique.mockResolvedValue(null);
            sendResponse_util_1.sendFailure.mockReturnValue(res);
            await (0, authenticate_middleware_1.authenticate)(req, res, next);
            expect(sendResponse_util_1.sendFailure).toHaveBeenCalledWith(res, 'User not found', 401);
            expect(next).not.toHaveBeenCalled();
        });
    });
});
