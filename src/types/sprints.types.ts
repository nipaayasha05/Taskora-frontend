import { Payment } from "./project.types";

export type SprintStatus = "PLANNED" | "ACTIVE" | "COMPLETED" | "CANCELLED";

export type Sprint = {
  id: string;
  name: string;
  goal: string;
  projectId: string;
  createdById: string;
  startDate: string;
  endDate: string;
  status: SprintStatus;
  paymentAmount: number;
  createdAt: string;
  updatedAt: string;
  tasks: Task[];
  sprintTeams: SprintTeam[];
  payments: Payment[];
  organizationId: string;
};

export type CreateSprintPayload = {
  name: string;
  goal: string;
  startDate: string;
  endDate: string;
  paymentAmount: number;
  organizationId: string;
  projectId: string;
};
export type UpdateSprintPayload = {
  name: string;
  goal: string;
  startDate: string;
  endDate: string;
  status: SprintStatus;
  paymentAmount: number;
  organizationId: string;
  projectId: string;
  sprintId: string;
};

export type Task = {
  id: string;
  projectId: string;
  sprintId: string;
  title: string;
  description: string | null;
  payments: number;
};

export type SprintTeam = {
  id: string;
  sprintId: string;
  teamId: string;
  createdById: string;
  createdAt: string;
};

// export type Payment = {
//   id: string;
//   sprintId: string;
//   clientId: string;
//   amount: string;
//   stripeCustomerId: string;
//   status: "PENDING" | "SUCCESS" | "FAILED";
// };

export type AddTeamToSprintsPayload = {
  organizationId: string;
  projectId: string;
  sprintId: string;
  teamIds: string[];
};
