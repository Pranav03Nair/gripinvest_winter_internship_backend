import { z } from 'zod';

export const addBalanceSchema = z.object({
  amount: z
    .number()
    .positive('Amount must be positive')
    .max(100000, 'Amount cannot exceed ₹100,000')
    .min(1, 'Amount must be at least ₹1'),
});

export type addBalanceType = z.infer<typeof addBalanceSchema>;
