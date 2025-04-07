import { CardForm } from "@/components";
import { SIGNUP_DESCRIPTION, SIGNUP_TITLE } from "@/constants";
import React from "react";

const SignUp: React.FC = () => {
  return (
    <section className="h-[calc(100vh-100px)] w-full flex items-center justify-center">
      <CardForm
        title={SIGNUP_TITLE}
        description={SIGNUP_DESCRIPTION}
        cardClassNames="w-[400px]">
        <p>Hello</p>
      </CardForm>
    </section>
  );
};

export default SignUp;
