"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.signupSchema = void 0;
const zod_1 = require("zod");
exports.signupSchema = zod_1.z.object({
    first_name: zod_1.z.string().min(1, 'First Name cannot be empty'),
    last_name: zod_1.z.string().optional(),
    email: zod_1.z.email('Email format is invalid or Email is missing'),
    password: zod_1.z
        .string()
        .min(8, 'Password length should be at least 8 characters'),
    role: zod_1.z.enum(['user', 'admin']).optional(),
    risk_appetite: zod_1.z.enum(['low', 'moderate', 'high']).optional(),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.email('Email format is invalid or Email is missing'),
    password: zod_1.z
        .string()
        .min(8, 'Password length should be at least 8 characters'),
});
//# sourceMappingURL=auth.validator.js.map