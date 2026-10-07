import {
  OrganizationPage,
  organizationPermissions,
  OrganizationRole,
} from "./organization-permission";

export function hasPageAccess(role: OrganizationRole, page: OrganizationPage) {
  return organizationPermissions[role][page];
}

// export function hasActionAccess(
//   role: OrganizationRole,
//   action: keyof (typeof organizationPermissions)[OrganizationRole],
// ) {
//   return organizationPermissions[role][action];
// }
