import { AuthFormGenerator } from "@/components";
import { SignInFormData } from "@/constants";
import React from "react";

const SignIn: React.FC = () => {
  return (
    <section className="h-[calc(100vh-100px)] w-full flex items-center justify-center">
      <AuthFormGenerator data={SignInFormData} />
    </section>
  );
};

export default SignIn;
