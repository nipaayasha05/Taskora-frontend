"use client";
import { useGetAllOrganizationForPublic } from "@/hooks/organization.hooks";
import React from "react";
import ExploreOrganizationCard from "./Explore-organization-card";
import { PublicOrganization } from "@/types";
import SkeletonPage from "@/components/skeleton/skeleton";

const ExploreOrganization = () => {
  const { data, isLoading, isError } = useGetAllOrganizationForPublic();
  console.log(data);

  if (isLoading) {
    return <SkeletonPage />;
  }

  return (
    <div className="grid gap-6  md:grid-cols-2 xl:grid-cols-3">
      {data?.data?.map((organization: PublicOrganization) => (
        <ExploreOrganizationCard
          key={organization.id}
          organization={organization}
        />
      ))}
    </div>
  );
};

export default ExploreOrganization;
