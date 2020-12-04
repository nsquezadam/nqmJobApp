import React, { Fragment } from "react";
import "../../assets/styles/homepage/InitialPage.css";
import BtnPrincipal from "./BtnPrincipal";
//import NavBar from "./Navbar";
import Logo from "./Logo";

const InitialPage = () => {
  return (
    <Fragment>
      <div id="initialPage" className="container_0">
        <div className="container_1">
          <div className="container_2"></div>
        </div>
      </div>
      <div className="body">
        <div className="containerLogo">
          <Logo />
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

      {/* <NavBar /> */}
    </Fragment>
  );
};

export default InitialPage;
