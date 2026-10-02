"use client";
import { RoleGuard } from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboardShell";
import { adminRoutes, userRoutes } from "@/routes";
import { SystemRole } from "@/types/user.types";
import React from "react";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RoleGuard systemRoles={["USER"]}>
      <DashboardShell routes={userRoutes}> {children}</DashboardShell>
    </RoleGuard>
  );
};

export default UserLayout;
