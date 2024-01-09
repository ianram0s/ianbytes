import { z } from "zod";

export const authForm = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Must be at least 6 characters long")
});
  
export type AuthFormSchema = typeof authForm;