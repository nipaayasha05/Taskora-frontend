"use client";
import { useVerifyAccount } from "@/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Field, FieldLabel } from "../ui/field";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Button } from "../ui/button";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";

export const VerifyAccountForm = () => {
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";

  const router = useRouter();

  const [otp, setOtp] = useState("");

  const [isInvalid, setIsValid] = useState(false);

  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [isExpired, setIsExpired] = useState(false);

  const { mutate: verify, isPending: verifyAccountPending } =
    useVerifyAccount();

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleOtp = () => {
    if (otp.length !== 6) {
      setIsValid(true);
      return;
    }

    const verifyData = {
      email,
      otp,
    };

    verify(verifyData, {
      onSuccess: (res) => {
        if (!res.success) {
          toast.error("Something went wrong. Please try again");
          return;
        }
        toast.success("Account verified successfully");
        router.push("/");
      },

      onError: (error) => {
        console.log("ERROR:", error.message);

        toast.error(error.message || "Something went wrong");
      },
    });
    console.log("OTP OTP OTP", verifyData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verify Account</CardTitle>
        <CardDescription>
          Enter the OTP you received to verify your account
          <span className="font-medium text-foreground"> {email}</span>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="verify-account-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleOtp();
          }}
        >
          <Field>
            <FieldLabel>OTP</FieldLabel>
          </Field>
          <InputOTP
            maxLength={6}
            onChange={(value) => {
              setOtp(value);
            }}
            value={otp}
            autoComplete="off"
            name="otp"
            id="otp"
            pattern={REGEXP_ONLY_DIGITS}
            disabled={isExpired || verifyAccountPending}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </form>

        {isExpired ? (
          <p className="text-sm text-destructive">
            Your OTP has expired. Please request a new one.
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            Code expires in{" "}
            <span className="font-medium text-foreground">
              {minutes}:{seconds.toString().padStart(2, "0")}
            </span>
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          form="verify-account-form"
          disabled={isExpired || verifyAccountPending}
        >
          {verifyAccountPending ? (
            <>
              <Spinner /> Verifying...
            </>
          ) : (
            "Verify Account"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
