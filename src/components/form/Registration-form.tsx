"use client";
import React from "react";
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
import { Lock, Mail, User } from "lucide-react";
import GoogleLoginComponent from "../modules/google-login/GoogleLogin";
import Link from "next/link";

export const RegistrationForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
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
                return (
                  <Field className="gap-2">
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
                  </Field>
                );
              }}
            </form.Field>

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
                        type="password"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Enter your password"
                        className="h-10 bg-muted pl-10 -pb-10"
                      />
                    </div>
                  </Field>
                );
              }}
            </form.Field>

            <Button type="submit" className="w-full">
              Register
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
