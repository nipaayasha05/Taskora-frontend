import OrganizationDashboard from "@/components/modules/organizations/dashboard/OrganizationDashboard";
import { useGetAllOrganizationForPublic } from "@/hooks/organization.hooks";
import { Organization } from "@/types";
import React from "react";

const OrganizationDashboardPage = () => {
  return (
    <div>
      <OrganizationDashboard />
    </div>
  );
};

export default OrganizationDashboardPage;
