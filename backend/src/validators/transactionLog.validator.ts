import { z } from 'zod';

export const logFetchSchema = z
  .object({
    userId: z.uuid().optional(),
    email: z.email().optional(),
  })
  .refine((data) => data.userId || data.email, {
    message: 'Either userId or email is required',
  });
