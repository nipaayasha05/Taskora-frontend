import ExploreOrganization from "@/components/modules/organizations/explore-organization/Explore-organization";
import React from "react";

const AllOrganizationPage = () => {
  return (
    <div className="py-10">
      <div className="text-center pb-5 ">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Explore Organizations
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Discover organizations and find the right team for your project.
        </p>
      </div>
      <div className="mb-5">
        <ExploreOrganization />
      </div>
    </div>
  );
};

export default AllOrganizationPage;
