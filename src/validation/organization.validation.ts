import { z } from "zod";
import { getCustomeFileSchema, MAX_FILE_SIZE } from "./file.validation";

export const createOrganizationSchema = z.object({
  name: z
    .string()
    .min(2, "Organization name must be at least 2 characters")
    .max(100, "Organization name must not exceed 100 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters"),

  industry: z
    .string()
    .min(2, "Industry is required")
    .max(100, "Industry must not exceed 100 characters"),

  logo: getCustomeFileSchema<File>(
    `Logo must be an image and must not exceed ${MAX_FILE_SIZE}MB`,
  ).or(z.undefined()),
});
