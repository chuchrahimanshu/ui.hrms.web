import { Header } from "@/components";
import React from "react";
import { Outlet } from "react-router-dom";
import Container from "./Container";

const GlobalLayout: React.FC = () => {
  return (
    <section>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </section>
  );
};

export default GlobalLayout;
