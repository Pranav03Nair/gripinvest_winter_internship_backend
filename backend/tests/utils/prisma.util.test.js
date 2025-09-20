"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_util_1 = require("../../src/utils/prisma.util");
// Mock the entire prisma module
jest.mock('../../src/utils/prisma.util', () => ({
    prisma: {
        users: {
            findUnique: jest.fn(),
            create: jest.fn(),
        },
        investment_products: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    },
}));
describe('Prisma Utility', () => {
    it('should export a prisma client instance', () => {
        expect(prisma_util_1.prisma).toBeDefined();
        expect(prisma_util_1.prisma.users).toBeDefined();
        expect(prisma_util_1.prisma.investment_products).toBeDefined();
    });
    it('should have database methods available', () => {
        expect(prisma_util_1.prisma.users).toBeDefined();
        expect(typeof prisma_util_1.prisma.users.findUnique).toBe('function');
        expect(typeof prisma_util_1.prisma.users.create).toBe('function');
    });
});
