import apiClient from "@/lib/apiClient";
import { AddTeamMemberPayload, CreateTeamsPayload } from "@/types/teams.type";

export function createTeam(payload: CreateTeamsPayload) {
  return apiClient(`/organization/teams/${payload.organizationId}`, {
    method: "POST",
    body: {
      name: payload.name,
      description: payload.description,
    },
  });
}
export function getTeamList(organizationId: string) {
  return apiClient(`/organization/teams/${organizationId}`);
}

export function addTeamMember(payload: AddTeamMemberPayload) {
  return apiClient(
    `/organization/teams/${payload.organizationId}/${payload.teamId}/members`,
    {
      method: "POST",
      body: {
        userIds: payload.userIds,
      },
    },
  );
}
