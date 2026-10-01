"use client";
import { useGetMe } from "@/hooks";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import AuthLoading from "./auth-loading";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { data, isPending, isError } = useGetMe();
  console.log("data", data);

  const router = useRouter();

  const user = data?.data;

  useEffect(() => {
    if (isPending) {
      return;
    }

    if (isError || !user) {
      router.replace("/login");
    }
  }, [isPending, isError, user, router]);

  console.log("AUTH:", {
    data,
    user,
    isPending,
    isError,
  });

  if (isPending) {
    return <AuthLoading />;
  }

  if (isError || !user) {
    return <AuthLoading label="Redirecting ..." />;
  }

  return <div>{children}</div>;
};

export default AuthGuard;
