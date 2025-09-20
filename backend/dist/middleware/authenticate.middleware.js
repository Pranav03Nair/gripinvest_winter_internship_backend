"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_util_1 = require("../utils/prisma.util");
const sendResponse_util_1 = require("../utils/sendResponse.util");
const JWT_SECRET = process.env.JWT_SECRET || 'fallback';
const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return (0, sendResponse_util_1.sendFailure)(res, 'Missing or invalid token', 401);
    }
    const token = authHeader.split(' ')[1];
    try {
        if (!JWT_SECRET) {
            return (0, sendResponse_util_1.sendFailure)(res, 'JWT secret is not configured', 500);
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (!decoded.userId) {
            return (0, sendResponse_util_1.sendFailure)(res, 'Invalid token payload', 401);
        }
        const user = await prisma_util_1.prisma.users.findUnique({
            where: { id: decoded.userId },
            select: {
                id: true,
                role: true,
                first_name: true,
                last_name: true,
                email: true,
            },
        });
        if (!user) {
            return (0, sendResponse_util_1.sendFailure)(res, 'User not found', 401);
        }
        req.user = user;
        next();
    }
    catch (err) {
        return (0, sendResponse_util_1.sendFailure)(res, 'Invalid or expired token', 401);
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=authenticate.middleware.js.map