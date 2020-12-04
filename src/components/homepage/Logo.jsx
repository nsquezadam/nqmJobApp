import React, { Fragment } from "react";
import logo from "../../assets/icon/logoNqm.svg";
import "../../assets/styles/homepage/logo.css";

const Logo = () => {
  return (
    <Fragment>
      <div className="containerLogo">
        <img className="logoImg" id="logoImg" src={logo} alt="LogoNqm" />
      </div>
    </Fragment>
  );
};

export default Logo;
