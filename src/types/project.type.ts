export type CreateProjectPayload = {
  name: string;
  description?: string;
  status?: "ACTIVE" | "COMPLETED" | "ON_HOLD" | "CANCELLED";
  startDate?: Date;
  dueDate?: Date;
  clientId: string;
  organizationId: string;
};
