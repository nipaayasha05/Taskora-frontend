import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useGetAllProjects, useGetMe } from "@/hooks";
import { useAddTeamsToSprint } from "@/hooks/sprints.hook";
import { hasPageAccess } from "@/permissions/has-permission";
import {
  OrganizationMember,
  Project,
  ProjectTeam,
  Sprint,
  SprintTeam,
  Team,
} from "@/types";
import { useCurrentOrganization } from "@/utils/organizationId";
import { useQueryClient } from "@tanstack/react-query";
import { UserPlus } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const SprintTeamProject = ({
  projectId,
  sprint,
}: {
  projectId: string;
  sprint: Sprint;
}) => {
  const { organizationId, organizationSlug } = useCurrentOrganization();

  const { data: me, isLoading, isError: meIsError } = useGetMe();

  const {
    data: projectsData,
    isLoading: projectsLoading,
    isError: projectsIsError,
  } = useGetAllProjects(organizationId);

  const [selectTeam, setSelectTeam] = useState<string[]>([]);

  console.log("projectsData", projectsData);

  const currentOrganization = me?.data?.organizationMembers?.find(
    (member: OrganizationMember) => member.organizationId === organizationId,
  );

  const { mutate: addTeamsToSprint } = useAddTeamsToSprint();

  const organizationRole = currentOrganization?.role;

  const project = projectsData?.data?.find(
    (project: Project) => project.id === projectId,
  );

  const queryClient = useQueryClient();

  const handleSelectTeam = (teamId: string) => {
    setSelectTeam((prev) =>
      prev.includes(teamId)
        ? prev.filter((id) => id !== teamId)
        : [...prev, teamId],
    );
  };

  const handleAddTeam = (projectId: string) => {
    const data = {
      organizationId,
      projectId,
      sprintId: sprint.id,
      teamIds: selectTeam,
    };

    addTeamsToSprint(data, {
      onSuccess: () => {
        toast.success("Project Teams added successfully");

        queryClient.invalidateQueries({
          queryKey: ["sprints", organizationId!],
        });
        setSelectTeam([]);
      },
      onError: () => {
        toast.error("Failed to add teams");
      },
    });
  };

  return (
    <div>
      <div className="flex-1 ">
        {organizationRole && hasPageAccess(organizationRole, "ADD_TEAMS") && (
          <Dialog>
            <DialogTrigger asChild>
              {sprint.status === "COMPLETED" ? (
                <Button
                  disabled={true}
                  variant="outline"
                  className="w-full cursor-pointer "
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Teams
                </Button>
              ) : (
                <Button variant="outline" className=" cursor-pointer ">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Teams
                </Button>
              )}
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add ProjectTeams</DialogTitle>
                <DialogDescription>
                  Select project teams to add to this sprint.
                  <span className=" text-primary">{sprint?.name}</span>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-2">
                {project?.projectTeams?.map((projectTeam: ProjectTeam) => {
                  const team = projectTeam?.team;

                  return (
                    <div
                      key={team?.id}
                      className="flex items-center gap-3 rounded-lg border p-3"
                    >
                      <Checkbox
                        className="cursor-pointer"
                        checked={selectTeam.includes(team?.id)}
                        onCheckedChange={() => {
                          handleSelectTeam(team?.id);
                        }}
                        disabled={sprint?.sprintTeams?.some(
                          (sprintTeam: SprintTeam) =>
                            sprintTeam.teamId === team.id,
                        )}
                      />
                      <div className="flex-1">
                        <p>{team.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {team.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>

                <Button
                  disabled={selectTeam.length === 0}
                  onClick={() => handleAddTeam(project.id)}
                  className="cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Spinner /> Adding...
                    </>
                  ) : (
                    <>Add Teams</>
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default SprintTeamProject;
