import { z } from 'zod';
export declare const logFetchSchema: z.ZodObject<{
    userId: z.ZodOptional<z.ZodUUID>;
    email: z.ZodOptional<z.ZodEmail>;
}, z.core.$strip>;
//# sourceMappingURL=transactionLog.validator.d.ts.map