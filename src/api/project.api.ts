import apiClient from "@/lib/apiClient";
import { CreateProjectPayload } from "@/types";

export function createProject(payload: CreateProjectPayload) {
  return apiClient(`/organization/projects/${payload.organizationId}`, {
    method: "POST",
    body: {
      name: payload.name,
      description: payload.description,
      clientId: payload.clientId,
    },
  });
}
