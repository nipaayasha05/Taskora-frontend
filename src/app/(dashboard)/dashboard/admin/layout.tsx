"use client";
import { RoleGuard } from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboardShell";
import { adminRoutes } from "@/routes";
import { SystemRole } from "@/types/user.types";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RoleGuard systemRoles={["ADMIN"]}>
      <DashboardShell routes={adminRoutes}> {children}</DashboardShell>
    </RoleGuard>
  );
};

export default AdminLayout;
