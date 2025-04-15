import React from "react";
import CardForm from "../global/CardForm";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

const AuthFormGenerator: React.FC<AuthFormGeneratorPropsInterface> = ({
  data,
}) => {
  return (
    <CardForm
      title={data.title}
      description={data.description}
      cardClassNames="w-[400px]">
      <form className="flex flex-col gap-3">
        {data.formFields?.length > 0 &&
          data.formFields.map((inputField) => (
            <div className="flex flex-col gap-2">
              <Label htmlFor={inputField.id}>{inputField.label}</Label>
              <Input
                type={inputField.type}
                placeholder={inputField.placeholder}
              />
            </div>
          ))}
        <section className="flex items-center justify-between">
          {data?.rememberMe && (
            <div className="flex items-center gap-1">
              <Checkbox id={data.rememberMe.id} />
              <Label htmlFor={data.rememberMe.id} className="cursor-pointer">
                {data.rememberMe.label}
              </Label>
            </div>
          )}
          {data.links &&
            data.links?.length > 0 &&
            data.links.map((formLink) => (
              <Label className="cursor-pointer">{formLink.label}</Label>
            ))}
        </section>
        <section className="w-auto mt-4 flex items-center justify-between">
          {data.skip && (
            <Button
              type="button"
              className="cursor-pointer w-[48.5%]"
              variant="outline">
              {data.skip.label}
            </Button>
          )}
          {data.submitButton && (
            <Button
              type="submit"
              className={`cursor-pointer ${
                data.skip ? "w-[48.5%]" : "w-full"
              }`}>
              {data.submitButton.label}
            </Button>
          )}
        </section>
      </form>
    </CardForm>
  );
};

export default AuthFormGenerator;
