"use client";
import GlobalLoading from "@/app/loading";
import SkeletonPage from "@/components/skeleton/skeleton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetUserOverview } from "@/hooks/user.hook";
import {
  Building2,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  FolderKanban,
  Layers3,
  Mail,
  Users,
  UsersRound,
} from "lucide-react";
import React from "react";

const UserDashboard = () => {
  const { data: userOverview, isPending } = useGetUserOverview();
  console.log("userOverview", userOverview);

  const data = userOverview?.data;

  const formatDateForInput = (date: string) => {
    return new Date(date).toISOString().split("T")[0];
  };

  if (isPending) {
    return <SkeletonPage />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          User Dashboard
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Overview of your organizations, projects, teams, sprints and payments.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
        <Card>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Organizations</p>

                <p className="mt-2 text-2xl font-semibold">
                  {data?.organizations?.length}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {data?.createdOrganizations?.length} created by you
                </p>
              </div>

              <Building2 className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        {/* projects */}
        <Card>
          <CardContent>
            {" "}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Projects</p>

                <p className="mt-2 text-2xl font-semibold">
                  {data?.projects?.length}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Your projects
                </p>
              </div>
              <FolderKanban className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        {/* sprints */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              {" "}
              <div>
                <p className="text-sm text-muted-foreground">Sprints</p>

                <p className="mt-2 text-2xl font-semibold">
                  {data?.sprints?.length}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Your sprints
                </p>
              </div>
              <Layers3 className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        {/* teams */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Teams</p>

                <p className="mt-2 text-2xl font-semibold">
                  {data?.teams?.length}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">Your teams</p>
              </div>

              <Users className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        {/* payments */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Payments</p>

                <p className="mt-2 text-2xl font-semibold">
                  {data?.payments?.length}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Your payments
                </p>
              </div>

              <CreditCard className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        {/* invitations */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Invitations</p>

                <p className="mt-2 text-2xl font-semibold">
                  {data?.invitations?.length}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Pending invitations
                </p>
              </div>

              <Mail className="h-5 w-5 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* organizations */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          {" "}
          <CardHeader>
            <CardTitle>My Organizations</CardTitle>

            <p className="text-sm text-muted-foreground">
              Organizations you are a member of
            </p>
          </CardHeader>
          <CardContent>
            {data?.organizations?.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No organizations found.
              </p>
            ) : (
              <div className="space-y-3">
                {data?.organizations.map((organization: any) => (
                  <div
                    key={organization.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <p>{organization?.organization?.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {organization?.organization?.industry || "No industry"}
                      </p>
                    </div>
                    <Badge variant="secondary">{organization.role}</Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* project */}
        <Card>
          <CardHeader>
            <CardTitle>My Projects</CardTitle>

            <p className="text-sm text-muted-foreground">
              Projects you are working with
            </p>
          </CardHeader>
          <CardContent>
            {data?.projects?.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No projects found.
              </p>
            ) : (
              <div className="space-y-3">
                {data?.projects.map((project: any) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      {" "}
                      <p className="truncate font-medium">{project?.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {project?.organization?.name || "No organization"}
                      </p>
                    </div>
                    <Badge>{project.status}</Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* sprints+payments */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          {" "}
          <CardHeader>
            <CardTitle>Recent Sprints</CardTitle>

            <p className="text-sm text-muted-foreground">Your latest sprints</p>
          </CardHeader>
          <CardContent>
            {data?.sprints?.length === 0 ? (
              <p className="text-sm text-muted-foreground">No sprints found.</p>
            ) : (
              <div className="space-y-4">
                {data?.sprints?.map((sprint: any) => (
                  <div key={sprint.id}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">{sprint?.name}</p>

                        {/* <p className="mt-1 text-xs text-muted-foreground">
                          {sprint?.sprint.project?.name || "No project"}
                        </p> */}
                      </div>

                      <Badge variant="secondary">{sprint?.status}</Badge>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />

                        {formatDateForInput(sprint?.startDate)}
                      </span>

                      <span className="flex items-center gap-1">
                        <CircleDollarSign className="h-3.5 w-3.5" />৳
                        {Number(sprint?.paymentAmount).toLocaleString()}
                      </span>
                    </div>

                    <Separator className="mt-4" />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>

            <p className="text-sm text-muted-foreground">
              Your recent payment history
            </p>
          </CardHeader>

          <CardContent>
            {data?.payments.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No payments found.
              </p>
            ) : (
              <div className="space-y-4">
                {data?.payments.map((payment: any) => (
                  <div key={payment.id}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">
                          {payment.sprint?.name || "Sprint payment"}
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          {payment.sprint?.project?.name || "No project"}
                        </p>
                      </div>

                      <Badge variant="outline">{payment.status}</Badge>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        {formatDateForInput(payment.paidAt)}
                      </span>

                      <span className="font-semibold">
                        ৳{Number(payment.amount).toLocaleString()}
                      </span>
                    </div>

                    <Separator className="mt-4" />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* teams */}
      <Card>
        <CardHeader>
          <CardTitle>My Teams</CardTitle>

          <p className="text-sm text-muted-foreground">
            Teams you are connected with
          </p>
        </CardHeader>
        <CardContent>
          {data?.teams?.length === 0 ? (
            <p className="text-sm text-muted-foreground">No teams found.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data?.teams.map((team: any) => (
                <div key={team.id} className="rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <UsersRound className="h-5 w-5 text-primary" />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate font-medium">{team?.name}</p>

                      <p className="truncate text-xs text-muted-foreground">
                        {team?.organization?.name}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 line-clamp-2 text-xs text-muted-foreground">
                    {team?.description || "No description"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        {" "}
        <CardHeader>
          <CardTitle>Organizations Created By You</CardTitle>

          <p className="text-sm text-muted-foreground">
            Organizations you have created
          </p>
        </CardHeader>
        <CardContent>
          {data?.createdOrganizations?.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              You have not created any organization.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data?.createdOrganizations.map((organization: any) => (
                <div key={organization.id} className="rounded-lg border p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="truncate font-medium">{organization?.name}</p>

                    <Badge
                      variant={
                        organization?.status === "APPROVED"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {organization?.status}
                    </Badge>
                  </div>

                  <p className="mt-2 text-xs text-muted-foreground">
                    {organization?.industry}
                  </p>

                  <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                    {organization?.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* bottom stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Organizations</p>

              <p className="mt-1 text-2xl font-semibold">
                {data?.organizations?.length}
              </p>
            </div>

            {/* <Building2 className="h-5 w-5 text-primary" /> */}
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Active Projects</p>

              <p className="mt-1 text-2xl font-semibold">
                {
                  data?.projects?.filter(
                    (project: any) => project?.status === "ACTIVE",
                  ).length
                }
              </p>
            </div>

            {/* <FolderKanban className="h-5 w-5 text-primary" /> */}
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Completed Sprints</p>

              <p className="mt-1 text-2xl font-semibold">
                {
                  data?.sprints?.filter(
                    (sprint: any) => sprint?.status === "COMPLETED",
                  ).length
                }
              </p>
            </div>

            {/* <CheckCircle2 className="h-5 w-5 text-primary" /> */}
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">
                Successful Payments
              </p>

              <p className="mt-1 text-2xl font-semibold">
                {
                  data?.payments?.filter(
                    (payment: any) => payment?.status === "SUCCESS",
                  ).length
                }
              </p>
            </div>

            {/* <CreditCard className="h-5 w-5 text-primary" /> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
