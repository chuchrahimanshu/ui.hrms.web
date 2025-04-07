import { CardForm } from "@/components";
import {
  FORGETPASSWORD_DESCRIPTION,
  FORGETPASSWORD_TITLE,
} from "@/constants/auth.constants";
import React from "react";

const ForgetPassword: React.FC = () => {
  return (
    <section className="h-[calc(100vh-100px)] w-full flex items-center justify-center">
      <CardForm
        title={FORGETPASSWORD_TITLE}
        description={FORGETPASSWORD_DESCRIPTION}
        cardClassNames="w-[400px]">
        <p>Hello</p>
      </CardForm>
    </section>
  );
};

export default ForgetPassword;
