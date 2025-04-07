import React from "react";
import { Separator } from "../ui/separator";
import { Logo } from "@/elements";
import { Container } from "@/layouts";
import { ModeToggle } from "../ui/mode-toggle";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <Container classNames="h-[72px] flex items-center justify-between">
        <Logo />
        <ModeToggle />
      </Container>
      <Separator />
    </header>
  );
};

export default Header;
