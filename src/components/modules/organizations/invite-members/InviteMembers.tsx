"use client";
import { Input } from "@/components/ui/input";
import { useGetMe, useGetUsers } from "@/hooks";
import useDebounce from "@/hooks/debounce.hook";
import {
  Organization,
  OrganizationJoinRequest,
  OrganizationMember,
  User,
} from "@/types";
import React, { useState } from "react";
import InviteMembersInput from "./InviteMembersInput";
import { Button } from "@/components/ui/button";
import {
  useCreateOrganizationJoinRequest,
  useGetOrganizationJoinRequest,
} from "@/hooks/organization.hooks";
import { useParams } from "next/navigation";
import { toast } from "sonner";

const InviteMembers = () => {
  const [selectedUsers, setSelectedUsers] = useState<User | null>(null);

  const { data: me } = useGetMe();
  console.log("me", me);
  const params = useParams();
  // const organizationId = params.organizationId as string;

  const { mutate: createOrganizationJoinRequest } =
    useCreateOrganizationJoinRequest();

  const organizationId = me?.data?.organizationMembers?.[0]?.organizationId;

  const { data, isLoading, isError } =
    useGetOrganizationJoinRequest(organizationId);
  console.log("organization-join-request", data);

  const handleInvite = () => {
    if (!selectedUsers || !organizationId) {
      return;
    }

    createOrganizationJoinRequest(
      {
        organizationId: organizationId,
        invitedToId: selectedUsers?.id,
      },
      {
        onSuccess: (res) => {
          console.log(res);
          toast.success("User invited successfully");

          // queryClient.invalidateQueries({
          //   queryKey: ["organizations"],
          // });

          setSelectedUsers(null);
        },
        onError: (error) => {
          console.log(error.message);
          toast.error(error.message);
        },
      },
    );
  };

  const handleSelectedUser = (user: User) => {
    setSelectedUsers(user);
  };

  return (
    <div className=" space-y-6">
      <div className="rounded-xl max-w-md border bg-card p-5">
        <div className="mb-4">
          <h2 className="font-semibold">Invite Member</h2>
          <p className="text-sm text-muted-foreground">
            Search for a user and send an invitation.
          </p>
        </div>

        <InviteMembersInput onSelectUser={handleSelectedUser} />
        <div className="mt-4 rounded-md border p-3">
          <p className="font-medium">
            {selectedUsers?.name || "No user selected"}
          </p>

          <p className="text-sm text-muted-foreground">
            {selectedUsers?.email || "Select a user to invite"}
          </p>

          <Button
            className="mt-3 cursor-pointer"
            disabled={!selectedUsers}
            onClick={handleInvite}
          >
            Invite
          </Button>
        </div>
      </div>

      <div>
        <div className="mb-3 px-1">
          <h2 className="font-semibold">Pending Invitations</h2>
          <p className="text-sm  text-muted-foreground">
            Users who have been invited to this organization.
          </p>
        </div>
        {data?.data?.length ? (
          <div className="grid gap-6  md:grid-cols-2 xl:grid-cols-3">
            {data.data.map((request: OrganizationJoinRequest) => (
              <div key={request.id} className="rounded-xl border bg-card p-5">
                <h3 className="font-semibold">{request.invitedTo.name}</h3>

                <p className="text-sm text-muted-foreground">
                  {request.invitedTo.email}
                </p>

                <p className="mt-2 text-sm">Role: {request.role}</p>

                <p className="text-sm text-muted-foreground">
                  Status: {request.status}
                </p>
                <p className="text-sm text-muted-foreground">
                  {new Date(request.createdAt).toLocaleDateString()}{" "}
                  {new Date(request.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            No pending invitations.
          </p>
        )}
      </div>
    </div>
  );
};

export default InviteMembers;
