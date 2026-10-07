"use client";

import { useParams } from "next/navigation";
import { useGetAllProjects, useGetMe } from "@/hooks";
import { useGetAllSprints } from "@/hooks/sprints.hook";
import { useCurrentOrganization } from "@/utils/organizationId";
import GlobalLoading from "@/app/loading";
import { Pencil, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OrganizationMember, Sprint } from "@/types";
import { Button } from "@/components/ui/button";
import SprintEditForm from "@/components/form/SprintEditForm";
import SprintTeam from "./SprintTeam";
import SprintTeamProject from "./SprintTeam";
import { hasPageAccess } from "@/permissions/has-permission";
import SprintForm from "@/components/form/SprintForm";

const Sprints = () => {
  const { organizationId } = useCurrentOrganization();

  const params = useParams();

  const projectId = params.project as string;
  const { data: me, isLoading: meLoading, isError: meIsError } = useGetMe();
  const currentOrganization = me?.data?.organizationMembers?.find(
    (member: OrganizationMember) => member.organizationId === organizationId,
  );

  const organizationRole = currentOrganization?.role;

  const { data, isLoading, isError } = useGetAllSprints(
    organizationId,
    projectId,
  );
  console.log("sprints", data);

  if (isLoading) {
    return <GlobalLoading />;
  }

  return (
    <div>
      {hasPageAccess(organizationRole, "CREATE_SPRINT") && (
        <div className="flex items-center justify-end">
          <SprintForm />
        </div>
      )}
      <div>
        {" "}
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
            {data?.data?.map((sprint: Sprint) => (
              <Card key={sprint.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle>{sprint?.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {sprint?.goal}
                      </CardDescription>
                    </div>

                    <Badge>{sprint?.status}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Start Date
                      </p>
                      <p className="font-medium">
                        {new Date(sprint?.startDate).toLocaleDateString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">End Date</p>
                      <p className="font-medium">
                        {new Date(sprint?.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Tasks</p>
                      <p className="text-lg font-semibold">
                        {sprint?.tasks?.length}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Teams</p>
                      <p className="text-lg font-semibold">
                        {sprint?.sprintTeams?.length}
                      </p>
                      <p className="flex flex-wrap items-center gap-2">
                        {sprint?.sprintTeams?.map((sprintTeam: any) => (
                          <span
                            key={sprintTeam.id}
                            className="flex items-center gap-1"
                          >
                            <Users className="size-4 text-muted-foreground" />
                            {sprintTeam?.team?.name}
                          </span>
                        ))}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Payment</p>

                      <p className="text-lg font-semibold">
                        ৳{sprint?.paymentAmount}
                      </p>

                      {sprint?.payments?.some(
                        (payment) => payment.status === "SUCCESS",
                      ) ? (
                        <Badge className="mt-1">Paid</Badge>
                      ) : (
                        <Badge variant="secondary" className="mt-1">
                          Unpaid
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  {organizationRole &&
                    hasPageAccess(organizationRole, "UPDATE_SPRINT") && (
                      <div className="flex items-center justify-end">
                        <SprintTeamProject
                          projectId={projectId}
                          sprint={sprint}
                        />
                        <SprintEditForm sprint={sprint} />
                      </div>
                    )}
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

export default Sprints;
