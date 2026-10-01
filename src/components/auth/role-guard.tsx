"use client";

import { useGetMe } from "@/hooks";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import { OrganizationRole, SystemRole } from "@/types/user.types";
import AuthLoading from "./auth-loading";

interface IProps {
  children: ReactNode;
  organizationRoles: OrganizationRole[];
  systemRoles: SystemRole[];
}

export const RoleGuard = ({
  children,
  organizationRoles,
  systemRoles,
}: IProps) => {
  const { data, isPending, isError } = useGetMe();

  console.log(data);
  const router = useRouter();

  const user = data?.data;

  const isSystemAuthorized = !!user && systemRoles.includes(user.systemRole);
  const isOrganizationAuthorized =
    !!user && organizationRoles.includes(user.organizationRole);

  const isAuthorized = isSystemAuthorized || isOrganizationAuthorized;

  useEffect(() => {
    if (isPending) {
      return;
    }
    if (isError || !user) {
      router.replace("/login");
      return;
    }
    // if (!isAuthorized) {
    //   router.replace("/");
    // }
  }, [isPending, isError, user, router]);

  console.log("ROLE:", {
    user,
    systemRole: user?.systemRole,
    organizationRole: user?.organizationRole,
    systemRoles,
    organizationRoles,
    isSystemAuthorized,
    isOrganizationAuthorized,
    isAuthorized,
  });

  if (isPending) {
    return <AuthLoading />;
  }

  if (isError || !user) {
    return <AuthLoading label="Redirecting ..." />;
  }

  if (isAuthorized) {
    return <>{children}</>;
  }

  return <AuthLoading label="Redirecting ..." />;
};
