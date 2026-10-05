import CreateTeamsForm from "@/components/form/CreateTeamsForm";
import CreateTeams from "@/components/form/CreateTeamsForm";
import Teams from "@/components/modules/teams/Teams";
import React from "react";

const TeamsPage = () => {
  return (
    <div>
      <div className="flex items-center justify-end">
        {" "}
        <div className="">
          <CreateTeamsForm />
        </div>
      </div>
      <div className="">
        <Teams />
      </div>
    </div>
  );
};

export default TeamsPage;
