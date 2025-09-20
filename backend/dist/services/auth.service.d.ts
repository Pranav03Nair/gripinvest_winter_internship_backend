import { loginType, signupType } from '../validators/auth.validator';
export declare const createUser: (input: signupType) => Promise<{
    token: string;
    user: {
        id: string;
        email: string;
        first_name: string;
        last_name: string | null;
        role: import("../../generated/prisma").$Enums.user_role;
        risk_appetite: import("../../generated/prisma").$Enums.risk_level;
        balance: import("../../generated/prisma/runtime/library").Decimal;
        created_at: Date | null;
        updated_at: Date | null;
    };
}>;
export declare const loginUser: (input: loginType) => Promise<{
    token: string;
    user: {
        id: string;
        email: string;
        first_name: string;
        last_name: string | null;
        role: import("../../generated/prisma").$Enums.user_role;
        risk_appetite: import("../../generated/prisma").$Enums.risk_level;
        balance: import("../../generated/prisma/runtime/library").Decimal;
        created_at: Date | null;
        updated_at: Date | null;
    };
}>;
export declare const getAllUsers: (excludeUserId?: string) => Promise<{
    id: string;
    email: string;
    first_name: string;
    last_name: string | null;
    role: import("../../generated/prisma").$Enums.user_role;
    risk_appetite: import("../../generated/prisma").$Enums.risk_level;
    balance: import("../../generated/prisma/runtime/library").Decimal;
    created_at: Date | null;
    updated_at: Date | null;
}[]>;
//# sourceMappingURL=auth.service.d.ts.map