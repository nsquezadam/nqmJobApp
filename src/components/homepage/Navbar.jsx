import React from "react";
import "../../assets/styles/homepage/NavBar.css";
import ArrowDown from "../../assets/icon/arrowDown.svg";

const Navbar = () => {
  const downPage = () => {
    console.log("click it");
  };
  return (
    <div className="navBar">
      <div className="objectLineUp"></div>
      <div className="initial">
        <a href="/" className="homeInitial">
          Inicio
        </a>
      </div>
      <div className="aboutMe">
        <a href="#aboutPage" className="homeAbout">
          Sobre mi
        </a>
      </div>
      <div className="proyects">
        <a href="/" className="homeProyects">
          Proyectos
        </a>
      </div>
      <div className="contact">
        <a href="/" className="homeContac">
          Contacto
        </a>
      </div>
      <div className="objectLineDown"></div>
      <div className="containerBtnDown">
        <img
          className="btnDown"
          src={ArrowDown}
          alt="Arrow"
          onClick={downPage}
        />
      </div>
    </div>
  );
};

export default Navbar;
