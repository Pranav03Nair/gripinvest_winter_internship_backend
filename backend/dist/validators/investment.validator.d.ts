import { z } from 'zod';
export declare const investmentSchema: z.ZodObject<{
    product_id: z.ZodUUID;
    amount: z.ZodNumber;
}, z.core.$strip>;
export type investmentType = z.infer<typeof investmentSchema>;
//# sourceMappingURL=investment.validator.d.ts.map