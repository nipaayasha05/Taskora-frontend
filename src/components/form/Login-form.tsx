"use client";
import React from "react";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
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
import { Lock, Mail } from "lucide-react";

export const LoginForm = () => {
  const form = useForm({
    defaultValues: {
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
              {(field: any) => {
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
              {(field: any) => {
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
              Login
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};
