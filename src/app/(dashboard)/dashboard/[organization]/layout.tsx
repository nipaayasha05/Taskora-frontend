import { RoleGuard } from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboardShell";
import { SystemRole } from "@/types/user.types";
import React from "react";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RoleGuard
      systemRoles={["USER"]}
      organizationRoles={["OWNER", "MANAGER", "TEAM_MEMBER"]}
    >
      {children}
    </RoleGuard>
  );
};

export default OrganizationLayout;
