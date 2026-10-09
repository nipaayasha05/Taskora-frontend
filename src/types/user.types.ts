export type OrganizationRole = "OWNER" | "MANAGER" | "TEAM_MEMBER";

export type SystemRole = "USER" | "ADMIN";

export type User = {
  id: string;
  name: string;
  email: string;
};

export type Profile = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  status: string;
  systemRole: string;
  createdAt: string;
  createdOrganizations: {
    id: string;
    name: string;
  }[];
};
