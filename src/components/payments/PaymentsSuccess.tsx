import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CircleCheckBig } from "lucide-react";
import { Button } from "../ui/button";

const PaymentsSuccess = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="items-center text-center">
          <div className="mb-4 rounded-full bg-green-100 p-4 dark:bg-green-900/20">
            <CircleCheckBig className="h-14 w-14 text-green-600" />
          </div>

          <CardTitle className="text-2xl">Payment Successful!</CardTitle>

          <CardDescription>
            Thank you! Your payment has been completed successfully.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-lg border bg-background p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Payment Status
              </span>

              <span className="font-medium text-green-600">Paid</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Sprint Status
              </span>

              <span className="font-medium">Completed</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Transaction</span>

              <span className="font-medium">Successful</span>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Your payment has been recorded successfully. You can check your
            sprint and payment details from your dashboard.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentsSuccess;
