"use client";
import { useForm } from "@tanstack/react-form";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
  CalendarDays,
  CircleDollarSign,
  CircleDot,
  FileText,
  Goal,
  Pencil,
  Plus,
  Tag,
  User,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import InviteMembersInput from "../modules/organizations/invite-members/InviteMembersInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateSprint } from "@/hooks/sprints.hook";
import { Sprint, SprintStatus } from "@/types";
import { toast } from "sonner";
import { useCurrentOrganization } from "@/utils/organizationId";
import { Spinner } from "../ui/spinner";

type SprintEditFormProps = {
  sprint: Sprint;
};

const SprintEditForm = ({ sprint }: SprintEditFormProps) => {
  const { mutate: updateSprint, isPending } = useUpdateSprint();
  const queryClient = useQueryClient();

  const formatDateForInput = (date: string) => {
    return new Date(date).toISOString().split("T")[0];
  };

  const { organizationId } = useCurrentOrganization();

  const form = useForm({
    defaultValues: {
      name: sprint?.name,
      goal: sprint?.goal,
      startDate: formatDateForInput(sprint.startDate),
      endDate: formatDateForInput(sprint.endDate),
      status: sprint?.status,
      paymentAmount: sprint?.paymentAmount,
    },

    onSubmit: ({ value }) => {
      const updateSprintData = {
        name: value.name,
        goal: value.goal,
        startDate: new Date(value.startDate).toISOString(),
        endDate: new Date(value.endDate).toISOString(),
        paymentAmount: value.paymentAmount,
        organizationId: organizationId,
        projectId: sprint.projectId,
        sprintId: sprint.id,
      };

      updateSprint(updateSprintData, {
        onSuccess: () => {
          toast.success("Sprint update request successfully");
          queryClient.invalidateQueries({
            queryKey: ["sprints", organizationId],
          });
        },

        onError: () => {
          toast.error("Sprint update request failed");
        },
      });
    },
  });

  return (
    <div className="max-w-5xl  p-4">
      <Dialog>
        <DialogTrigger asChild>
          {sprint.status === "COMPLETED" ? (
            <Button
              variant="outline"
              disabled={true}
              size="sm"
              className="cursor-pointer"
            >
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="cursor-pointer">
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>
          )}
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
            <DialogDescription>
              Create a new project for your organization.
            </DialogDescription>
          </DialogHeader>

          <Card className="w-full shadow-sm ">
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
              >
                <FieldGroup className="gap-3">
                  <form.Field name="name">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid} className="gap-2">
                          <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                          <div className="relative">
                            <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id={field.name}
                              name={field.name}
                              placeholder="Enter sprint name"
                              type="text"
                              value={field.state.value}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              className="h-10 bg-muted pl-10
                        "
                            />
                          </div>
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  </form.Field>

                  <form.Field name="goal">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid} className="gap-2">
                          <FieldLabel htmlFor={field.name}>Goal</FieldLabel>
                          <div className="relative">
                            <Goal className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id={field.name}
                              name={field.name}
                              placeholder="Enter the sprint goal"
                              type="text"
                              value={field.state.value}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              className="h-10 bg-muted pl-10
                        "
                            />
                          </div>
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  </form.Field>
                  <form.Field name="startDate">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid} className="gap-2">
                          <FieldLabel htmlFor={field.name}>
                            Start Date
                          </FieldLabel>
                          <div className="relative">
                            <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id={field.name}
                              name={field.name}
                              placeholder="Enter your organization description"
                              type="date"
                              value={field.state.value}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              className="h-10 bg-muted pl-10
                        "
                            />
                          </div>
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  </form.Field>
                  <form.Field name="endDate">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid} className="gap-2">
                          <FieldLabel htmlFor={field.name}>End Date</FieldLabel>
                          <div className="relative">
                            <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id={field.name}
                              name={field.name}
                              placeholder="Enter your organization description"
                              type="date"
                              value={field.state.value}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              className="h-10 bg-muted pl-10
                        "
                            />
                          </div>
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  </form.Field>
                  <form.Field name="status">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid} className="gap-2">
                          <FieldLabel htmlFor={field.name}>Status</FieldLabel>
                          <div className="relative">
                            <CircleDot className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <div>
                              <Select
                                value={field.state.value}
                                onValueChange={(value) =>
                                  field.handleChange(value as SprintStatus)
                                }
                              >
                                <SelectTrigger className="h-10 bg-muted pl-10">
                                  <SelectValue placeholder="Select status" />
                                </SelectTrigger>

                                <SelectContent>
                                  <SelectItem value="PLANNED">
                                    PLANNED
                                  </SelectItem>
                                  <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                                  <SelectItem value="COMPLETED">
                                    COMPLETED
                                  </SelectItem>
                                  <SelectItem value="CANCELLED">
                                    CANCELLED
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  </form.Field>
                  <form.Field name="paymentAmount">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid} className="gap-2">
                          <FieldLabel htmlFor={field.name}>
                            Payment Amount
                          </FieldLabel>
                          <div className="relative">
                            <CircleDollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id={field.name}
                              name={field.name}
                              placeholder="Enter your organization description"
                              type="number"
                              value={field.state.value}
                              onChange={(e) =>
                                field.handleChange(Number(e.target.value))
                              }
                              className="h-10 bg-muted pl-10
                        "
                            />
                          </div>
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  </form.Field>

                  <form.Subscribe>
                    <Button type="submit" className="cursor-pointer">
                      {isPending ? (
                        <>
                          <Spinner className="mr-2" /> Editing Sprint...
                        </>
                      ) : (
                        <>Edit Sprint</>
                      )}
                    </Button>
                  </form.Subscribe>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>{" "}
    </div>
  );
};

export default SprintEditForm;
