"use client";
import GlobalLoading from "@/app/loading";
import ProjectForm from "@/components/form/ProjectForm";
import SkeletonPage from "@/components/skeleton/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import {
  useAddTeamsToProject,
  useGetAllProjects,
  useGetAllTeams,
  useGetMe,
} from "@/hooks";
import { hasPageAccess } from "@/permissions/has-permission";
import {
  AddTeamToProjectPayload,
  OrganizationMember,
  Project,
  Team,
} from "@/types";
import { useCurrentOrganization } from "@/utils/organizationId";
import { useQueryClient } from "@tanstack/react-query";
import { ListChecks, Milestone, UserPlus, Users } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const Projects = () => {
  const { organizationId, organizationSlug } = useCurrentOrganization();

  const { mutate: addTeamsToProject } = useAddTeamsToProject();

  const queryClient = useQueryClient();

  const {
    data: allTeams,
    isLoading: teamsLoading,
    isError: teamsIsError,
  } = useGetAllTeams(organizationId);

  const { data: me, isLoading: meLoading, isError: meIsError } = useGetMe();
  const { data, isLoading, isError } = useGetAllProjects(organizationId);
  const [selectTeam, setSelectTeam] = useState<string[]>([]);

  console.log("projects", data);
  console.log("allTeams", allTeams);

  const currentOrganization = me?.data?.organizationMembers?.find(
    (member: OrganizationMember) => member.organizationId === organizationId,
  );

  const organizationRole = currentOrganization?.role;
  console.log("organizationRole", organizationRole);

  const handleSelectTeam = (teamId: string) => {
    setSelectTeam((prev) =>
      prev.includes(teamId)
        ? prev.filter((id) => id !== teamId)
        : [...prev, teamId],
    );
  };

  const handleAddTeam = (projectId: string) => {
    const payload: AddTeamToProjectPayload = {
      organizationId,
      projectId,
      teamIds: selectTeam,
    };

    addTeamsToProject(payload, {
      onSuccess: () => {
        toast.success("Teams added successfully");

        queryClient.invalidateQueries({
          queryKey: ["projects", organizationId!],
        });

        setSelectTeam([]);
      },
      onError: () => {
        toast.error("Failed to add teams");
      },
    });
  };

  if (isLoading) {
    return <SkeletonPage />;
  }

  return (
    <div>
      {hasPageAccess(organizationRole, "CREATE_PROJECT") && (
        <div className="flex items-center justify-end">
          {" "}
          <div className="">
            <ProjectForm />
          </div>
        </div>
      )}

      <div>
        {data?.data?.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-dashed bg-muted/20 px-6 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>

            <h3 className=" font-semibold">No teams yet</h3>

            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              You haven't created any teams yet. Create a team to start
              organizing your members and projects.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
            {data?.data?.map((project: Project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle>{project?.name}</CardTitle>
                      <CardDescription className="mt-1 line-clamp-1">
                        {project?.description}
                      </CardDescription>
                    </div>

                    <Badge>{project?.status}</Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  {" "}
                  <div>
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p>{project?.client?.name || "N/A"}</p>
                    <p className="text-sm text-muted-foreground">
                      {project?.client?.email || "N/A"}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Start Date
                      </p>
                      <p className="text-sm font-medium">
                        {new Date(project?.startDate).toLocaleDateString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Due Date</p>
                      <p className="text-sm font-medium">
                        {new Date(project?.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg border p-3 text-center">
                      <p className="text-lg font-semibold">
                        {project?.projectTeams?.length || 0}
                      </p>
                      <p className="text-xs text-muted-foreground">Teams</p>
                    </div>

                    <div className="rounded-lg border p-3 text-center">
                      <p className="text-lg font-semibold">
                        {project?.sprints?.length || 0}
                      </p>
                      <p className="text-xs text-muted-foreground">Sprints</p>
                    </div>

                    <div className="rounded-lg border p-3 text-center">
                      <p className="text-lg font-semibold">
                        {project?.tasks?.length || 0}
                      </p>
                      <p className="text-xs text-muted-foreground">Tasks</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Link
                    href={`/dashboard/${organizationSlug}/projects/${project.id}/sprints`}
                    className="flex-1 cursor-pointer 
                    "
                  >
                    <Button variant="outline">
                      <ListChecks className="mr-2 h-4 w-4" /> View Sprints
                    </Button>
                  </Link>

                  {/* <Button className="flex-1 cursor-pointer">
                    <Users className="mr-2 h-4 w-4" />
                    Add Team
                  </Button> */}
                  <div className="flex-1 ">
                    {organizationRole &&
                      hasPageAccess(organizationRole, "ADD_TEAMS") && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full cursor-pointer "
                            >
                              <UserPlus className="mr-2 h-4 w-4" />
                              Add Teams
                            </Button>
                          </DialogTrigger>

                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Add Teams</DialogTitle>
                              <DialogDescription>
                                Select organization teams to add to this
                                project.
                                <span className=" text-primary">
                                  {project?.name}
                                </span>
                              </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-2">
                              {allTeams?.data?.map((team: Team) => (
                                <div
                                  key={team.id}
                                  className="flex items-center gap-3 rounded-lg border p-3"
                                >
                                  <Checkbox
                                    className="cursor-pointer"
                                    checked={selectTeam.includes(team.id)}
                                    onCheckedChange={() =>
                                      handleSelectTeam(team.id)
                                    }
                                    disabled={project.projectTeams.some(
                                      (projectTeam) =>
                                        projectTeam.teamId === team.id,
                                    )}
                                  />

                                  <div className="flex-1">
                                    <p className="">{team?.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                      {team?.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
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
                </CardFooter>
              </Card>
            ))}
            <div />
          </div>
        )}
      </div>
    </div>
  );
};
export default Projects;
