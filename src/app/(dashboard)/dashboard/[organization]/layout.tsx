import { RoleGuard } from "@/components/auth/role-guard";
import OrganizationDashboard from "@/components/dashboard/organization-dashboard";
import React, { ReactNode } from "react";

type OrganizationLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    organization: string;
  }>;
};

const OrganizationLayout = async ({
  children,
  params,
}: OrganizationLayoutProps) => {
  const { organization } = await params;
  return (
    <RoleGuard
      systemRoles={["USER"]}
      organizationRoles={["OWNER", "MANAGER", "TEAM_MEMBER"]}
    >
      <OrganizationDashboard organization={organization}>
        {children}
      </OrganizationDashboard>
    </RoleGuard>
  );
};

export default OrganizationLayout;
