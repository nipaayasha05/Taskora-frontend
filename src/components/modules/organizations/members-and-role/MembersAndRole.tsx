"use client";
import { useGetMe } from "@/hooks";
import { useGetAllOrganizationMembers } from "@/hooks/organization.hooks";
import { OrganizationMember } from "@/types";
import { useParams } from "next/navigation";
import React from "react";
import MembersAndRoleTable from "./MembersAndRoleTable";
import GlobalLoading from "@/app/loading";
import SkeletonPage from "@/components/skeleton/skeleton";

const MembersAndRole = () => {
  const { data: me } = useGetMe();
  console.log("me", me);
  const params = useParams();
  console.log("params", params);

  const organizationSlug = params.organization as string;

  const organizationId = me?.data?.organizationMembers?.find(
    (member: OrganizationMember) =>
      member.organization?.name.toLowerCase().replace(/\s+/g, "-") ===
      organizationSlug,
  )?.organizationId;

  const { data, isLoading, isError } =
    useGetAllOrganizationMembers(organizationId);

  console.log("members", data);

  if (isLoading) {
    return <SkeletonPage />;
  }

  return (
    <div>
      <div>
        <MembersAndRoleTable
          members={data?.data}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </div>
  );
};

export default MembersAndRole;
