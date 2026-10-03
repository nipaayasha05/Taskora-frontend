import { createOrganization } from "@/api";
import { useMutation } from "@tanstack/react-query";

export function useCreateOrganization() {
  return useMutation({
    mutationFn: createOrganization,
  });
}
