"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolioSummary = exports.getUserProfile = exports.addBalance = void 0;
const prisma_util_1 = require("../utils/prisma.util");
const addBalance = async (userId, input) => {
    const { amount } = input;
    // Check if user exists
    const user = await prisma_util_1.prisma.users.findUnique({
        where: { id: userId },
    });
    if (!user) {
        throw new Error('User not found');
    }
    // Update user balance
    const updatedUser = await prisma_util_1.prisma.users.update({
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
exports.addBalance = addBalance;
const getUserProfile = async (userId) => {
    const user = await prisma_util_1.prisma.users.findUnique({
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
exports.getUserProfile = getUserProfile;
const getPortfolioSummary = async (userId) => {
    // Fetch only active and matured investments (exclude cancelled)
    const investments = await prisma_util_1.prisma.investments.findMany({
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
    const returnsPercentage = totalInvested > 0
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
exports.getPortfolioSummary = getPortfolioSummary;
//# sourceMappingURL=user.service.js.map