import { RoleGuard } from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboardShell";
import { SystemRole } from "@/types/user.types";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RoleGuard systemRoles={["ADMIN"]} organizationRoles={[]}>
      {children}
    </RoleGuard>
  );
};

export default AdminLayout;
