import { createPayment } from "@/api";
import { useMutation } from "@tanstack/react-query";

export function useCreatePayment() {
  return useMutation({
    mutationFn: createPayment,
  });
}
