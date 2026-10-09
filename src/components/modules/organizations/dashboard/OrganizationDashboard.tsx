"use client";
import GlobalLoading from "@/app/loading";
import SkeletonPage from "@/components/skeleton/skeleton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetOrganizationOverview } from "@/hooks/organization.hooks";
import { Project, Sprint } from "@/types";
import { useCurrentOrganization } from "@/utils/organizationId";
import {
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  CreditCard,
  FolderKanban,
  Layers3,
  ListTodo,
  Users,
  UsersRound,
} from "lucide-react";
import React from "react";

const OrganizationDashboard = () => {
  const { organizationId } = useCurrentOrganization();

  const { data: organizationOverview, isPending } =
    useGetOrganizationOverview(organizationId);

  console.log("organizationOverview", organizationOverview);
  if (isPending) {
    return <SkeletonPage />;
  }

  const summary = organizationOverview?.data?.summary;

  const recent = organizationOverview?.data?.recent;

  const formatDateForInput = (date: string) => {
    return new Date(date).toISOString().split("T")[0];
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Organization Overview
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Monitor your organization&apos;s projects, members, sprints and
          payments.
        </p>
      </div>

      {/* summary */}
      <div className="grid grid-cols- gap-5 lg:grid-cols-3 2xl:grid-cols-4">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Members</p>

                <p className="mt-2 text-2xl font-semibold">
                  {summary?.members}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {summary?.teams} teams
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                <Users className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Tasks</p>

                <p className="mt-2 text-2xl font-semibold">{summary?.tasks}</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Total tasks
                </p>
              </div>

              <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                <ListTodo className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Payments</p>

                <p className="mt-2 text-2xl font-semibold">
                  {summary?.payments?.successful}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {summary?.payments?.total} total payments
                </p>
              </div>

              <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                <CreditCard className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Join Requests</p>

                <p className="mt-2 text-2xl font-semibold">
                  {summary?.pendingJoinRequests}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Pending requests
                </p>
              </div>

              <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                <Clock3 className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* projects*/}
      <div className="grid grid-cols- gap-5 lg:grid-cols-3 2xl:grid-cols-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>

            <p className="text-sm text-muted-foreground">
              Latest projects in your organization
            </p>
          </CardHeader>

          <CardContent>
            {recent?.projects?.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No projects found.
              </p>
            ) : (
              <div className="space-y-3">
                {recent?.projects?.map((project: Project) => (
                  <div
                    key={project?.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <p className="">{project?.name}</p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Client: {project?.client?.name || "N/A"}
                      </p>

                      <p className="mt-1 truncate text-xs text-muted-foreground">
                        {project?.client?.email || "N/A"}
                      </p>
                    </div>
                    <Badge>{project?.status}</Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* projects status  */}

        <Card>
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
            <p className="text-sm text-muted-foreground">
              Current project overview
            </p>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <FolderKanban className="h-4 w-4" />
                Active Projects
              </span>
              <span className="font-semibold">{summary?.activeProjects}</span>
            </div>
            <Separator />

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4" />
                Completed Projects
              </span>

              <span className="font-semibold">
                {summary?.completedProjects}
              </span>
            </div>
            <Separator />

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Layers3 className="h-4 w-4" />
                Total Projects
              </span>

              <span className="font-semibold">{summary?.projects}</span>
            </div>
            <Separator />

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4" />
                Pending Requests
              </span>

              <span className="font-semibold">
                {summary?.pendingJoinRequests}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* sprints */}

      <div className="grid gap-6 lg:grid-cols-2 ">
        <Card>
          <CardHeader>
            <CardTitle>Recent Sprints</CardTitle>

            <p className="text-sm text-muted-foreground">
              Latest sprint activities
            </p>
          </CardHeader>
          <CardContent>
            {recent?.sprints?.length === 0 ? (
              <p className="text-sm text-muted-foreground">No sprints found.</p>
            ) : (
              <div className="space-y-4">
                {recent?.sprints.map((sprint: any) => (
                  <div key={sprint?.id}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">{sprint?.name}</p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          {sprint?.project?.name || "No project"}
                        </p>
                      </div>
                      <Badge variant="secondary">{sprint?.status}</Badge>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                      {" "}
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

        {/* payments */}
        <Card>
          {" "}
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>

            <p className="text-sm text-muted-foreground">
              Latest successful payments
            </p>
          </CardHeader>
          <CardContent>
            {recent?.payments?.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No payments found.
              </p>
            ) : (
              <div className="space-y-4">
                {recent?.payments?.map((payment: any) => (
                  <div key={payment.id}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">
                          {payment?.sprint?.name || "Sprint payment"}
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          {payment?.client?.name || "Unknown client"}
                        </p>
                      </div>
                      <Badge variant="outline">{payment?.status}</Badge>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs">
                      {" "}
                      <span className="text-muted-foreground">
                        {formatDateForInput(payment?.paidAt)}
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

      {/* recent members */}
      <Card>
        {" "}
        <CardHeader>
          <CardTitle>Recent Members</CardTitle>

          <p className="text-sm text-muted-foreground">
            Recently joined organization members
          </p>
        </CardHeader>
        <CardContent>
          {recent?.members?.length === 0 ? (
            <p className="text-sm text-muted-foreground">No members found.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {recent?.members.map((member: any) => (
                <div key={member.id} className="rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-medium text-primary">
                      {member?.user?.name}
                    </div>
                    <div className="">
                      <p className=" font-medium">
                        {member?.user?.name || "Unknown"}
                      </p>

                      <p className=" text-xs text-muted-foreground">
                        {member?.user?.email}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <Badge variant="secondary">{member?.role}</Badge>

                    <span className="text-xs text-muted-foreground">
                      {formatDateForInput(member?.createdAt)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* statistics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Teams</p>

              <p className="mt-1 text-2xl font-semibold">{summary?.teams}</p>
            </div>

            {/* <UsersRound className="h-7 w-7 text-primary bg-primary/10 rounded-full" /> */}
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Active Sprints</p>

              <p className="mt-1 text-2xl font-semibold">
                {summary?.activeSprints}
              </p>
            </div>

            {/* <Layers3 className="h-5 w-5 text-primary" /> */}
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">
                Successful Payments
              </p>

              <p className="mt-1 text-2xl font-semibold">
                {summary?.payments?.successful}
              </p>
            </div>

            {/* <CreditCard className="h-5 w-5 text-primary" /> */}
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <p className="text-sm text-muted-foreground">Pending Payments</p>

              <p className="mt-1 text-2xl font-semibold">
                {summary?.payments?.pending}
              </p>
            </div>

            {/* <Clock3 className="h-5 w-5 text-primary" /> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrganizationDashboard;
