"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "../ui/field";
import { Input } from "../ui/input";
import {
  BriefcaseBusiness,
  EyeIcon,
  EyeOff,
  FileText,
  Image,
  Lock,
  Mail,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import Link from "next/link";
import { useForm } from "@tanstack/react-form";
import { useCreateOrganization } from "@/hooks/organization.hooks";
import { createOrganizationSchema } from "@/validation";
import { toast } from "sonner";
import { CreateOrganizationPayload } from "@/types";

const CreateOrganizationForm = () => {
  const { mutate: createOrganization, isPending: createOrganizationPending } =
    useCreateOrganization();

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      industry: "",
      logo: undefined as File | undefined,
    },
    validators: {
      onSubmit: createOrganizationSchema,
    },
    onSubmit: ({ value }) => {
      const organizationData = {
        name: value.name,
        description: value.description,
        industry: value.industry,
      };

      const payload = { data: organizationData, logo: value.logo };

      console.log(payload);

      createOrganization(payload, {
        onSuccess: (res) => {
          console.log(res);
          toast.success("Organization create request successfully submitted");
        },

        onError: (err) => {
          console.log(err);
          toast.error("Organization create request failed");
        },
      });
    },
  });

  return (
    <div>
      {" "}
      <Card className="w-full shadow-sm ">
        <CardHeader className="">
          <CardTitle>Create your organization</CardTitle>
          <CardDescription>
            Set up your organization and start managing your projects with your
            team.
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
                          onChange={(e) => field.handleChange(e.target.value)}
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
                      <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                      <div className="relative">
                        <FileText className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id={field.name}
                          name={field.name}
                          placeholder="Enter your organization description"
                          // type="email"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
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
              <form.Field name="industry">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid} className="gap-2">
                      <FieldLabel htmlFor={field.name}>Industry</FieldLabel>
                      <div className="relative">
                        <BriefcaseBusiness className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id={field.name}
                          name={field.name}
                          placeholder="Enter your organization industry"
                          // type="email"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
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
              <form.Field name="logo">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid} className="gap-2">
                      <FieldLabel htmlFor={field.name}>
                        Logo{" "}
                        <span className="ml-0.5 text-xs font-normal text-muted-foreground">
                          (Optional)
                        </span>
                      </FieldLabel>
                      <div className="relative">
                        <Image className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id={field.name}
                          name={field.name}
                          placeholder="Upload your organization logo url"
                          type="file"
                          accept="image/*"
                          // value={field.state.value}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            field.handleChange(file);
                          }}
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
                type="submit"
                disabled={createOrganizationPending}
                className="w-full"
              >
                {createOrganizationPending ? (
                  <>
                    <Spinner />
                    Creating Organization...
                  </>
                ) : (
                  <>Create Organization</>
                )}
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateOrganizationForm;

// name: string;
// description: string;
// industry: string;
// logo?: string;
