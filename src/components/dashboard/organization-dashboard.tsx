"use client";

import { useGetMe } from "@/hooks";
import { managerRoutes, ownerRoutes, teamMemberRoutes } from "@/routes";
import DashboardShell from "./dashboardShell";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { OrganizationMember } from "@/types";

type OrganizationDashboardProps = {
  organization: string;
  children: React.ReactNode;
};

const OrganizationDashboard = ({
  organization,
  children,
}: OrganizationDashboardProps) => {
  const { data: user, isPending } = useGetMe();
  const router = useRouter();

  const slugify = (name: string) => {
    return name.toLowerCase().trim().replace(/\s+/g, "-");
  };

  const member = user?.data?.organizationMembers?.find(
    (member: OrganizationMember) => {
      const slug = member.organization?.name
        ? slugify(member.organization.name)
        : "";

      return slug === organization;
    },
  );

  useEffect(() => {
    if (!isPending && !member) {
      router.replace("/dashboard");
    }
  }, [isPending, member, router]);

  if (isPending || !member) {
    return null;
  }

  const role = member.role;

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
