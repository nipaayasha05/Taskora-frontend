import apiClient from "@/lib/apiClient";

export function getUserOverview() {
  return apiClient(`/user-management/user/overview`);
}

export function getAdminOverview() {
  return apiClient(`/user-management/admin/overview`);
}
