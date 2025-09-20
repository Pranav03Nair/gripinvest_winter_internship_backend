import bcrypt from 'bcrypt';
import * as authService from '../../src/services/auth.service';
import { prisma } from '../../src/utils/prisma.util';
import { signToken } from '../../src/utils/jwt.util';

// Mock dependencies
jest.mock('bcrypt');
jest.mock('../../src/utils/prisma.util', () => ({
  prisma: {
    users: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
    },
  },
}));
jest.mock('../../src/utils/jwt.util');

describe('Auth Service', () => {
  const mockPrisma = prisma as any;
  const mockBcrypt = bcrypt as jest.Mocked<typeof bcrypt>;
  const mockSignToken = signToken as jest.MockedFunction<typeof signToken>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('createUser', () => {
    const signupData = {
      email: 'test@example.com',
      password: 'password123',
      first_name: 'Test',
      last_name: 'User',
    };

    it('should create user successfully', async () => {
      const hashedPassword = 'hashed-password';
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        first_name: 'Test',
        last_name: 'User',
        password_hash: hashedPassword,
        role: 'user' as const,
        risk_appetite: 'moderate' as const,
        balance: 0,
        created_at: new Date(),
        updated_at: new Date(),
      };
      const mockToken = 'mock-token';

      mockPrisma.users.findUnique.mockResolvedValue(null);
      mockBcrypt.hash.mockResolvedValue(hashedPassword as never);
      mockPrisma.users.create.mockResolvedValue(mockUser);
      mockSignToken.mockReturnValue(mockToken);

      const result = await authService.createUser(signupData);

      expect(mockPrisma.users.findUnique).toHaveBeenCalledWith({
        where: { email: signupData.email },
      });
      expect(mockBcrypt.hash).toHaveBeenCalledWith(signupData.password, 10);
      expect(mockPrisma.users.create).toHaveBeenCalledWith({
        data: {
          first_name: signupData.first_name,
          last_name: signupData.last_name,
          email: signupData.email,
          password_hash: hashedPassword,
        },
      });
      expect(mockSignToken).toHaveBeenCalledWith({
        userId: mockUser.id,
        role: mockUser.role,
      });
      expect(result).toEqual({
        token: mockToken,
        user: expect.objectContaining({
          id: mockUser.id,
          email: mockUser.email,
          first_name: mockUser.first_name,
        }),
      });
      expect(result.user).not.toHaveProperty('password_hash');
    });

    it('should throw error if user already exists', async () => {
      const existingUser = { id: '1', email: signupData.email };
      mockPrisma.users.findUnique.mockResolvedValue(existingUser);

      await expect(authService.createUser(signupData)).rejects.toThrow(
        'User wih this email already exists',
      );

      expect(mockPrisma.users.findUnique).toHaveBeenCalledWith({
        where: { email: signupData.email },
      });
      expect(mockBcrypt.hash).not.toHaveBeenCalled();
      expect(mockPrisma.users.create).not.toHaveBeenCalled();
    });
  });

  describe('loginUser', () => {
    const loginData = {
      email: 'test@example.com',
      password: 'password123',
    };

    it('should login user successfully', async () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        first_name: 'Test',
        password_hash: 'hashed-password',
        role: 'user' as const,
      };
      const mockToken = 'mock-token';

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockBcrypt.compare.mockResolvedValue(true as never);
      mockSignToken.mockReturnValue(mockToken);

      const result = await authService.loginUser(loginData);

      expect(mockPrisma.users.findUnique).toHaveBeenCalledWith({
        where: { email: loginData.email },
      });
      expect(mockBcrypt.compare).toHaveBeenCalledWith(
        loginData.password,
        mockUser.password_hash,
      );
      expect(mockSignToken).toHaveBeenCalledWith({
        userId: mockUser.id,
        role: mockUser.role,
      });
      expect(result).toEqual({
        token: mockToken,
        user: expect.objectContaining({
          id: mockUser.id,
          email: mockUser.email,
        }),
      });
      expect(result.user).not.toHaveProperty('password_hash');
    });

    it('should throw error if user does not exist', async () => {
      mockPrisma.users.findUnique.mockResolvedValue(null);

      await expect(authService.loginUser(loginData)).rejects.toThrow(
        "Invalid Credentials: User with this email, doesn't exist",
      );

      expect(mockPrisma.users.findUnique).toHaveBeenCalledWith({
        where: { email: loginData.email },
      });
      expect(mockBcrypt.compare).not.toHaveBeenCalled();
    });

    it('should throw error if password is incorrect', async () => {
      const mockUser = {
        id: '1',
        email: 'test@example.com',
        password_hash: 'hashed-password',
      };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockBcrypt.compare.mockResolvedValue(false as never);

      await expect(authService.loginUser(loginData)).rejects.toThrow(
        'Incorrect Password',
      );

      expect(mockBcrypt.compare).toHaveBeenCalledWith(
        loginData.password,
        mockUser.password_hash,
      );
      expect(mockSignToken).not.toHaveBeenCalled();
    });
  });

  describe('getAllUsers', () => {
    it('should return all users successfully', async () => {
      const mockUsers = [
        {
          id: '1',
          email: 'user1@example.com',
          first_name: 'User',
          last_name: 'One',
          role: 'user',
          risk_appetite: 'moderate',
          balance: 1000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: '2',
          email: 'user2@example.com',
          first_name: 'User',
          last_name: 'Two',
          role: 'admin',
          risk_appetite: 'low',
          balance: 2000,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ];

      mockPrisma.users.findMany.mockResolvedValue(mockUsers);

      const result = await authService.getAllUsers();

      expect(mockPrisma.users.findMany).toHaveBeenCalledWith({
        where: undefined,
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
        },
        orderBy: {
          created_at: 'desc',
        },
      });

      expect(result).toEqual(mockUsers);
    });

    it('should return empty array when no users exist', async () => {
      mockPrisma.users.findMany.mockResolvedValue([]);

      const result = await authService.getAllUsers();

      expect(mockPrisma.users.findMany).toHaveBeenCalled();
      expect(result).toEqual([]);
    });

    it('should exclude specific user when excludeUserId is provided', async () => {
      const excludeUserId = 'user-to-exclude';
      const mockUsers = [
        {
          id: '1',
          email: 'user1@example.com',
          first_name: 'User',
          last_name: 'One',
          role: 'user',
        },
      ];

      mockPrisma.users.findMany.mockResolvedValue(mockUsers);

      const result = await authService.getAllUsers(excludeUserId);

      expect(mockPrisma.users.findMany).toHaveBeenCalledWith({
        where: {
          id: {
            not: excludeUserId,
          },
        },
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
        },
        orderBy: {
          created_at: 'desc',
        },
      });

      expect(result).toEqual(mockUsers);
    });
  });
});
