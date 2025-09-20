"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.loginUser = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_util_1 = require("../utils/prisma.util");
const jwt_util_1 = require("../utils/jwt.util");
const createUser = async (input) => {
    const { email, password, ...rest } = input;
    // Check user
    const existingUser = await prisma_util_1.prisma.users.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new Error('User wih this email already exists');
    }
    // Hash
    const passwordHash = await bcrypt_1.default.hash(password, 10);
    // Create User
    const newUser = await prisma_util_1.prisma.users.create({
        data: {
            ...rest,
            email,
            password_hash: passwordHash,
        },
    });
    const token = (0, jwt_util_1.signToken)({
        userId: newUser.id,
        role: newUser.role,
    });
    // Return
    const { password_hash, ...userData } = newUser;
    return { token: token, user: userData };
};
exports.createUser = createUser;
const loginUser = async (input) => {
    const { email, password } = input;
    // Check User
    const user = await prisma_util_1.prisma.users.findUnique({
        where: { email },
    });
    if (!user) {
        throw new Error("Invalid Credentials: User with this email, doesn't exist");
    }
    // Check Password
    const isPasswordValid = await bcrypt_1.default.compare(password, user.password_hash);
    if (!isPasswordValid) {
        throw new Error('Incorrect Password');
    }
    // Token
    const token = (0, jwt_util_1.signToken)({
        userId: user.id,
        role: user.role,
    });
    // Return
    const { password_hash, ...userData } = user;
    return { token: token, user: userData };
};
exports.loginUser = loginUser;
const getAllUsers = async (excludeUserId) => {
    const users = await prisma_util_1.prisma.users.findMany({
        where: excludeUserId
            ? {
                id: {
                    not: excludeUserId,
                },
            }
            : undefined,
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            role: true,
            risk_appetite: true,
            balance: true,
            created_at: true,
            updated_at: true,
            // Exclude password_hash for security
        },
        orderBy: {
            created_at: 'desc',
        },
    });
    return users;
};
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=auth.service.js.map