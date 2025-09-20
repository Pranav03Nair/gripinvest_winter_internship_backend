import { prisma } from '../utils/prisma.util';
import { addBalanceType } from '../validators/user.validator';

export const addBalance = async (userId: string, input: addBalanceType) => {
  const { amount } = input;

  const user = await prisma.users.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const updatedUser = await prisma.users.update({
    where: { id: userId },
    data: {
      balance: {
        increment: amount,
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
  });

  return updatedUser;
};

export const getUserProfile = async (userId: string) => {
  const user = await prisma.users.findUnique({
    where: { id: userId },
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
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

// Exclude Cancelled
export const getPortfolioSummary = async (userId: string) => {
  const investments = await prisma.investments.findMany({
    where: {
      user_id: userId,
      status: {
        in: ['active', 'matured'],
      },
    },
    include: {
      investment_products: true,
    },
  });

  if (!investments.length) {
    return {
      totalInvested: 0,
      currentValue: 0,
      totalReturns: 0,
      returnsPercentage: 0,
      activeInvestments: 0,
    };
  }

  let totalInvested = 0;
  let totalExpectedReturns = 0;
  let activeInvestmentsCount = 0;

  investments.forEach((investment) => {
    const amount = Number(investment.amount);
    totalInvested += amount;
    totalExpectedReturns += Number(investment.expected_return || 0);

    if (investment.status === 'active') {
      activeInvestmentsCount++;
    }
  });

  const returnsPercentage =
    totalInvested > 0
      ? ((totalExpectedReturns - totalInvested) / totalInvested) * 100
      : 0;

  return {
    totalInvested,
    currentValue: totalInvested, // Using totalInvested as currentValue for now
    totalReturns: totalExpectedReturns - totalInvested,
    returnsPercentage,
    activeInvestments: activeInvestmentsCount,
  };
};
