import { createSprint, getSprintsList } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetAllSprints(
  organizationId: string | undefined,
  projectId: string | undefined,
) {
  return useQuery({
    queryKey: ["sprints", organizationId],
    queryFn: async () => {
      const result = await getSprintsList(organizationId!, projectId!);

      return result;
    },
    enabled: !!organizationId,
  });
}

export function useCreateSprint() {
  return useMutation({
    mutationFn: createSprint,
  });
}
