import {
  createOrganization,
  createOrganizationJoinRequest,
  getAllOrganizationForPublic,
  getOrganizationJoinRequest,
  getOrganizationsForAdmin,
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
