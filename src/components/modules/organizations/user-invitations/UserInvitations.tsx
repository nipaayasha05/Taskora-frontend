"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetMe } from "@/hooks";
import {
  useGetUserOrganizationJoinRequest,
  useUpdateOrganizationJoinRequest,
} from "@/hooks/organization.hooks";
import { OrganizationJoinRequest } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { MailOpen } from "lucide-react";

import Image from "next/image";
import React from "react";
import { toast } from "sonner";

const UserInvitations = () => {
  const { data: me } = useGetMe();

  console.log("me", me);

  const organizationId = me?.data?.invitedTo ?? [];

  console.log("organizationId", organizationId);

  const { data: joinRequest, isPending } =
    useGetUserOrganizationJoinRequest(organizationId);

  const { mutate: updateOrganizationJoinRequest } =
    useUpdateOrganizationJoinRequest();

  console.log("joinRequest", joinRequest);

  const queryClient = useQueryClient();

  const handleAccept = (organizationId: string) => {
    // console.log(editingId, selectedStatus, "save");

    updateOrganizationJoinRequest(
      {
        organizationId,
        status: "APPROVED",
        invitedToId: me?.data?.id,
      },
      {
        onSuccess: (res) => {
          console.log(res);
          toast.success("Organization status updated successfully");

          queryClient.invalidateQueries({
            queryKey: ["userOrganizations"],
          });
        },
        onError: (error) => {
          console.log(error.message);
          toast.error(error.message);
        },
      },
    );
  };

  const handleReject = (organizationId: string) => {
    // console.log(editingId, selectedStatus, "save");

    updateOrganizationJoinRequest(
      {
        organizationId,
        status: "REJECTED",
        invitedToId: me?.data?.id,
      },
      {
        onSuccess: (res) => {
          console.log(res);
          toast.success("Organization status rejectedsuccessfully");

          queryClient.invalidateQueries({
            queryKey: ["userOrganizations"],
          });
        },
        onError: (error) => {
          console.log(error.message);
          toast.error(error.message);
        },
      },
    );
  };

  return (
    <>
      {joinRequest?.data?.length ? (
        <div className="grid gap-6  md:grid-cols-2 xl:grid-cols-3">
          {joinRequest?.data?.map((request: OrganizationJoinRequest) => (
            <Card key={request.id} className="overflow-hidden">
              <CardHeader>
                <div>
                  <div className="relative h-14 w-14 overflow-hidden rounded-lg border bg-muted">
                    {request.organization.logo ? (
                      <Image
                        src={request.organization.logo}
                        alt={request.organization.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-lg font-semibold">
                        {request.organization.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="">
                    <CardTitle className="">
                      {request.organization.name}
                    </CardTitle>

                    <CardDescription>
                      {request.organization.industry}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground line-clamp-2">
                  {request.organization.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Invited as</p>
                    <Badge variant="outline">{request?.role}</Badge>
                  </div>

                  <div className="">
                    <p className="text-xs text-muted-foreground">Status</p>
                    <Badge variant="outline">{request?.status}</Badge>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-xs text-muted-foreground">Invited by</p>

                  <p className="text-sm font-medium">
                    {request.invitedBy.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(request.createdAt).toLocaleDateString()}{" "}
                    {new Date(request.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    className="flex-1 cursor-pointer"
                    onClick={() => handleAccept(request.organization.id)}
                    disabled={isPending}
                  >
                    Accept
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => handleReject(request.organization.id)}
                    className="flex-1 cursor-pointer"
                  >
                    Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="flex min-h-[300px] items-center justify-center">
          <CardContent className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
              <MailOpen className="h-7 w-7 text-muted-foreground" />
            </div>

            <h3 className="text-lg font-semibold">
              No organization invitations
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              You don&apos;t have any pending organization invitations right
              now.
            </p>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default UserInvitations;
