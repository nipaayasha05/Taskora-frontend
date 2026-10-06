"use client";

import { useCreateProject, useCreateTeams, useGetMe } from "@/hooks";
import { OrganizationMember } from "@/types";
import { useForm } from "@tanstack/react-form";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { FileText, Plus, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Spinner } from "../ui/spinner";
import InviteMembersInput from "../modules/organizations/invite-members/InviteMembersInput";
import { createProjectSchema } from "@/validation";

const ProjectForm = () => {
  const { data: me } = useGetMe();
  console.log("me", me);
  const params = useParams();
  // console.log("params", params);

  const organizationSlug = params.organization as string;

  const organizationId = me?.data?.organizationMembers?.find(
    (member: OrganizationMember) =>
      member.organization?.name.toLowerCase().replace(/\s+/g, "-") ===
      organizationSlug,
  )?.organizationId;

  const { mutate: createProject, isPending: createProjectPending } =
    useCreateProject();
  const queryClient = useQueryClient();

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      clientId: "",
    },
    // validators: {
    //   onSubmit: createProjectSchema,
    // },

    onSubmit: ({ value }) => {
      const projectData = {
        name: value.name,
        description: value.description,
        organizationId,
        clientId: value.clientId,
      };
      console.log(projectData);

      createProject(projectData, {
        onSuccess: (res) => {
          console.log(res);
          toast.success("Project create request successfully");
          queryClient.invalidateQueries({
            queryKey: ["projects", organizationId],
          });
          form.reset();
        },

        onError: (err) => {
          console.log(err);
          toast.error("Project create request failed");
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
            Create Project
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
            <DialogDescription>
              Create a new project for your organization.
            </DialogDescription>
          </DialogHeader>

          <Card className="w-full shadow-sm ">
            <CardHeader className="">
              <CardTitle>Create your organization project</CardTitle>
              <CardDescription>
                Set up your organization project and start managing your
                projects with your team.
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

                  <InviteMembersInput
                    onSelectUser={(user) => {
                      form.setFieldValue("clientId", user.id);
                    }}
                  />

                  <form.Subscribe
                    selector={(state) => [
                      state.values.name,
                      state.values.description,
                      state.values.clientId,
                    ]}
                  >
                    {([name, description, clientId]) => (
                      <Button
                        disabled={
                          createProjectPending ||
                          !name.trim() ||
                          !description.trim() ||
                          !clientId
                        }
                        type="submit"
                        className="w-full cursor-pointer"
                      >
                        {createProjectPending ? (
                          <>
                            <Spinner className="mr-2" /> Creating Project...
                          </>
                        ) : (
                          <>Create Project</>
                        )}
                      </Button>
                    )}
                  </form.Subscribe>

                  {/* <Button
                    disabled={
                      createProjectPending ||
                      !form.state.values.name.trim() ||
                      !form.state.values.description.trim() ||
                      !form.state.values.clientId
                    }
                    type="submit"
                    className="w-full cursor-pointer"
                  >
                    {createProjectPending ? (
                      <>
                        <Spinner className="mr-2" /> Creating Project...
                      </>
                    ) : (
                      <>Create Project</>
                    )}
                  </Button> */}
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>{" "}
    </div>
  );
};

export default ProjectForm;
