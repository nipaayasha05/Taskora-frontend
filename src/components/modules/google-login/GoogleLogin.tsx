import { GoogleLogin } from "@react-oauth/google";
import React from "react";

const GoogleLoginComponent = () => {
  const handleGoogleSuccess = (credentialResponse: { credential?: string }) => {
    console.log(credentialResponse);
  };

  return (
    <GoogleLogin
      theme="outline"
      shape="pill"
      text="continue_with"
      onSuccess={handleGoogleSuccess}
    ></GoogleLogin>
  );
};

export default GoogleLoginComponent;
