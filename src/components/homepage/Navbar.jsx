import React from "react";

import ArrowDown from "../../assets/icon/arrowDown.svg";
import arrowUp from "../../assets/icon/arrowUp.svg";
import "../../assets/styles/homepage/navBar.css";

import { Link } from "react-scroll";
// import { useLocation } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navBar">
      <div className="objectLineUp"></div>
      <div className="containerSideBar">
        <ul>
          <li className="initial">
            <Link
              to="initialPage"
              spy={true}
              smooth={true}
              className="homeInitial"
            >
              Inicio
            </Link>
          </li>
          <li className="aboutMe">
            <Link to="aboutPage" spy={true} smooth={true} className="homeAbout">
              Sobre Mi
            </Link>
          </li>
          <li>
            <Link
              to="homeProyect"
              spy={true}
              smooth={true}
              className="homeProyects"
            >
              Proyectos
            </Link>
          </li>
          <li className="contact">
            <Link
              to="homeContact"
              spy={true}
              smooth={true}
              className="homeContact"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className="objectLineDown"></div>
      <div className="containerBtnDown">
        <img
          className="btnDown"
          src={ArrowDown}
          alt="Arrow"
          onClick={() => window.scrollTo(0, 1800)}
        />
      </div>
      <div className="containerBtnUp">
        <img
          className="btnUp"
          src={arrowUp}
          alt="Arrow"
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
      <div className="objectLineUpFoo"></div>
    </div>
  );
};

export default Navbar;
