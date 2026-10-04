export type OrganizationRole = "OWNER" | "MANAGER" | "TEAM_MEMBER";

export type SystemRole = "USER" | "ADMIN";

export type User = {
  id: string;
  name: string;
  email: string;
};
