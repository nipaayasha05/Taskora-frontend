import apiClient from "@/lib/apiClient";

export function createPayment(sprintId: string) {
  console.log("sprintId", sprintId);
  return apiClient(`/payments/create`, {
    method: "POST",
    body: {
      sprintId,
    },
  });
}
