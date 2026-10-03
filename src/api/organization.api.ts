import apiClient from "@/lib/apiClient";
import {
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
