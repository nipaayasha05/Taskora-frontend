export type Organization = {
  id: string;
  name: string;
  description: string;
  industry: string;
  status: string;
  logo: string | null;
  createdAt: string;
};

export type OrganizationMember = {
  id: string;
  organizationId: string;
  userId: string;
  role: "OWNER" | "MANAGER" | "TEAM_MEMBER";
  createdAt: string;
};

export type UserData = {
  id: string;
  name: string;
  email: string;
  systemRole: "ADMIN" | "USER";
  authProvider: "CREDENTIAL" | "GOOGLE";
  emailVerified: boolean;
  status: "ACTIVE" | "INACTIVE";

  createdOrganizations: Organization[];
  organizationMembers: OrganizationMember[];
};

export type CreateOrganization = {
  name: string;
  description: string;
  industry: string;
};

export type CreateOrganizationPayload = {
  data: CreateOrganization;
  logo?: File;
};
