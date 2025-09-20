import bcrypt from 'bcrypt';
import { prisma } from '../utils/prisma.util';
import { loginType, signupType } from '../validators/auth.validator';
import { signToken } from '../utils/jwt.util';

export const createUser = async (input: signupType) => {
  const { email, password, ...rest } = input;

  // Check user
  const existingUser = await prisma.users.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('User wih this email already exists');
  }

  // Hash
  const passwordHash = await bcrypt.hash(password, 10);

  // Create User
  const newUser = await prisma.users.create({
    data: {
      ...rest,
      email,
      password_hash: passwordHash,
    },
  });

  const token = signToken({
    userId: newUser.id,
    role: newUser.role,
  });

  // Return
  const { password_hash, ...userData } = newUser;
  return { token: token, user: userData };
};

export const loginUser = async (input: loginType) => {
  const { email, password } = input;

  // Check User
  const user = await prisma.users.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid Credentials: User with this email, doesn't exist");
  }

  // Check Password
  const isPasswordValid = await bcrypt.compare(password, user.password_hash);
  if (!isPasswordValid) {
    throw new Error('Incorrect Password');
  }

  // Token
  const token = signToken({
    userId: user.id,
    role: user.role,
  });

  // Return
  const { password_hash, ...userData } = user;

  return { token: token, user: userData };
};

export const getAllUsers = async (excludeUserId?: string) => {
  const users = await prisma.users.findMany({
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
