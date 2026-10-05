import {
  createOrganization,
  createOrganizationJoinRequest,
  getAllOrganizationForPublic,
  getOrganizationJoinRequest,
  getOrganizationsForAdmin,
  getUserOrganizationJoinRequest,
  UpdateOrganizationJoinRequest,
  UpdateOrganizationRequest,
} from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useCreateOrganization() {
  return useMutation({
    mutationFn: createOrganization,
  });
}

export function useCreateOrganizationForAdmin() {
  return useQuery({
    queryKey: ["organizations"],
    queryFn: getOrganizationsForAdmin,
  });
}

export function useUpdateOrganizationRequest() {
  return useMutation({
    mutationFn: UpdateOrganizationRequest,
  });
}

export function useCreateOrganizationJoinRequest() {
  return useMutation({
    mutationFn: createOrganizationJoinRequest,
  });
}

export function useGetAllOrganizationForPublic() {
  return useQuery({
    queryKey: ["organizations"],
    queryFn: getAllOrganizationForPublic,
  });
}

export function useGetOrganizationJoinRequest(
  organizationId: string | undefined,
) {
  return useQuery({
    queryKey: ["organizations", organizationId],
    queryFn: () => getOrganizationJoinRequest(organizationId!),
    enabled: !!organizationId,
  });
}

export function useGetUserOrganizationJoinRequest(
  organizationId: string | undefined,
) {
  return useQuery({
    queryKey: ["userOrganizations", organizationId],
    queryFn: getUserOrganizationJoinRequest,
  });
}

export function useUpdateOrganizationJoinRequest() {
  return useMutation({
    mutationFn: UpdateOrganizationJoinRequest,
  });
}
