export const organizationPermissions = {
  OWNER: {
    PROJECTS: true,
    CREATE_PROJECT: true,
    ADD_TEAMS: true,
    VIEW_SPRINTS: true,
    CREATE_SPRINT: true,
    UPDATE_SPRINT: true,
  },
  MANAGER: {
    PROJECTS: true,
    CREATE_PROJECT: true,
    ADD_TEAMS: true,
    VIEW_SPRINTS: true,
    CREATE_SPRINT: true,
    UPDATE_SPRINT: true,
  },
  TEAM_MEMBER: {
    PROJECTS: true,
    CREATE_PROJECT: false,
    ADD_TEAMS: false,
    VIEW_SPRINTS: true,
    CREATE_SPRINT: false,
    UPDATE_SPRINT: false,
  },
} as const;

export type OrganizationRole = keyof typeof organizationPermissions;

export type OrganizationPage = keyof typeof organizationPermissions.OWNER;
