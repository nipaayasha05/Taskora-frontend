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
import { EyeIcon, EyeOff, Lock, Mail } from "lucide-react";
import GoogleLoginComponent from "../modules/google-login/GoogleLogin";
import Link from "next/link";

import { useGoogleOAuth, useLogin } from "@/hooks";

import { loginSchema } from "@/validation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Spinner } from "../ui/spinner";
import { useQueryClient } from "@tanstack/react-query";
import { set } from "zod";

export const LoginForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [serverError, setServerError] = useState("");

  const { mutate: login, isPending: loginPending } = useLogin();

  const { mutate: googLogin } = useGoogleOAuth();

  const queryClient = useQueryClient();

  const DEMO_CREDENTIALS = {
    ADMIN: {
      email: "admin@gmail.com",
      password: "Aa@123",
    },
    TEAM_MEMBER: {
      email: "dilaraabc@gmail.com",
      password: "Aa@123",
    },
    MANAGER: {
      email: "akash@gmail.com",
      password: "Aa@123",
    },
    OWNER: {
      email: "abc1@gmail.com",
      password: "Aa@123",
    },
  };

  const handleDemoLogin = async (
    role: "ADMIN" | "TEAM_MEMBER" | "MANAGER" | "OWNER",
  ) => {
    const credentials = DEMO_CREDENTIALS[role];

    setServerError("");

    form.setFieldValue("email", credentials.email);
    form.setFieldValue("password", credentials.password);

    login(credentials, {
      onSuccess: async (res) => {
        toast.success("Login successful");

        await queryClient.invalidateQueries({ queryKey: ["me"] });

        router.push("/");
      },
      onError: (err) => {
        setServerError(err.message);
        toast.error(err.message);
      },
    });
  };

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginSchema,
    },

    onSubmit: async ({ value }) => {
      const loginData = {
        email: value.email,
        password: value.password,
      };
      console.log(loginData);

      login(loginData, {
        onSuccess: async (res) => {
          console.log(res);
          toast.success("Login successful");

          await queryClient.invalidateQueries({ queryKey: ["me"] });

          router.push("/");
        },
        onError: (err) => {
          console.log(err);
          toast.error(err.message);
        },
      });
    },
  });

  return (
    <Card className="w-full shadow-sm ">
      <CardHeader className="">
        <CardTitle>Welcome Back to Taskora</CardTitle>
        <CardDescription>
          Login to continue with your Taskora account
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
          <FieldGroup className="gap-4">
            <form.Field name="email">
              {(field) => {
                console.log(field.state.meta.errors);
                console.log(field.state.meta.isTouched);
                console.log(field.state.meta.isValid);
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

            <Button disabled={loginPending} type="submit" className="w-full">
              {loginPending ? (
                <>
                  <Spinner /> Login...
                </>
              ) : (
                <>Login</>
              )}
            </Button>

            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                disabled={loginPending}
                onClick={() => handleDemoLogin("ADMIN")}
                className="w-full"
              >
                {loginPending ? "Demo Admin..." : "Demo Admin"}
              </Button>

              <Button
                type="button"
                variant="outline"
                disabled={loginPending}
                onClick={() => handleDemoLogin("OWNER")}
                className="w-full"
              >
                {loginPending ? "Demo Owner..." : "Demo Owner"}
              </Button>

              <Button
                type="button"
                variant="outline"
                disabled={loginPending}
                onClick={() => handleDemoLogin("MANAGER")}
                className="w-full"
              >
                {loginPending ? "Demo Manager..." : "Demo Manager"}
              </Button>

              <Button
                type="button"
                variant="outline"
                disabled={loginPending}
                onClick={() => handleDemoLogin("TEAM_MEMBER")}
                className="w-full"
              >
                {loginPending ? "Demo Team Member..." : "Demo Team Member"}
              </Button>
            </div>
          </FieldGroup>
        </form>
        <FieldSeparator>Or continue with</FieldSeparator>

        <GoogleLoginComponent />

        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?
          <Link
            href="/registration"
            className="font-medium underline underline-offset-4 hover:text-primary"
          >
            Register
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
