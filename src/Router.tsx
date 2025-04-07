import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalLayout } from "./layouts";
import {
  ForgetPassword,
  Home,
  SignIn,
  SignUp,
  TwoFactorAuthentication,
} from "./pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={GlobalLayout}>
          <Route path="" Component={Home} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/signin" Component={SignIn} />
          <Route path="/forget-password" Component={ForgetPassword} />
          <Route path="/tfa" Component={TwoFactorAuthentication} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
