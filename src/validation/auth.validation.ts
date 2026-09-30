import z from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one digit")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "password must contain at least one special character",
    ),
});

export const registrationSchema = z.object({
  name: z
    .string()
    .min(3, "name must be at least 3 characters long")
    .max(12, "name must be at most 12 characters long"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "password is required")
    .min(6, "password must be at least 6 characters long")
    .regex(/[A-Z]/, "password must contain at least one uppercase letter")
    .regex(/[a-z]/, "password must contain at least one lowercase letter")
    .regex(/[0-9]/, "password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "password must contain at least one special character",
    ),
});
