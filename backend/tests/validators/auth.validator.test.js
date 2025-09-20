"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_validator_1 = require("../../src/validators/auth.validator");
describe('Auth Validators', () => {
    describe('signupSchema', () => {
        const validSignupData = {
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@example.com',
            password: 'password123',
            role: 'user',
            risk_appetite: 'moderate',
        };
        it('should validate valid signup data', () => {
            const result = auth_validator_1.signupSchema.parse(validSignupData);
            expect(result).toEqual(validSignupData);
        });
        it('should validate signup data without optional fields', () => {
            const minimalData = {
                first_name: 'John',
                email: 'john.doe@example.com',
                password: 'password123',
            };
            const result = auth_validator_1.signupSchema.parse(minimalData);
            expect(result).toEqual(minimalData);
        });
        it('should throw error for empty first_name', () => {
            const invalidData = { ...validSignupData, first_name: '' };
            expect(() => auth_validator_1.signupSchema.parse(invalidData)).toThrow('First Name cannot be empty');
        });
        it('should throw error for invalid email format', () => {
            const invalidData = { ...validSignupData, email: 'invalid-email' };
            expect(() => auth_validator_1.signupSchema.parse(invalidData)).toThrow('Email format is invalid or Email is missing');
        });
        it('should throw error for short password', () => {
            const invalidData = { ...validSignupData, password: '123' };
            expect(() => auth_validator_1.signupSchema.parse(invalidData)).toThrow('Password length should be at least 8 characters');
        });
        it('should throw error for invalid role', () => {
            const invalidData = { ...validSignupData, role: 'invalid' };
            expect(() => auth_validator_1.signupSchema.parse(invalidData)).toThrow();
        });
        it('should throw error for invalid risk_appetite', () => {
            const invalidData = {
                ...validSignupData,
                risk_appetite: 'invalid',
            };
            expect(() => auth_validator_1.signupSchema.parse(invalidData)).toThrow();
        });
    });
    describe('loginSchema', () => {
        const validLoginData = {
            email: 'john.doe@example.com',
            password: 'password123',
        };
        it('should validate valid login data', () => {
            const result = auth_validator_1.loginSchema.parse(validLoginData);
            expect(result).toEqual(validLoginData);
        });
        it('should throw error for invalid email format', () => {
            const invalidData = { ...validLoginData, email: 'invalid-email' };
            expect(() => auth_validator_1.loginSchema.parse(invalidData)).toThrow('Email format is invalid or Email is missing');
        });
        it('should throw error for short password', () => {
            const invalidData = { ...validLoginData, password: '123' };
            expect(() => auth_validator_1.loginSchema.parse(invalidData)).toThrow('Password length should be at least 8 characters');
        });
        it('should throw error for missing email', () => {
            const invalidData = { password: 'password123' };
            expect(() => auth_validator_1.loginSchema.parse(invalidData)).toThrow();
        });
        it('should throw error for missing password', () => {
            const invalidData = { email: 'john.doe@example.com' };
            expect(() => auth_validator_1.loginSchema.parse(invalidData)).toThrow();
        });
    });
    describe('Type exports', () => {
        it('should export correct types', () => {
            const signupData = {
                first_name: 'John',
                email: 'john@example.com',
                password: 'password123',
            };
            const loginData = {
                email: 'john@example.com',
                password: 'password123',
            };
            expect(signupData).toBeDefined();
            expect(loginData).toBeDefined();
        });
    });
});
