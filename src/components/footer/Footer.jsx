import React, { Fragment } from "react";
import "../../assets/styles/footer/footer.css";
import sign from "../../assets/icon/firmaNqm.svg";
import NavBar from "../homepage/Navbar";

import mail from "../../assets/icon/linkContact/mail.svg";
import twiter from "../../assets/icon/linkContact/twiter.svg";
import linkedin from "../../assets/icon/linkContact/linkedin.svg";
import gitHub from "../../assets/icon/linkContact/gitHub.svg";

const Footer = () => {
  return (
    <Fragment>
      <div id="homeContact" className="containerFooter">
        <div className="containerSignLinks">
          <div className="containerLinks">
            <ul>
              <li>
                <a href="mailto:nsquezadam@gmail.com" className="linkTo">
                  <img
                    src={mail}
                    alt="nsquezadam@gmail.com"
                    className="linkIcons"
                  />
                </a>
              </li>
              <div className="lineUP"></div>
              <li>
                <a
                  href="https://twitter.com/Natalia79796659?s=08"
                  className="linkTo"
                >
                  <img
                    src={twiter}
                    alt="@Natalia79796659"
                    className="linkIcons"
                  />
                </a>
              </li>
              <div className="lineUP"></div>
              <li>
                <a
                  href="https://www.linkedin.com/in/nataliaquezadam"
                  className="linkTo"
                >
                  <img
                    src={linkedin}
                    alt="nataliaquezadam"
                    className="linkIcons"
                  />
                </a>
              </li>
              <div className="lineUP"></div>
              <li>
                <a href="https://github.com/nsquezadam" className="linkTo">
                  <img src={gitHub} alt="nsquezadam" className="linkIcons" />
                </a>
              </li>
            </ul>
          </div>
          <div className="containerSign">
            <img src={sign} alt="firma" />
          </div>
        </div>
        <NavBar />
      </div>
    </Fragment>
  );
};

export default Footer;
