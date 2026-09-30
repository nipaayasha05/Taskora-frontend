export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegistrationPayload {
  name: string;
  email: string;
  password: string;
}

export interface VerifyAccountPaylod {
  email: string;
  otp: string;
}
