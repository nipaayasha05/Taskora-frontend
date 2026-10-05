export type CreateTeamsPayload = {
  organizationId: string;
  name: string;
  description?: string;
};

export type TeamMember = {
  id: string;
  teamId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type Team = {
  id: string;
  name: string;
  description: string;
  organizationId: string;
  createdById: string;
  createdAt: string;
  updatedAt: string;
  members: TeamMember[];
};

export type AddTeamMemberPayload = {
  organizationId: string;
  teamId: string;
  userIds: string[];
};
