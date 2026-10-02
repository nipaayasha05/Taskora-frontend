"use client";
import AuthGuard from "@/components/auth/auth-guard";
import DashboardShell from "@/components/dashboard/dashboardShell";
import { userRoutes } from "@/routes";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AuthGuard>{children}</AuthGuard>
    </div>
  );
};

export default DashboardLayout;
