import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalLayout } from "./layouts";
import { Home } from "./pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={GlobalLayout}>
          <Route path="" Component={Home} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
