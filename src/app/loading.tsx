import React from "react";
import { Loader2 } from "lucide-react";

const GlobalLoading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />

        <div className="text-center">
          <h2 className="text-xl font-semibold">Loading...</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Please wait while we prepare your experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalLoading;
