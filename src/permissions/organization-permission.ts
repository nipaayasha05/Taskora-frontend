export const organizationPermissions = {
  OWNER: {},
  MANAGER: {},
  TEAM_MEMBER: {},
} as const;

export type OrganizationRole = keyof typeof organizationPermissions;

export type OrganizationPage = keyof (typeof organizationPermissions)["OWNER"];
