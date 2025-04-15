import { AuthFormGenerator } from "@/components";
import { TFAFormData } from "@/constants";
import React from "react";

const TwoFactorAuthentication: React.FC = () => {
  return (
    <section className="h-[calc(100vh-100px)] w-full flex items-center justify-center">
      <AuthFormGenerator data={TFAFormData} />
    </section>
  );
};

export default TwoFactorAuthentication;
