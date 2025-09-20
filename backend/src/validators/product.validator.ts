import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(3),
  investment_type: z.enum(['bond', 'fd', 'mf', 'etf', 'other']),
  tenure_months: z.number().min(1),
  annual_yield: z.number().min(0),
  risk_level: z.enum(['low', 'moderate', 'high']),
  min_investment: z.number().min(0),
  max_investment: z.number().min(0).optional(),
  description: z.string().optional(),
});

export const updateProductSchema = productSchema.partial();

export type productType = z.infer<typeof productSchema>;
