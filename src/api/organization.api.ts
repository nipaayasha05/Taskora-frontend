import apiClient from "@/lib/apiClient";
import {
  CreateOrganizationJoinRequestPayload,
  CreateOrganizationPayload,
  UpdateOrganizationRequestPayload,
} from "@/types";

export function createOrganization(payload: CreateOrganizationPayload) {
  const formData = new FormData();

  formData.append("data", JSON.stringify(payload.data));

  if (payload.logo) {
    formData.append("logo", payload.logo);
  }

  return apiClient("/organizations", {
    method: "POST",
    body: formData,
  });
}

export function getOrganizationsForAdmin() {
  return apiClient("/organizations");
}

export function UpdateOrganizationRequest(
  payload: UpdateOrganizationRequestPayload,
) {
  return apiClient(`/organizations/${payload.organizationId}/status`, {
    method: "PATCH",
    body: payload,
  });
}

export function getAllOrganizationForPublic() {
  return apiClient("/organizations/public");
}

export function createOrganizationJoinRequest(
  payload: CreateOrganizationJoinRequestPayload,
) {
  return apiClient(`/organizations/${payload.organizationId}/join`, {
    method: "POST",
    body: payload,
  });
}

export function getOrganizationJoinRequest(organizationId: string) {
  return apiClient(`/organizations/${organizationId}/join`);
}
