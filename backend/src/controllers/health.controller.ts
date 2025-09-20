import { Request, Response } from 'express';
import { prisma } from '../utils/prisma.util';

export const healthCheck = async (req: Request, res: Response) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return res.status(200).json({
      service: 'UP',
      database: 'CONNECTED',
    });
  } catch (error) {
    return res.status(500).json({
      service: 'UP',
      database: 'ERROR',
      error: (error as Error).message,
    });
  }
};
