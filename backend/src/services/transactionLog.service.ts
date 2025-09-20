import { prisma } from '../utils/prisma.util';
import { generateErrorSummary } from '../utils/groq.utils';

export const getLogsByUserId = async (userId: string) => {
  return prisma.transaction_logs.findMany({
    where: { user_id: userId },
    orderBy: { created_at: 'desc' },
  });
};

export const getLogsByEmail = async (email: string) => {
  return prisma.transaction_logs.findMany({
    where: { email },
    orderBy: { created_at: 'desc' },
  });
};

export const getErrorSummary = async (userId?: string, email?: string) => {
  if (!userId && !email) throw new Error('Either userId or email is required');

  const logs = userId
    ? await prisma.transaction_logs.findMany({
        where: { user_id: userId, status_code: { gte: 400 } },
      })
    : await prisma.transaction_logs.findMany({
        where: { email, status_code: { gte: 400 } },
      });

  if (!logs.length) return 'No errors found for this user.';

  const errorMap: Record<string, number> = {};
  logs.forEach((log) => {
    const key = `${log.endpoint} -> ${log.error_message || 'Unknown error'}`;
    errorMap[key] = (errorMap[key] || 0) + 1;
  });

  const summary = await generateErrorSummary(errorMap);

  return summary;
};
