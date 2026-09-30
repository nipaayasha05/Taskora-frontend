import { useGoogleOAuth } from "@/hooks";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const GoogleLoginComponent = () => {
  const router = useRouter();

  const { mutate: googLogin } = useGoogleOAuth();

  const handleGoogleSuccess = (credentialResponse: { credential?: string }) => {
    // console.log(credentialResponse);

    const idToken = credentialResponse.credential;

    if (!idToken) {
      toast.error("Google login failed");
      return;
    }
    googLogin(
      { idToken },
      {
        onSuccess: (res) => {
          toast.success("Google login success");
          router.push("/");
        },
        onError: (err) => {
          toast.error("Google login failed");
        },
      },
    );
  };

  const handleGoogleError = () => {
    toast.error("Google login failed");
  };

  return (
    <GoogleLogin
      theme="outline"
      shape="pill"
      text="continue_with"
      onSuccess={handleGoogleSuccess}
      onError={handleGoogleError}
    ></GoogleLogin>
  );
};

export default GoogleLoginComponent;
