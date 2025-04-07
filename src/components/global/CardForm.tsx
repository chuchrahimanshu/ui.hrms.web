import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardForm: React.FC<CardFormPropsInterface> = ({
  children,
  title,
  cardClassNames,
  description,
  footerChildrens,
  headerChildrens,
}) => {
  return (
    <Card className={cardClassNames}>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {headerChildrens}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footerChildrens && (
        <CardFooter className="flex justify-between">
          {footerChildrens}
        </CardFooter>
      )}
    </Card>
  );
};

export default CardForm;
