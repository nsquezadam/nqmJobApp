import React, { Fragment } from "react";
import "./InitialPage.css";
import logo from "../../assets/icon/logoNqm.svg";
import BtnPrincipal from "./BtnPrincipal";
import NavBar from "./Navbar";

const InitialPage = () => {
  return (
    <Fragment>
      <div className="container_0">
        <div className="container_1">
          <div className="container_2"></div>
        </div>
      </div>
      <div className="body">
        <div className="containerLogo">
          <img className="logoImg" src={logo} alt="LogoNqm" />
        </div>

        <div className="titles">
          <div className="principalTitles">
            <h1>Natalia Quezada</h1>
          </div>
          <div className="profesionTitle">
            <h2>Front end Developer</h2>
          </div>
          <BtnPrincipal />
        </div>
      </div>

      <NavBar />
    </Fragment>
  );
};

export default InitialPage;
