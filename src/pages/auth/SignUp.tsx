import { AuthFormGenerator } from "@/components";
import { SignUpFormData } from "@/constants";
import React from "react";

const SignUp: React.FC = () => {
  return (
    <section className="h-[calc(100vh-100px)] w-full flex items-center justify-center">
      <AuthFormGenerator data={SignUpFormData} />
    </section>
  );
};

export default SignUp;
