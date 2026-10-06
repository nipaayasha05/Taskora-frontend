import {
  addTeamsToProject,
  createProject,
  getProjectList,
} from "@/api/project.api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useCreateProject() {
  return useMutation({
    mutationFn: createProject,
  });
}

export function useGetAllProjects(organizationId: string | undefined) {
  return useQuery({
    queryKey: ["projects", organizationId],
    queryFn: async () => {
      const result = await getProjectList(organizationId!);

      return result;
    },
    enabled: !!organizationId,
  });
}

export function useAddTeamsToProject() {
  return useMutation({
    mutationFn: addTeamsToProject,
  });
}
