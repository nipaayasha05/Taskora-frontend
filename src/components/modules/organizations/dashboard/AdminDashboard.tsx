"use client";
import GlobalLoading from "@/app/loading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAdminOverview } from "@/hooks/user.hook";
import {
  Building2,
  CheckCircle2,
  Clock3,
  CreditCard,
  FolderKanban,
  Layers3,
  Users,
  UsersRound,
  XCircle,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import React from "react";
import SkeletonPage from "@/components/skeleton/skeleton";

const AdminDashboard = () => {
  const { data: adminOverview, isPending } = useGetAdminOverview();
  console.log("adminOverview", adminOverview);

  const data = adminOverview?.data;

  if (isPending) {
    return <SkeletonPage />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Overview of your platform statistics and recent activities.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {/* users */}
        <Card>
          {" "}
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>

                <p className="mt-2 text-2xl font-bold">
                  {data?.statistics?.users?.total}
                </p>
              </div>

              <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                <Users className="size-5" />
              </div>
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active</span>
                <span className="font-medium">
                  {data?.statistics?.users?.active}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Inactive</span>
                <span className="font-medium">
                  {data?.statistics?.users?.inactive}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Banned</span>
                <span className="font-medium">
                  {data?.statistics?.users?.banned}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* organizations */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Organizations</p>

                <p className="mt-2 text-2xl font-bold">
                  {data?.statistics?.organizations?.total}
                </p>
              </div>

              <div className="rounded-lg bg-green-100 p-3 text-green-600">
                <Building2 className="size-5" />
              </div>
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Approved</span>
                <span className="font-medium">
                  {data?.statistics?.organizations?.approved}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Pending</span>
                <span className="font-medium">
                  {data?.statistics?.organizations?.pending}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Rejected</span>
                <span className="font-medium">
                  {data?.statistics?.organizations?.rejected}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* projects */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Projects</p>

                <p className="mt-2 text-2xl font-bold">
                  {data?.statistics?.projects?.total}
                </p>
              </div>

              <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
                <FolderKanban className="size-5" />
              </div>
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active</span>
                <span className="font-medium">
                  {data?.statistics?.projects?.active}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Completed</span>
                <span className="font-medium">
                  {data?.statistics?.projects?.completed}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Cancelled</span>
                <span className="font-medium">
                  {data?.statistics?.projects?.cancelled}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sprints */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Sprints</p>

                <p className="mt-2 text-2xl font-bold">
                  {data?.statistics?.sprints?.total}
                </p>
              </div>

              <div className="rounded-lg bg-orange-100 p-3 text-orange-600">
                <Layers3 className="size-5" />
              </div>
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active</span>
                <span className="font-medium">
                  {data?.statistics.sprints.active}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Completed</span>
                <span className="font-medium">
                  {data?.statistics?.sprints?.completed}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Planned</span>
                <span className="font-medium">
                  {data?.statistics?.sprints?.planned}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Teams */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Teams</p>

                <p className="mt-2 text-2xl font-bold">
                  {data?.statistics?.teams?.total}
                </p>
              </div>

              <div className="rounded-lg bg-pink-100 p-3 text-pink-600">
                <UsersRound className="size-5" />
              </div>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              Total teams on the platform
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {" "}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <CreditCard className="size-5 text-blue-600" />
              Payments
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">
              {data?.statistics?.payments?.total}
            </p>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-lg border p-3">
                <p className="text-xs text-muted-foreground">Successful</p>
                <p className="mt-1 font-semibold">
                  {data?.statistics?.payments?.successful}
                </p>
              </div>

              <div className="rounded-lg border p-3">
                <p className="text-xs text-muted-foreground">Pending</p>
                <p className="mt-1 font-semibold">
                  {data?.statistics?.payments?.pending}
                </p>
              </div>

              <div className="rounded-lg border p-3">
                <p className="text-xs text-muted-foreground">Failed</p>
                <p className="mt-1 font-semibold">
                  {data?.statistics?.payments?.failed}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Pending Organizations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Clock3 className="size-5 text-orange-500" />
              Pending Organizations
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-bold">
              {data?.pendingOrganizationsCount}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Organizations waiting for admin approval.
            </p>
          </CardContent>
        </Card>
        {/* Platform Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Platform Overview</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Active Users
              </span>

              <span className="font-semibold">
                {data?.statistics?.users?.active}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Active Projects
              </span>

              <span className="font-semibold">
                {data?.statistics?.projects?.active}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Active Sprints
              </span>

              <span className="font-semibold">
                {data?.statistics?.sprints.active}
              </span>
            </div>
          </CardContent>
        </Card>
        {/* Recent Organizations */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Organizations</CardTitle>

              <span className="text-sm text-blue-600">
                {data.recentOrganizations?.length ?? 0} organizations
              </span>
            </div>
          </CardHeader>

          <CardContent>
            {data.recentOrganizations?.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No recent organizations found.
              </div>
            ) : (
              <div className="space-y-3">
                {data.recentOrganizations.map((organization: any) => (
                  <div
                    key={organization.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                        <Building2 className="size-5" />
                      </div>

                      <div>
                        <p className="font-medium">{organization?.name}</p>

                        <p className="text-xs text-muted-foreground">
                          {organization?.industry}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <Badge
                        variant={
                          organization.status === "APPROVED"
                            ? "default"
                            : organization.status === "PENDING"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {organization?.status}
                      </Badge>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {new Date(organization?.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        {/* Recent Users */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Users</CardTitle>

              <span className="text-sm text-blue-600">
                {data?.recentUsers?.length ?? 0} users
              </span>
            </div>
          </CardHeader>

          <CardContent>
            {data?.recentUsers?.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No recent users found.
              </div>
            ) : (
              <div className="space-y-3">
                {data?.recentUsers.map((user: any) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                        <Users className="size-5" />
                      </div>

                      <div>
                        <p className="font-medium">{user?.name}</p>

                        <p className="text-xs text-muted-foreground">
                          {user?.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{user?.systemRole}</Badge>

                      <Badge
                        variant={
                          user?.status === "ACTIVE"
                            ? "default"
                            : user?.status === "BANNED"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {user?.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        {/* projects status chart */}
        <Card>
          <CardHeader>
            <CardTitle>Project Status Overview</CardTitle>
            <p className="text-sm text-muted-foreground">
              Overview of all projects by status
            </p>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    {
                      status: "Active",
                      projects: data?.statistics?.projects?.active ?? 0,
                    },
                    {
                      status: "Completed",
                      projects: data?.statistics?.projects?.completed ?? 0,
                    },
                    {
                      status: "On Hold",
                      projects: data?.statistics?.projects?.onHold ?? 0,
                    },
                    {
                      status: "Cancelled",
                      projects: data?.statistics?.projects?.cancelled ?? 0,
                    },
                  ]}
                  margin={{ top: 10, right: 10, left: -15, bottom: -10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="status"
                    tickLine={false}
                    axisLine={false}
                    fontSize={12}
                  />
                  <YAxis
                    allowDecimals={false}
                    tickLine={false}
                    axisLine={false}
                    fontSize={12}
                  />

                  <Tooltip cursor={{ fill: "var(--muted)", opacity: 0.3 }} />
                  <Bar
                    dataKey="projects"
                    name="Projects"
                    fill="#3b82f6"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={55}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        {/* Bottom Stats */}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-7 text-green-600" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Approved Organizations
                </p>

                <p className="text-xl font-bold">
                  {data?.statistics?.organizations?.approved}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <Clock3 className="size-7 text-orange-500" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Pending Organizations
                </p>

                <p className="text-xl font-bold">
                  {data?.statistics?.organizations?.pending}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-7 text-blue-600" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Successful Payments
                </p>

                <p className="text-xl font-bold">
                  {data?.statistics?.payments?.successful}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <XCircle className="size-7 text-red-500" />

              <div>
                <p className="text-sm text-muted-foreground">Failed Payments</p>

                <p className="text-xl font-bold">
                  {data?.statistics?.payments?.failed}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
