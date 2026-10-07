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
  FileText,
  Goal,
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
import { useCreateSprint } from "@/hooks/sprints.hook";
import GlobalLoading from "@/app/loading";
import { useQueryClient } from "@tanstack/react-query";
import { useCurrentOrganization } from "@/utils/organizationId";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";

const SprintForm = () => {
  const { organizationId } = useCurrentOrganization();

  const params = useParams();

  // console.log("params:", params);

  const projectId = params.project as string;

  // console.log("projectId:", projectId);

  const { mutate: createSprint, isPending } = useCreateSprint();
  const queryClient = useQueryClient();

  const form = useForm({
    defaultValues: {
      name: "",
      goal: "",
      startDate: "",
      endDate: "",
      paymentAmount: 0,
    },

    onSubmit: ({ value }) => {
      const sprintData = {
        name: value.name,
        goal: value.goal,
        startDate: new Date(value.startDate).toISOString(),
        endDate: new Date(value.endDate).toISOString(),
        paymentAmount: value.paymentAmount,
        organizationId,
        projectId,
      };
      console.log(sprintData);

      createSprint(sprintData, {
        onSuccess: () => {
          toast.success("Sprint create request successfully");
          queryClient.invalidateQueries({
            queryKey: ["sprints", organizationId],
          });
          form.reset();
        },
        onError: () => {
          toast.error("Sprint create request failed");
        },
      });
    },
  });

  // if (isPending) {
  //   return <GlobalLoading />;
  // }

  return (
    <div className="max-w-5xl  p-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Plus />
            Create Sprint
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Sprint</DialogTitle>
            <DialogDescription>
              Create a new sprint for your organization.
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

                  {/* <InviteMembersInput
                    onSelectUser={(user) => {
                      form.setFieldValue("clientId", user.id);
                    }}
                  /> */}

                  <form.Subscribe
                    selector={(state) => [
                      state.values.name,
                      state.values.goal,
                      state.values.startDate,
                      state.values.endDate,
                      state.values.paymentAmount,
                    ]}
                  >
                    {([name, goal, startDate, endDate, paymentAmount]) => (
                      <Button
                        disabled={
                          isPending ||
                          !name ||
                          !goal ||
                          !startDate ||
                          !endDate ||
                          !paymentAmount
                        }
                        type="submit"
                        className="w-full cursor-pointer"
                      >
                        {isPending ? (
                          <>
                            <Spinner className="mr-2" /> Creating Sprint...
                          </>
                        ) : (
                          <>Create Sprint</>
                        )}
                      </Button>
                    )}
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

export default SprintForm;
