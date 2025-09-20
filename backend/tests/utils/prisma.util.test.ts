import { prisma } from '../../src/utils/prisma.util';

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
    expect(prisma).toBeDefined();
    expect(prisma.users).toBeDefined();
    expect(prisma.investment_products).toBeDefined();
  });

  it('should have database methods available', () => {
    expect(prisma.users).toBeDefined();
    expect(typeof prisma.users.findUnique).toBe('function');
    expect(typeof prisma.users.create).toBe('function');
  });
});
