import React, { Fragment } from "react";
import "../../assets/styles/homepage/InitialPage.css";
import BtnPrincipal from "./BtnPrincipal";
import NavBar from "./Navbar";

const InitialPage = () => {
  return (
    <Fragment>
      <div id="initialPage" className="container_0">
        <div className="body">
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
      </div>
    </Fragment>
  );
};

export default InitialPage;
