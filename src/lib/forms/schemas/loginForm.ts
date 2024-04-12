import { z } from 'zod';

export const loginFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6, 'Must be at least 6 characters long')
});

export type LoginFormSchema = typeof loginFormSchema;
