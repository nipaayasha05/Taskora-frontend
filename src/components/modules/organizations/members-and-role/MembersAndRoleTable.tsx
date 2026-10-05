"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUpdateOrganizationMemberRole } from "@/hooks/organization.hooks";
import { OrganizationMember } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { Crown, MoreHorizontal, User } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

type MembersAndRoleTableProps = {
  members: OrganizationMember[];
  isLoading: boolean;
  isError: boolean;
};

const MembersAndRoleTable = ({
  members,
  isLoading,
  isError,
}: MembersAndRoleTableProps) => {
  console.log(members, "organization members");

  const [selectedMember, setSelectedMember] =
    React.useState<OrganizationMember | null>(null);

  const [selectedRole, setSelectedRole] = React.useState<
    "MANAGER" | "TEAM_MEMBER" | undefined
  >(undefined);

  const { mutate: updateOrganizationMemberRole } =
    useUpdateOrganizationMemberRole();

  const queryClient = useQueryClient();

  const handleChangeRole = (member: OrganizationMember) => {
    if (!selectedRole) {
      return;
    }

    updateOrganizationMemberRole(
      {
        organizationId: member.organizationId,
        memberId: member.id,
        role: selectedRole,
      },
      {
        onSuccess: (res) => {
          console.log(res);
          toast.success("Role updated successfully");

          queryClient.invalidateQueries({
            queryKey: ["organizationsRole"],
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
    <div className="w-full max-w-5xl rounded-lg border">
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[800px]">
          <TableHeader>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {members?.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                      <User className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="font-medium">{member?.user?.name}</p>

                      <p className="text-sm text-muted-foreground">
                        {member?.user?.email}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <Badge variant="outline">
                    {member?.role?.replace("_", " ")}
                  </Badge>
                </TableCell>

                <TableCell>
                  <Badge
                    variant={
                      member?.user?.status === "ACTIVE"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {member?.user?.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  {member?.role === "OWNER" ? (
                    <Badge variant="secondary" className="gap-1.5 px-2.5 py-3 ">
                      <Crown className="h-3.5 w-3.5" />
                      Organization Owner
                    </Badge>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          Change Role
                        </Button>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Change Member Role</DialogTitle>
                          <DialogDescription>
                            Choose a new role for name:
                            {member?.user?.name || ""}. email:{" "}
                            {member?.user?.email || ""}.
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-2">
                          <Label>Role</Label>

                          <Select
                            value={selectedRole}
                            onValueChange={(value) =>
                              setSelectedRole(
                                value as "MANAGER" | "TEAM_MEMBER",
                              )
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Role" />
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="MANAGER">Manager</SelectItem>
                              <SelectItem value="TEAM_MEMBER">
                                Team Member
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <DialogFooter className="border-t pt-4">
                          <DialogClose asChild>
                            <Button
                              className="cursor-pointer"
                              variant="outline"
                            >
                              Cancel
                            </Button>
                          </DialogClose>

                          <Button
                            disabled={!selectedRole}
                            onClick={() => handleChangeRole(member)}
                            className="cursor-pointer"
                          >
                            Save Changes
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                </TableCell>

                <TableCell className="text-muted-foreground">
                  {new Date(member.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MembersAndRoleTable;
