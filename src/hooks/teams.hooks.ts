import { addTeamMember, createTeam, getTeamList } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useCreateTeams() {
  return useMutation({
    mutationFn: createTeam,
  });
}

export function useGetAllTeams(organizationId: string | undefined) {
  return useQuery({
    queryKey: ["teams", organizationId],
    queryFn: async () => {
      const result = await getTeamList(organizationId!);

      return result;
    },
    enabled: !!organizationId,
  });
}

export function useAddTeamMember() {
  return useMutation({
    mutationFn: addTeamMember,
  });
}
