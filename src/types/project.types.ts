export type Project = {
  id: string;
  name: string;
  description: string;
  startDate: string;
  dueDate: string;
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";
  organizationId: string;
  clientId: string;
  createdById: string;
  createdAt: string;
  updatedAt: string;

  client: {
    id: string;
    name: string;
    email: string;
  };

  projectTeams: {
    id: string;
    projectId: string;
    teamId: string;
    createdAt: string;
    updatedAt: string;
  }[];

  sprints: {
    id: string;
    projectId: string;
    name: string;
    goal: string;
    startDate: string;
  }[];

  tasks: {
    id: string;
    projectId: string;
    sprintId: string;
    sprintTeamId: string;
    title: string;
    description: string | null;
    dueDate: string | null;
    priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
    status: "TODO" | "IN_PROGRESS" | "DONE";
    createdById: string;
    createdAt: string;
    updatedAt: string;
    subTasks: unknown[];
  }[];
};

export type AddTeamToProjectPayload = {
  organizationId: string;
  projectId: string;
  teamIds: string[];
};

export type CreateProjectPayload = {
  name: string;
  description?: string;
  status?: "ACTIVE" | "COMPLETED" | "ON_HOLD" | "CANCELLED";
  startDate?: Date;
  dueDate?: Date;
  clientId: string;
  organizationId: string;
};

export type ProjectTeam = {
  createdAt: string;
  updatedAt: string;

  id: string;

  projectId: string;

  team: {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    organizationId: string;
  };

  teamId: string;
};
