import {
  OrganizationPage,
  organizationPermissions,
  OrganizationRole,
} from "./organization-permission";

export function hasPageAccess(role: OrganizationRole, page: OrganizationPage) {
  return organizationPermissions[role][page];
}
