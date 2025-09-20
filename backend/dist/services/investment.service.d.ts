import { investmentType } from '../validators/investment.validator';
export declare const createInvestment: (userId: string, data: investmentType) => Promise<{
    id: string;
    user_id: string;
    amount: import("../../generated/prisma/runtime/library").Decimal;
    product_id: string;
    invested_at: Date | null;
    status: import("../../generated/prisma").$Enums.status_type | null;
    expected_return: import("../../generated/prisma/runtime/library").Decimal | null;
    maturity_date: Date | null;
}>;
export declare const getAllUserInvestments: (userId: string) => Promise<({
    investment_products: {
        id: string;
        created_at: Date | null;
        updated_at: Date | null;
        name: string;
        description: string | null;
        investment_type: import("../../generated/prisma").$Enums.investment_type;
        tenure_months: number;
        annual_yield: import("../../generated/prisma/runtime/library").Decimal;
        risk_level: import("../../generated/prisma").$Enums.risk_level_type;
        min_investment: import("../../generated/prisma/runtime/library").Decimal;
        max_investment: import("../../generated/prisma/runtime/library").Decimal | null;
        created_by: string | null;
    };
} & {
    id: string;
    user_id: string;
    amount: import("../../generated/prisma/runtime/library").Decimal;
    product_id: string;
    invested_at: Date | null;
    status: import("../../generated/prisma").$Enums.status_type | null;
    expected_return: import("../../generated/prisma/runtime/library").Decimal | null;
    maturity_date: Date | null;
})[]>;
export declare const cancelInvestment: (userId: string, investmentId: string) => Promise<boolean>;
export declare const maturedInvestments: () => Promise<number>;
export declare const getPortfolioInsights: (userId: string) => Promise<{
    totalInvested: number;
    riskDistribution: Record<string, number>;
    expectedReturns: number;
    insights: string;
}>;
export declare const forcematureInvestment: (userId: string, investmentId: string) => Promise<{
    id: string;
    user_id: string;
    amount: import("../../generated/prisma/runtime/library").Decimal;
    product_id: string;
    invested_at: Date | null;
    status: import("../../generated/prisma").$Enums.status_type | null;
    expected_return: import("../../generated/prisma/runtime/library").Decimal | null;
    maturity_date: Date | null;
}>;
//# sourceMappingURL=investment.service.d.ts.map