import { createProject } from "@/api/project.api";
import { useMutation } from "@tanstack/react-query";

export function useCreateProject() {
  return useMutation({
    mutationFn: createProject,
  });
}
