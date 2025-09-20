import { z } from 'zod';
export declare const signupSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodOptional<z.ZodString>;
    email: z.ZodEmail;
    password: z.ZodString;
    role: z.ZodOptional<z.ZodEnum<{
        admin: "admin";
        user: "user";
    }>>;
    risk_appetite: z.ZodOptional<z.ZodEnum<{
        low: "low";
        moderate: "moderate";
        high: "high";
    }>>;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export type signupType = z.infer<typeof signupSchema>;
export type loginType = z.infer<typeof loginSchema>;
//# sourceMappingURL=auth.validator.d.ts.map