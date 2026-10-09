import { getAdminOverview, getUserOverview } from "@/api";
import { useQuery } from "@tanstack/react-query";

export function useGetUserOverview() {
  return useQuery({
    queryKey: ["userOverview"],
    queryFn: getUserOverview,
  });
}
export function useGetAdminOverview() {
  return useQuery({
    queryKey: ["adminOverview"],
    queryFn: getAdminOverview,
  });
}
