"use client";
import { useForm } from "@tanstack/react-form";
import React from "react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { FileText, Plus, User } from "lucide-react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { createTeamSchema } from "@/validation/team.validation";
import { useCreateTeams, useGetMe } from "@/hooks";
import { useParams } from "next/navigation";
import { OrganizationMember } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useQueryClient } from "@tanstack/react-query";

const CreateTeamsForm = () => {
  const { data: me } = useGetMe();
  // console.log("me", me);
  const params = useParams();
  // console.log("params", params);

  const organizationSlug = params.organization as string;

  const organizationId = me?.data?.organizationMembers?.find(
    (member: OrganizationMember) =>
      member.organization?.name.toLowerCase().replace(/\s+/g, "-") ===
      organizationSlug,
  )?.organizationId;

  const { mutate: createTeam, isPending: createTeamPending } = useCreateTeams();
  const queryClient = useQueryClient();
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
    validators: {
      onSubmit: createTeamSchema,
    },
    onSubmit: ({ value }) => {
      const teamData = {
        name: value.name,
        description: value.description,
        organizationId,
      };

      console.log(teamData);

      createTeam(teamData, {
        onSuccess: (res) => {
          console.log(res);
          toast.success("Team create request successfully");
          queryClient.invalidateQueries({
            queryKey: ["teams", organizationId],
          });
          form.reset();
        },

        onError: (err) => {
          console.log(err);
          toast.error("Organization create request failed");
        },
      });
    },
  });

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Plus />
            Create Team
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Team</DialogTitle>
            <DialogDescription>
              Create a new team for your organization.
            </DialogDescription>
          </DialogHeader>

          <Card className="w-full shadow-sm ">
            <CardHeader className="">
              <CardTitle>Create your organization team</CardTitle>
              <CardDescription>
                Set up your organization team and start managing your projects
                with your team.
              </CardDescription>
            </CardHeader>

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
                            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id={field.name}
                              name={field.name}
                              placeholder="Enter your name"
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

                  <form.Field name="description">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid} className="gap-2">
                          <FieldLabel htmlFor={field.name}>
                            Description
                          </FieldLabel>
                          <div className="relative">
                            <FileText className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id={field.name}
                              name={field.name}
                              placeholder="Enter your organization description"
                              // type="email"
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

                  <Button
                    disabled={createTeamPending}
                    type="submit"
                    className="w-full cursor-pointer"
                  >
                    {createTeamPending ? (
                      <>
                        <Spinner /> Creating Team...
                      </>
                    ) : (
                      <>Create Team</>
                    )}
                  </Button>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>{" "}
    </div>
  );
};

export default CreateTeamsForm;
