"use client";
import { useGetMe } from "@/hooks";
import { managerRoutes, ownerRoutes, teamMemberRoutes } from "@/routes";
import DashboardShell from "./dashboardShell";
import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Organization, OrganizationMember } from "@/types";

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
    return name.toLocaleLowerCase().trim().replace(/\s+/g, "-");
  };

  const organizationName = user?.data?.createdOrganizations?.find(
    (org: Organization) => org.id === organization,
  );

  const member = user?.data?.organizationMembers.find(
    (member: OrganizationMember) =>
      member.organizationId === organizationName?.id,
  );

  const organizationSlug = organizationName
    ? slugify(organizationName.name)
    : "";

  useEffect(() => {
    if (!isPending && organizationSlug && organization !== organizationSlug) {
      router.replace(`/dashboard/${organizationSlug}`);
    }
  }, [isPending, organization, organizationSlug, router]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  const role = member?.role;

  const routes =
    role === "OWNER"
      ? ownerRoutes
      : role === "MANAGER"
        ? managerRoutes
        : teamMemberRoutes;

  return (
    <DashboardShell routes={routes} organization={organizationSlug}>
      {children}
    </DashboardShell>
  );
};

export default OrganizationDashboard;
