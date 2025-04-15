import { AuthFormGenerator } from "@/components";
import { ForgetPasswordFormData } from "@/constants";
import React from "react";

const ForgetPassword: React.FC = () => {
  return (
    <section className="h-[calc(100vh-100px)] w-full flex items-center justify-center">
      <AuthFormGenerator data={ForgetPasswordFormData} />
    </section>
  );
};

export default ForgetPassword;
