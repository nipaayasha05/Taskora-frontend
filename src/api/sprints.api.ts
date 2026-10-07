import apiClient from "@/lib/apiClient";
import { CreateSprintPayload, Sprint, UpdateSprintPayload } from "@/types";

export function getSprintsList(organizationId: string, projectId: string) {
  return apiClient(
    `/organization/projects/sprints/${organizationId}/${projectId}`,
  );
}

export function updateSprint(payload: UpdateSprintPayload) {
  return apiClient(
    `/organization/projects/sprints/${payload.organizationId}/${payload.projectId}/${payload.sprintId}`,
    {
      method: "PATCH",
      body: {
        name: payload.name,
        goal: payload.goal,
        startDate: payload.startDate,
        endDate: payload.endDate,
        paymentAmount: payload.paymentAmount,
      },
    },
  );
}

export function createSprint(payload: CreateSprintPayload) {
  return apiClient(
    `/organization/projects/sprints/${payload.organizationId}/${payload.projectId}`,
    {
      method: "POST",
      body: {
        name: payload.name,
        goal: payload.goal,
        projectId: payload.projectId,
        startDate: payload.startDate,
        endDate: payload.endDate,
        paymentAmount: payload.paymentAmount,
      },
    },
  );
}
