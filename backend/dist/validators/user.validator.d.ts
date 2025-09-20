import { z } from 'zod';
export declare const addBalanceSchema: z.ZodObject<{
    amount: z.ZodNumber;
}, z.core.$strip>;
export type addBalanceType = z.infer<typeof addBalanceSchema>;
//# sourceMappingURL=user.validator.d.ts.map