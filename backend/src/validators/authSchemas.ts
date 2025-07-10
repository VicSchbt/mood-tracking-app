import { z } from "zod";

export const signupSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
  name: z.string().min(1),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});
