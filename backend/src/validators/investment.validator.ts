import { z } from 'zod';

export const investmentSchema = z.object({
  product_id: z.uuid('Product Id is UUID'),
  amount: z.number().min(1000, 'Minimum investment is ₹1000'),
});

export type investmentType = z.infer<typeof investmentSchema>;
