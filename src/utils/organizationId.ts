"use client";

import { useParams } from "next/navigation";

import type { OrganizationMember } from "@/types";
import { useGetMe } from "@/hooks";

export function useCurrentOrganization() {
  const { data: me } = useGetMe();
  const params = useParams();

  const organizationSlug = params.organization as string;

  const organization = me?.data?.organizationMembers?.find(
    (member: OrganizationMember) =>
      member.organization?.name.toLowerCase().replace(/\s+/g, "-") ===
      organizationSlug,
  );

  return {
    organizationId: organization?.organizationId,
    organization,
    organizationSlug,
  };
}
