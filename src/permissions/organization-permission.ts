export const organizationPermissions = {
  OWNER: {
    PROJECTS: true,
    CREATE_PROJECT: true,
    ADD_TEAMS: true,
    VIEW_SPRINTS: true,
  },
  MANAGER: {
    PROJECTS: true,
    CREATE_PROJECT: true,
    ADD_TEAMS: true,
    VIEW_SPRINTS: true,
  },
  TEAM_MEMBER: {
    PROJECTS: true,
    CREATE_PROJECT: false,
    ADD_TEAMS: false,
    VIEW_SPRINTS: true,
  },
} as const;

export type OrganizationRole = keyof typeof organizationPermissions;

export type OrganizationPage = keyof typeof organizationPermissions.OWNER;
