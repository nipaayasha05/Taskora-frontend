import z from "zod";

export const createProjectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Team name is required")
    .max(100, "Team name cannot exceed 100 characters"),

  description: z
    .string()
    .trim()
    .max(500, "Description cannot exceed 500 characters"),

  status: z.enum(["ACTIVE", "COMPLETED", "ON_HOLD", "CANCELLED"]).optional(),

  startDate: z.coerce.date().optional(),

  dueDate: z.coerce.date().optional(),
  clientId: z.string().uuid("Invalid clientId"),
  organizationId: z.string().uuid("Invalid organizationId"),
});
