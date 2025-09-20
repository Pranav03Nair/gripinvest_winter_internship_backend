import { addBalanceType } from '../validators/user.validator';
export declare const addBalance: (userId: string, input: addBalanceType) => Promise<{
    id: string;
    email: string;
    first_name: string;
    last_name: string | null;
    role: import("../../generated/prisma").$Enums.user_role;
    risk_appetite: import("../../generated/prisma").$Enums.risk_level;
    balance: import("../../generated/prisma/runtime/library").Decimal;
    created_at: Date | null;
    updated_at: Date | null;
}>;
export declare const getUserProfile: (userId: string) => Promise<{
    id: string;
    email: string;
    first_name: string;
    last_name: string | null;
    role: import("../../generated/prisma").$Enums.user_role;
    risk_appetite: import("../../generated/prisma").$Enums.risk_level;
    balance: import("../../generated/prisma/runtime/library").Decimal;
    created_at: Date | null;
    updated_at: Date | null;
}>;
export declare const getPortfolioSummary: (userId: string) => Promise<{
    totalInvested: number;
    currentValue: number;
    totalReturns: number;
    returnsPercentage: number;
    activeInvestments: number;
}>;
//# sourceMappingURL=user.service.d.ts.map