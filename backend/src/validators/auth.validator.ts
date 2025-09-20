import { z } from 'zod';

export const signupSchema = z.object({
  first_name: z.string().min(1, 'First Name cannot be empty'),

  last_name: z.string().optional(),

  email: z.email('Email format is invalid or Email is missing'),

  password: z
    .string()
    .min(8, 'Password length should be at least 8 characters'),

  role: z.enum(['user', 'admin']).optional(),

  risk_appetite: z.enum(['low', 'moderate', 'high']).optional(),
});

export const loginSchema = z.object({
  email: z.email('Email format is invalid or Email is missing'),

  password: z
    .string()
    .min(8, 'Password length should be at least 8 characters'),
});

export type signupType = z.infer<typeof signupSchema>;
export type loginType = z.infer<typeof loginSchema>;
