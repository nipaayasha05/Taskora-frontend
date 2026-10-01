import apiClient from "@/lib/apiClient";
import {
  LoginPayload,
  RegistrationPayload,
  VerifyAccountPaylod,
} from "@/types";

export function userLogin(payload: LoginPayload) {
  return apiClient("/auth/login", {
    method: "POST",
    body: payload,
  });
}

export function googleOAuth(payload: { idToken: string }) {
  return apiClient("/auth/google", {
    method: "POST",
    body: payload,
  });
}

export function userRegistration(payload: RegistrationPayload) {
  return apiClient("/auth/register", {
    method: "POST",
    body: payload,
  });
}

export function verifyAccount(payload: VerifyAccountPaylod) {
  return apiClient("/auth/verify-email", {
    method: "POST",
    body: payload,
  });
}

export function getMe() {
  return apiClient("/users/profile");
}
