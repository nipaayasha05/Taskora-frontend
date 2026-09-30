import { VerifyAccountForm } from "@/components/form/VerifyAccountForm";
import { Spinner } from "@/components/ui/spinner";
import React, { Suspense } from "react";

const VerifyAccountPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold">Taskora</h1>
      </div>
      <div className="w-full max-w-md">
        <Suspense fallback={<Spinner />}>
          <VerifyAccountForm />
        </Suspense>
      </div>
    </div>
  );
};

export default VerifyAccountPage;
