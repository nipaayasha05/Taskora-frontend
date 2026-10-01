import AuthGuard from "@/components/auth/auth-guard";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto">
      <AuthGuard>{children}</AuthGuard>
    </div>
  );
};

export default DashboardLayout;
