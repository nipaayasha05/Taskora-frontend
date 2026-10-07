import SprintForm from "@/components/form/SprintForm";
import Sprints from "@/components/modules/sprints/Sprints";
import React from "react";

const SprintsPage = () => {
  return (
    <div>
      <div className="flex items-center justify-end">
        <SprintForm />
      </div>
      <Sprints />
    </div>
  );
};

export default SprintsPage;
