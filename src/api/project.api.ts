import apiClient from "@/lib/apiClient";
import { AddTeamToProjectPayload, CreateProjectPayload } from "@/types";

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
export function getProjectList(organizationId: string) {
  return apiClient(`/organization/projects/${organizationId}`);
}

export function getMyProjectList() {
  return apiClient(`/organization/projects/my-projects`);
}

export function addTeamsToProject(payload: AddTeamToProjectPayload) {
  return apiClient(
    `/organization/projects/${payload.organizationId}/${payload.projectId}`,
    {
      method: "POST",
      body: {
        teamIds: payload.teamIds,
      },
    },
  );
}
