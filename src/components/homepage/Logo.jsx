import React, { Fragment } from "react";
import logo from "../../assets/icon/logoNqm.svg";

const Logo = () => {
  return (
    <Fragment>
      <img className="logoImg" src={logo} alt="LogoNqm" />
    </Fragment>
  );
};

export default Logo;
