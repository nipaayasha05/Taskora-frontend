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

export async function verifyAccount(payload: VerifyAccountPaylod) {
  try {
    return await apiClient("/auth/verify-email", {
      method: "POST",
      body: payload,
    });
  } catch (error) {
    console.log("ERROR JSON:", JSON.stringify(error, null, 2));
    console.log(error);
    throw error;
  }
}
