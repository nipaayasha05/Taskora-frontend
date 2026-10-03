import {
  createOrganization,
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
