"use client";
import { useGetMe } from "@/hooks";
import { managerRoutes, ownerRoutes, teamMemberRoutes } from "@/routes";
import DashboardShell from "./dashboardShell";
import React, { ReactNode } from "react";

type OrganizationDashboardProps = {
  organization: string;
  children: React.ReactNode;
};

const OrganizationDashboard = ({
  organization,
  children,
}: OrganizationDashboardProps) => {
  const { data: user, isPending } = useGetMe();

  if (isPending) {
    return <div>Loading...</div>;
  }

  const member = user?.data?.organizationMembers.find(
    (member: any) => member.organizationId === organization,
  );

  if (!member) {
    return <div>Member not found</div>;
  }

  const role = member?.role;

  const routes =
    role === "OWNER"
      ? ownerRoutes
      : role === "MANAGER"
        ? managerRoutes
        : teamMemberRoutes;

  return (
    <DashboardShell routes={routes} organization={organization}>
      {children}
    </DashboardShell>
  );
};

export default OrganizationDashboard;
