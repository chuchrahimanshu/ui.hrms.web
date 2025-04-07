import { CardForm } from "@/components";
import { SIGNIN_DESCRIPTION, SIGNIN_TITLE } from "@/constants/auth.constants";
import React from "react";

const SignIn: React.FC = () => {
  return (
    <section className="h-[calc(100vh-100px)] w-full flex items-center justify-center">
      <CardForm
        title={SIGNIN_TITLE}
        description={SIGNIN_DESCRIPTION}
        cardClassNames="w-[400px]">
        <p>Hello</p>
      </CardForm>
    </section>
  );
};

export default SignIn;
