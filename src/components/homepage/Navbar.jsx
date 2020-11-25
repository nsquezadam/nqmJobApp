import React, { useState } from "react";
import "./NavBar.css";
import ArrowDown from "../../assets/icon/arrowDown.svg";
import Circle from "../../assets/icon/circle.svg";

const Navbar = () => {
  const [showText, SetShowText] = useState(false);

  const styleText = {
    display: "none",
  };

  const convertTex = () => {
    console.log("estoy ahi");
    if (showText === false) {
    }

    SetShowText(false);
  };

  return (
    <div className="navBar">
      <div className="objectLineUp"></div>
      <div className="initial" onMouseEnter={convertTex}>
        <div className="btninitial">
          <img src={Circle} alt="circulo" />
        </div>
        <a href="/" className="homeInitial">
          Inicio
        </a>
      </div>
      <div className="aboutMe">
        <a href="/" className="homeAbout" style={styleText}>
          Acerca de mi
        </a>
      </div>
      <div className="proyects">
        <a href="/" className="homeProyect" style={styleText}>
          Proyectos
        </a>
      </div>
      <div className="contact">
        <a href="/" className="homeContac" style={styleText}>
          Contacto
        </a>
      </div>
      <div className="objectLineDown"></div>
      <div className="containerBtnDown">
        <img className="btnDown" src={ArrowDown} alt="Arrow" />
      </div>
    </div>
  );
};

export default Navbar;
