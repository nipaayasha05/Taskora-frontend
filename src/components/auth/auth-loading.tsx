import { Loader } from "lucide-react";
import React from "react";

const AuthLoading = ({ label = "verifying account" }: { label?: string }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex gap-3">
        <Loader className="animate-spin size-6" />
        <span className="text-sm text-gray-500">{label}</span>
      </div>
    </div>
  );
};

export default AuthLoading;
