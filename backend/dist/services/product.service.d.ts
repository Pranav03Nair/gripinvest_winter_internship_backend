import { productType } from '../validators/product.validator';
export declare const createProduct: (adminId: string, data: productType) => Promise<{
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
}>;
export declare const updateProduct: (productId: string, data: productType) => Promise<{
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
}>;
export declare const deleteProduct: (productId: string) => Promise<void>;
export declare const getAllProducts: () => Promise<{
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
}[]>;
export declare const getProductById: (id: string) => Promise<{
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
} | null>;
export declare const getRecommendedProducts: (userId: string) => Promise<{
    name: string;
    investment_type: "bond" | "fd" | "mf" | "etf" | "other";
    tenure_months: number;
    annual_yield: number;
    risk_level: "low" | "moderate" | "high";
    min_investment: number;
    max_investment?: number | undefined;
    description?: string | undefined;
}[]>;
//# sourceMappingURL=product.service.d.ts.map