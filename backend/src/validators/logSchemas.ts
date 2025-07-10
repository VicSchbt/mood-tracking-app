import { z } from "zod";

export const logSchema = z.object({
  mood: z.union([
    z.literal(-2),
    z.literal(-1),
    z.literal(0),
    z.literal(1),
    z.literal(2),
  ]),
  feelings: z.array(z.string()).max(3).optional(),
  journal: z.string().max(1000).optional(),
  sleepHours: z.union([
    z.literal(1),
    z.literal(3.5),
    z.literal(5.5),
    z.literal(7.5),
    z.literal(9.5),
  ]),
});
