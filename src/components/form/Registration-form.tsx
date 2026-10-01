"use client";
import React, { useState } from "react";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "../ui/field";
import { Input } from "../ui/input";
import { useForm } from "@tanstack/react-form";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { EyeIcon, EyeOff, Lock, Mail, User } from "lucide-react";
import GoogleLoginComponent from "../modules/google-login/GoogleLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registrationSchema } from "@/validation";
import { useRegistration } from "@/hooks";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";

export const RegistrationForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: registration, isPending: registerPending } =
    useRegistration();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    validators: {
      onSubmit: registrationSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      const registrationData = {
        name: value.name,
        email: value.email,
        password: value.password,
      };

      registration(registrationData, {
        onSuccess: (res) => {
          if (!res.success) {
            toast.error(res.message);
          }

          if (res.success) {
            toast.success("Registration successful!");
          }

          const params = new URLSearchParams({ email: registrationData.email });
          router.push(`/registration/verify-account?${params.toString()}`);
        },
      });
    },
  });

  return (
    <Card className="w-full shadow-sm ">
      <CardHeader className="">
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Join Taskora and start managing your projects.
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

            <form.Field name="email">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid} className="gap-2">
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id={field.name}
                        name={field.name}
                        placeholder="Enter your email"
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
            <form.Field name="password">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid} className="gap-2">
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>

                    <div className="relative">
                      <Lock className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id={field.name}
                        name={field.name}
                        type={showPassword ? "text" : "password"}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Enter your password"
                        className="h-10 bg-muted pl-10 -pb-10"
                      />
                      <button
                        className="absolute top-1/2 -translate-y-1/2 right-2"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="text-gray-500 size-5" />
                        ) : (
                          <EyeIcon className="text-gray-500 size-5" />
                        )}
                      </button>
                    </div>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <Button disabled={registerPending} type="submit" className="w-full">
              {registerPending ? (
                <>
                  <Spinner /> Register...
                </>
              ) : (
                <>Register</>
              )}
            </Button>
          </FieldGroup>
        </form>

        <FieldSeparator>Or continue with</FieldSeparator>

        <GoogleLoginComponent />

        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?
          <Link
            href="/login"
            className="font-medium underline underline-offset-4 hover:text-primary"
          >
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
