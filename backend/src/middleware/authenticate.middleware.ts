import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../utils/prisma.util';
import { users } from '../../generated/prisma';
import { sendFailure } from '../utils/sendResponse.util';

interface JwtPayloadWithId extends jwt.JwtPayload {
  userId: string;
}

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: 'admin' | 'user';
    first_name: string;
    last_name: string | null;
    email: string | null;
  };
}

const JWT_SECRET = process.env.JWT_SECRET || 'fallback';

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendFailure(res, 'Missing or invalid token', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    if (!JWT_SECRET) {
      return sendFailure(res, 'JWT secret is not configured', 500);
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!,
    ) as JwtPayloadWithId;

    if (!decoded.userId) {
      return sendFailure(res, 'Invalid token payload', 401);
    }

    const user = await prisma.users.findUnique({
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
      return sendFailure(res, 'User not found', 401);
    }

    req.user = user;

    next();
  } catch (err) {
    return sendFailure(res, 'Invalid or expired token', 401);
  }
};
