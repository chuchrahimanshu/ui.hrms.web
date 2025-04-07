import React from "react";
import GLOBAL_LOGO from "../assets/images/Global Logo.png";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Logo: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleHomeNavigation = () => {
    navigate("/");
  };

  return (
    <img
      src={GLOBAL_LOGO}
      alt="Logo"
      className="h-[72px] cursor-pointer"
      onClick={handleHomeNavigation}
    />
  );
};

export default Logo;
