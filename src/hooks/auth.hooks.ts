import {
  getMe,
  getUsers,
  googleOAuth,
  logout,
  userLogin,
  userRegistration,
  verifyAccount,
} from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: userLogin,
  });
}

export function useGoogleOAuth() {
  return useMutation({
    mutationFn: googleOAuth,
  });
}

export function useRegistration() {
  return useMutation({
    mutationFn: userRegistration,
  });
}

export function useVerifyAccount() {
  return useMutation({
    mutationFn: verifyAccount,
  });
}

export function useGetMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });
}

export function useGetUsers(search?: string) {
  return useQuery({
    queryKey: ["users", search],
    queryFn: () => getUsers(search),
  });
}

export function useLogout() {
  return useMutation({
    mutationFn: logout,
  });
}
