"use client";
import { ReactNode } from "react";
import GoogleAuthProvider from "./google-auth.provider";
import QueryProvider from "./query.provider";

const GoogleProviders = ({ children }: { children: ReactNode }) => {
  return (
    <GoogleAuthProvider>
      <QueryProvider>{children}</QueryProvider>
    </GoogleAuthProvider>
  );
};
export default GoogleProviders;
