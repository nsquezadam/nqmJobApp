import React from "react";
import "../../assets/styles/homepage/NavBar.css";
import ArrowDown from "../../assets/icon/arrowDown.svg";
// import { useLocation } from "react-router-dom";
const Navbar = () => {
  //const [positionPage, setPositionPage] = useState[0];

  // let arrayIdRoutes = ["#aboutMe", "#proyects", "#contact"];

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
          Sobre Mi
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
        <img className="btnDown" src={ArrowDown} alt="Arrow" />
      </div>
    </div>
  );
};

export default Navbar;
