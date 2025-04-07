import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <Link to="/signup">Sign Up </Link>
      <Link to="/signin">Sign In </Link>
      <Link to="/forget-password">Forget Password </Link>
      <Link to="/tfa">TFA</Link>
    </div>
  );
};

export default Home;
