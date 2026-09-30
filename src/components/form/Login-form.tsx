"use client";
import React, { useState } from "react";
import { Field, FieldGroup, FieldLabel, FieldSeparator } from "../ui/field";
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
import { set } from "zod";
import { useLogin } from "@/hooks";
import { useGoogleOAuth } from "@react-oauth/google";
import { loginSchema } from "@/validation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const { mutate: login, isPending: loginPending } = useLogin();

  // const { mutate: googleLogin } = useGoogleOAuth();

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
        onSuccess: (res) => {
          console.log(res);
          toast.success("Login successful");

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
                return (
                  <Field className="gap-2">
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id={field.name}
                        name={field.name}
                        placeholder="Enter your email"
                        type="email"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="h-10 bg-muted pl-10
                        "
                      />
                    </div>
                  </Field>
                );
              }}
            </form.Field>
            <form.Field name="password">
              {(field) => {
                return (
                  <Field className="gap-2">
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
                  </Field>
                );
              }}
            </form.Field>

            <Button type="submit" className="w-full">
              Login
            </Button>
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
