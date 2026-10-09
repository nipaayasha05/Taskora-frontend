"use client";
import GlobalLoading from "@/app/loading";
import SkeletonPage from "@/components/skeleton/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useCreateOrganizationForAdmin,
  useUpdateOrganizationRequest,
} from "@/hooks/organization.hooks";
import { Organization } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { Building2, CalendarDays, Pencil } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const OrganizationOverviewAdmin = () => {
  const { data, isLoading, isError } = useCreateOrganizationForAdmin();
  console.log(data, isLoading, isError);

  const { mutate: updateOrganizationRequest } = useUpdateOrganizationRequest();

  const [editingId, setIsEditingId] = useState<string | null>(null);

  const [selectedStatus, setSelectedStatus] = useState("");

  const queryClient = useQueryClient();

  if (isLoading) {
    return <SkeletonPage />;
  }

  if (isError) {
    return (
      <div className="p-6 text-sm text-destructive">
        Failed to load organizations.
      </div>
    );
  }

  const handleEdit = (organizationId: string, status: string) => {
    setIsEditingId(organizationId);
    setSelectedStatus(status);
  };

  const handleSave = () => {
    // console.log(editingId, selectedStatus, "save");

    if (!editingId) return;

    updateOrganizationRequest(
      {
        organizationId: editingId,
        status: selectedStatus as "PENDING" | "APPROVED" | "REJECTED",
      },
      {
        onSuccess: (res) => {
          console.log(res);
          toast.success("Organization status updated successfully");

          queryClient.invalidateQueries({
            queryKey: ["organizations"],
          });

          setIsEditingId(null);
        },
        onError: (error) => {
          console.log(error.message);
          toast.error(error.message);
        },
      },
    );
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Organizations</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Review organization requests and manage their status.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
        {data?.data?.map((organization: Organization) => {
          const isEditing = editingId === organization.id;

          return (
            <Card key={organization.id}>
              <CardHeader>
                <div
                  className="flex flex-col gap-3 min-[450px]:flex-row
                min-[450px]:items-start min-[450px]:justify-between"
                >
                  <div className="flex items-center gap-3">
                    {" "}
                    <div className="flex  size-11 items-center justify-center overflow-hidden rounded-lg bg-primary/10 text-primary">
                      {organization.logo ? (
                        <img
                          src={organization?.logo}
                          alt={organization.name}
                          className="w-12 h-12 rounded-full"
                        />
                      ) : (
                        <Building2 className="size-5" />
                      )}
                    </div>
                    <div className="">
                      <CardTitle className="truncate">
                        {organization.name}
                      </CardTitle>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {organization?.industry}
                      </p>
                    </div>
                  </div>

                  {isEditing ? (
                    <Select
                      value={selectedStatus}
                      onValueChange={setSelectedStatus}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PENDING">Pending</SelectItem>

                        <SelectItem value="APPROVED">Approved</SelectItem>

                        <SelectItem value="REJECTED">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <span
                      className={` rounded-full text-center px-2.5 py-1 text-xs font-medium ${
                        organization.status === "APPROVED"
                          ? "bg-green-100 text-green-700"
                          : organization.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {organization.status}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {organization?.description}
                </p>

                <div className="flex items-center gap-2 border-t pt-4 text-xs text-muted-foreground">
                  <CalendarDays className="size-4" />

                  <span>
                    Created{" "}
                    {new Date(organization?.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {isEditing ? (
                  <Button onClick={handleSave}>Save</Button>
                ) : (
                  <Button
                    variant="outline"
                    onClick={() =>
                      handleEdit(organization.id, organization.status)
                    }
                    className="w-full"
                  >
                    <Pencil className="size-4" />
                    Edit
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
      {data?.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <Building2 className="size-8 text-muted-foreground" />

            <h2 className="mt-3 font-semibold">No organizations found</h2>

            <p className="mt-1 text-sm text-muted-foreground">
              There are no organization requests yet.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default OrganizationOverviewAdmin;
