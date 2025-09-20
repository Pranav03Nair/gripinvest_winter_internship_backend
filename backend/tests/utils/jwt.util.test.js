"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_util_1 = require("../../src/utils/jwt.util");
jest.mock('jsonwebtoken');
describe('signToken', () => {
    it('should call jwt.sign with payload and secret', () => {
        const payload = { userId: '123' };
        jsonwebtoken_1.default.sign.mockReturnValue('signedToken');
        const token = (0, jwt_util_1.signToken)(payload);
        expect(jsonwebtoken_1.default.sign).toHaveBeenCalledWith(payload, process.env.JWT_SECRET || 'fallback', { expiresIn: '1h' });
        expect(token).toBe('signedToken');
    });
});
