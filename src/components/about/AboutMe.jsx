import React, { Fragment } from "react";
import "../../assets/styles/about/AboutMe.css";
import Logo from "../homepage/Logo";

const AboutMe = () => {
  return (
    <Fragment>
      <div id="aboutPage" className="abouPAgeFirtsCape">
        <div className="aboutPageSecondCape">
          <div className="aboutContainerText">
            <div className="aboutPageThirdCape"></div>
          </div>
        </div>
      </div>
      <body>
        <div className="containerLogoAboutMe">
          <Logo />
        </div>
      </body>
    </Fragment>
  );
};

export default AboutMe;
