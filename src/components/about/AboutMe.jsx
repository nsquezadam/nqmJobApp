import React, { Fragment } from "react";
import "../../assets/styles/about/AboutMe.css";
import Logo from "../homepage/Logo";

const AboutMe = () => {
  return (
    <Fragment>
      <div id="aboutPage" className="abouPAgeFirtsCape">
        <div className="aboutPageSecondCape">
          <div className="aboutContainerText">
            <svg
              width="268"
              height="472"
              viewBox="0 0 268 472"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5028 26.4016C-29.5654 -11.5642 178.825 -12.4361 244.786 49.2773C310.748 110.991 135.665 294.519 244.786 387.851C353.907 481.182 44.902 517.461 8.54852 387.851C-27.805 258.24 66.571 64.3673 18.5028 26.4016Z"
                fill="#000029"
                fill-opacity="0.55"
              />
            </svg>
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
