"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forcematureInvestment = exports.getPortfolioInsights = exports.maturedInvestments = exports.cancelInvestment = exports.getAllUserInvestments = exports.createInvestment = void 0;
const prisma_util_1 = require("../utils/prisma.util");
const groq_utils_1 = require("../utils/groq.utils");
// C
const createInvestment = async (userId, data) => {
    // Check User
    const user = await prisma_util_1.prisma.users.findUnique({ where: { id: userId } });
    if (!user)
        throw new Error('User not found');
    // Check Product
    const investmentProduct = await prisma_util_1.prisma.investment_products.findUnique({
        where: { id: data.product_id },
    });
    if (!investmentProduct)
        throw new Error('InvestmentProduct not found');
    // Valid Transaction Logic
    // Less the Min Investment
    if (data.amount < investmentProduct.min_investment.toNumber()) {
        throw new Error(`Minimum investment for this investmentProduct is ₹${investmentProduct.min_investment}`);
    }
    // More than Max Investment
    if (investmentProduct.max_investment &&
        data.amount > investmentProduct.max_investment.toNumber()) {
        throw new Error(`Maximum investment for this investmentProduct is ₹${investmentProduct.max_investment}`);
    }
    // Insufficient Balance
    if (data.amount > user.balance.toNumber()) {
        throw new Error('Insufficient balance');
    }
    // Calculations
    const expectedReturn = data.amount +
        (data.amount *
            investmentProduct.annual_yield.toNumber() *
            investmentProduct.tenure_months) /
            (100 * 12);
    const maturityDate = new Date();
    maturityDate.setMonth(maturityDate.getMonth() + investmentProduct.tenure_months);
    // IMP - Atomic Transaction
    const investment = await prisma_util_1.prisma.$transaction(async (transaction) => {
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
exports.createInvestment = createInvestment;
// R
const getAllUserInvestments = async (userId) => {
    const investments = await prisma_util_1.prisma.investments.findMany({
        where: { user_id: userId },
        include: {
            investment_products: true,
        },
        orderBy: { invested_at: 'desc' },
    });
    return investments;
};
exports.getAllUserInvestments = getAllUserInvestments;
// D - Cancel
const cancelInvestment = async (userId, investmentId) => {
    const investment = await prisma_util_1.prisma.investments.findFirst({
        where: { id: investmentId, user_id: userId },
    });
    if (!investment)
        throw new Error('Investment not found');
    if (investment.status !== 'active') {
        throw new Error('Only active investments can be cancelled');
    }
    await prisma_util_1.prisma.$transaction(async (transaction) => {
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
exports.cancelInvestment = cancelInvestment;
// Cron - Matured
const maturedInvestments = async () => {
    const today = new Date();
    const maturedInvestments = await prisma_util_1.prisma.$transaction(async (transaction) => {
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
exports.maturedInvestments = maturedInvestments;
const getPortfolioInsights = async (userId) => {
    const investments = await prisma_util_1.prisma.investments.findMany({
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
    const riskDistribution = {
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
        riskDistribution[key] = parseFloat(((riskDistribution[key] / totalInvested) * 100).toFixed(2));
    });
    const insights = await (0, groq_utils_1.generatePortfolioInsights)(investments, riskDistribution, totalInvested, expectedReturns);
    return { totalInvested, riskDistribution, expectedReturns, insights };
};
exports.getPortfolioInsights = getPortfolioInsights;
//! Illegal
const forcematureInvestment = async (userId, investmentId) => {
    const today = new Date();
    const maturedInvestment = await prisma_util_1.prisma.$transaction(async (transaction) => {
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
exports.forcematureInvestment = forcematureInvestment;
//# sourceMappingURL=investment.service.js.map