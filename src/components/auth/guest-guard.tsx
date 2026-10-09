"use client";
import GlobalLoading from "@/app/loading";
import { useGetMe } from "@/hooks";
import { redirect } from "next/navigation";
import React from "react";

const GuestGuard = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError } = useGetMe();
  if (isLoading) {
    return <GlobalLoading />;
  }

  if (data?.data) {
    redirect("/");
  }
  if (isError) {
    return <>{children}</>;
  }

  return <>{children}</>;
};

export default GuestGuard;
