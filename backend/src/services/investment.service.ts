import { prisma } from '../utils/prisma.util';
import { investmentType } from '../validators/investment.validator';
import { generatePortfolioInsights } from '../utils/groq.utils';

// C
export const createInvestment = async (
  userId: string,
  data: investmentType,
) => {
  // Check User
  const user = await prisma.users.findUnique({ where: { id: userId } });
  if (!user) throw new Error('User not found');

  // Check Product
  const investmentProduct = await prisma.investment_products.findUnique({
    where: { id: data.product_id },
  });
  if (!investmentProduct) throw new Error('InvestmentProduct not found');

  // Valid Transaction Logic
  // Less the Min Investment
  if (data.amount < investmentProduct.min_investment.toNumber()) {
    throw new Error(
      `Minimum investment for this investmentProduct is ₹${investmentProduct.min_investment}`,
    );
  }

  // More than Max Investment
  if (
    investmentProduct.max_investment &&
    data.amount > investmentProduct.max_investment.toNumber()
  ) {
    throw new Error(
      `Maximum investment for this investmentProduct is ₹${investmentProduct.max_investment}`,
    );
  }

  // Insufficient Balance
  if (data.amount > user.balance.toNumber()) {
    throw new Error('Insufficient balance');
  }

  // Calculations
  const expectedReturn =
    data.amount +
    (data.amount *
      investmentProduct.annual_yield.toNumber() *
      investmentProduct.tenure_months) /
      (100 * 12);

  const maturityDate = new Date();
  maturityDate.setMonth(
    maturityDate.getMonth() + investmentProduct.tenure_months,
  );

  // IMP - Atomic Transaction
  const investment = await prisma.$transaction(async (transaction) => {
    const newInvestment = await transaction.investments.create({
      data: {
        user_id: userId,
        product_id: data.product_id,
        amount: data.amount,
        expected_return: expectedReturn,
        maturity_date: maturityDate,
        status: 'active',
      },
    });

    await transaction.users.update({
      where: { id: userId },
      data: {
        balance: {
          decrement: data.amount,
        },
      },
    });

    return newInvestment;
  });

  return investment;
};

// R
export const getAllUserInvestments = async (userId: string) => {
  const investments = await prisma.investments.findMany({
    where: { user_id: userId },
    include: {
      investment_products: true,
    },
    orderBy: { invested_at: 'desc' },
  });

  return investments;
};

// D - Cancel
export const cancelInvestment = async (
  userId: string,
  investmentId: string,
) => {
  const investment = await prisma.investments.findFirst({
    where: { id: investmentId, user_id: userId },
  });

  if (!investment) throw new Error('Investment not found');

  if (investment.status !== 'active') {
    throw new Error('Only active investments can be cancelled');
  }

  await prisma.$transaction(async (transaction) => {
    await transaction.investments.update({
      where: { id: investmentId },
      data: { status: 'cancelled' },
    });

    await transaction.users.update({
      where: { id: userId },
      data: {
        balance: {
          increment: investment.amount,
        },
      },
    });
  });

  return true;
};

// Cron - Matured
export const maturedInvestments = async () => {
  const today = new Date();

  const maturedInvestments = await prisma.$transaction(async (transaction) => {
    const dueInvestments = await transaction.investments.findMany({
      where: {
        status: 'active',
        maturity_date: {
          lte: today,
        },
      },
    });

    for (const investment of dueInvestments) {
      await transaction.investments.update({
        where: { id: investment.id },
        data: { status: 'matured' },
      });

      await transaction.users.update({
        where: { id: investment.user_id },
        data: {
          balance: {
            increment: investment.expected_return ?? 0,
          },
        },
      });
    }

    return dueInvestments;
  });

  return maturedInvestments.length;
};

export const getPortfolioInsights = async (userId: string) => {
  const investments = await prisma.investments.findMany({
    where: {
      user_id: userId,
      status: {
        in: ['active', 'matured'],
      },
    },
    include: { investment_products: true },
  });

  if (!investments.length)
    return {
      totalInvested: 0,
      riskDistribution: {},
      expectedReturns: 0,
      insights: '',
    };

  let totalInvested = 0;
  let expectedReturns = 0;
  const riskDistribution: Record<string, number> = {
    low: 0,
    moderate: 0,
    high: 0,
  };

  investments.forEach((inv) => {
    const amount = Number(inv.amount);
    totalInvested += amount;
    expectedReturns += Number(inv.expected_return ?? 0);

    const risk = inv.investment_products.risk_level;
    riskDistribution[risk] = (riskDistribution[risk] || 0) + amount;
  });

  Object.keys(riskDistribution).forEach((key) => {
    riskDistribution[key] = parseFloat(
      ((riskDistribution[key] / totalInvested) * 100).toFixed(2),
    );
  });

  const insights = await generatePortfolioInsights(
    investments,
    riskDistribution,
    totalInvested,
    expectedReturns,
  );

  return { totalInvested, riskDistribution, expectedReturns, insights };
};

//! Illegal
export const forcematureInvestment = async (
  userId: string,
  investmentId: string,
) => {
  const today = new Date();

  const maturedInvestment = await prisma.$transaction(async (transaction) => {
    const investment = await transaction.investments.update({
      where: { id: investmentId },
      data: { status: 'matured', maturity_date: today },
    });

    await transaction.users.update({
      where: { id: userId },
      data: {
        balance: {
          increment: investment.expected_return ?? 0,
        },
      },
    });

    return investment;
  });

  return maturedInvestment;
};
