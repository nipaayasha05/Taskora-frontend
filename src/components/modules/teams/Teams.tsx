"use client";
import GlobalLoading from "@/app/loading";
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
import { DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { useAddTeamMember, useGetAllTeams, useGetMe } from "@/hooks";
import { useGetAllOrganizationMembers } from "@/hooks/organization.hooks";
import { AddTeamMemberPayload, OrganizationMember, Team } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { UserPlus, Users } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const Teams = () => {
  const { data: me } = useGetMe();
  console.log("me", me);
  const params = useParams();
  console.log("params", params);

  const organizationSlug = params.organization as string;

  const organizationId = me?.data?.organizationMembers?.find(
    (member: OrganizationMember) =>
      member.organization?.name.toLowerCase().replace(/\s+/g, "-") ===
      organizationSlug,
  )?.organizationId;
  const { data, isLoading, isError } = useGetAllTeams(organizationId);

  const { mutate: addTeamMember } = useAddTeamMember();

  const queryClient = useQueryClient();

  const {
    data: membersData,
    isLoading: membersLoading,
    isError: membersIsError,
  } = useGetAllOrganizationMembers(organizationId);

  const [selectMember, setSelectMember] = useState<string[]>([]);

  console.log("membersData", membersData);

  console.log("data", data);

  if (isLoading) {
    return <GlobalLoading />;
  }

  const handleSelectMember = (userId: string) => {
    setSelectMember((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId],
    );
  };

  const handleAddMember = (teamId: string) => {
    const payload: AddTeamMemberPayload = {
      organizationId: organizationId!,
      teamId,
      userIds: selectMember,
    };

    addTeamMember(payload, {
      onSuccess: (res) => {
        console.log(res);
        toast.success("Member added to team successfully");

        queryClient.invalidateQueries({
          queryKey: ["teams", organizationId!],
        });

        setSelectMember([]);
      },
      onError: (error) => {
        console.log(error.message);
        toast.error(error.message);
      },
    });
  };

  return (
    <div>
      {data?.data?.length === 0 ? (
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-dashed bg-muted/20 px-6 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Users className="h-6 w-6 text-primary" />
          </div>

          <h3 className=" font-semibold">No teams yet</h3>

          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            You haven't created any teams yet. Create a team to start organizing
            your members and projects.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
          {data?.data?.map((team: Team) => (
            <Card key={team.id}>
              <CardHeader>
                <CardTitle>{team?.name}</CardTitle>
                <CardDescription>{team?.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Members</span>

                  <span className="text-sm font-medium">
                    {team?.members?.length ?? 0}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full cursor-pointer">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Add Member
                    </Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Members</DialogTitle>
                      <DialogDescription>
                        Select organization members to add to this team.
                        <span className=" text-primary">{team.name}</span>
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-2">
                      {membersData?.data?.map((member: OrganizationMember) => (
                        <div
                          key={member.userId}
                          className="flex items-center gap-3 rounded-lg border p-3"
                        >
                          <Checkbox
                            className="cursor-pointer"
                            checked={selectMember.includes(member.userId)}
                            onCheckedChange={() =>
                              handleSelectMember(member.userId)
                            }
                            disabled={team.members?.some(
                              (teamMember) =>
                                teamMember.userId === member.userId,
                            )}
                          />

                          <div className="flex-1">
                            <p className="">{member?.user?.name}</p>
                            <p className=" text-sm text-muted-foreground">
                              {member?.user?.email}
                            </p>
                          </div>

                          <Badge variant="secondary">{member?.role}</Badge>
                        </div>
                      ))}
                    </div>

                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>

                      <Button
                        disabled={selectMember.length === 0}
                        onClick={() => handleAddMember(team.id)}
                        className="cursor-pointer"
                      >
                        {isLoading ? (
                          <>
                            <Spinner /> Adding...
                          </>
                        ) : (
                          <>Add Members</>
                        )}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Teams;
