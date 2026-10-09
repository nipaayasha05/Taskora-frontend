"use client";
import GlobalLoading from "@/app/loading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetMe } from "@/hooks";
import {
  Building2,
  CalendarDays,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import React from "react";

const Profile = () => {
  const { data: me, isLoading } = useGetMe();
  console.log(me);

  const profile = me?.data;
  //   console.log(profile);

  if (isLoading) {
    return <GlobalLoading />;
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 p-4 md:p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Profile</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage and view your account information.
        </p>
      </div>

      <Card className="overflow-hidden  shadow-sm">
        <div className="h-28 bg-blue-500 -mt-6" />

        <CardContent className="-mt-12 relative pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              <div className="flex size-24 items-center justify-center rounded-2xl border-4 border-background bg-blue-100 text-3xl font-bold text-blue-700">
                {profile?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="pb-1">
                <h2 className="text-xl font-bold">{profile?.name}</h2>

                <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="size-4" />
                  {profile?.email}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:pb-1">
              <Badge
                variant={profile.status === "ACTIVE" ? "default" : "secondary"}
              >
                {profile?.status}
              </Badge>

              <Badge variant="outline">{profile?.systemRole}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <UserRound className="size-7 text-blue-600 bg-blue-100 rounded-full " />
              Basic Information
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="mt-1 ">{profile?.name}</p>
              </div>
              <div>
                {" "}
                <p className="text-sm text-muted-foreground">Email Address</p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  {" "}
                  <span className="break-all ">{profile?.email}</span>
                  {profile?.emailVerified && (
                    <Badge variant="secondary" className="gap-1 text-green-700">
                      <ShieldCheck className="size-3" />
                      Verified
                    </Badge>
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Account Status</p>
                <p className="mt-1 ">{profile?.status}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">System Role</p>
                <p className="mt-1 ">{profile?.systemRole}</p>
              </div>
            </div>
            <Separator className="my-5" />
            <div>
              <p className="text-sm text-muted-foreground">User ID</p>
              <p className="mt-1 break-all font-mono text-xs">{profile?.id}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Account Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center gap-3">
              {" "}
              <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                <Building2 className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Created Organizations
                </p>
                <p className="mt-1 text-2xl font-bold">
                  {profile?.createdOrganizations?.length || 0}
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex items-start gap-3">
              {" "}
              <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                <CalendarDays className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Member Since</p>
                <p className="mt-1 ">
                  {new Date(profile?.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
