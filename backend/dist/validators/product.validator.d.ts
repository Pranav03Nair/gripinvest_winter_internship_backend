import { z } from 'zod';
export declare const productSchema: z.ZodObject<{
    name: z.ZodString;
    investment_type: z.ZodEnum<{
        bond: "bond";
        fd: "fd";
        mf: "mf";
        etf: "etf";
        other: "other";
    }>;
    tenure_months: z.ZodNumber;
    annual_yield: z.ZodNumber;
    risk_level: z.ZodEnum<{
        low: "low";
        moderate: "moderate";
        high: "high";
    }>;
    min_investment: z.ZodNumber;
    max_investment: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateProductSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    investment_type: z.ZodOptional<z.ZodEnum<{
        bond: "bond";
        fd: "fd";
        mf: "mf";
        etf: "etf";
        other: "other";
    }>>;
    tenure_months: z.ZodOptional<z.ZodNumber>;
    annual_yield: z.ZodOptional<z.ZodNumber>;
    risk_level: z.ZodOptional<z.ZodEnum<{
        low: "low";
        moderate: "moderate";
        high: "high";
    }>>;
    min_investment: z.ZodOptional<z.ZodNumber>;
    max_investment: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type productType = z.infer<typeof productSchema>;
//# sourceMappingURL=product.validator.d.ts.map