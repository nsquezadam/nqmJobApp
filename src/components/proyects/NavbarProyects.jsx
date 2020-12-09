import React from "react";
//import { useHistory } from "react-router-dom";
import ArrowDown from "../../assets/icon/arrowDown.svg";
import arrowUp from "../../assets/icon/arrowUp.svg";
import "../../assets/styles/proyects/NavBarProyects.css";
import arrowReturn from "../../assets/icon/arrowReturn.svg";

import { Link } from "react-scroll";
// import { useLocation } from "react-router-dom";
const NavbarProyects = () => {
  // let history = useHistory();
  // function handleClick() {
  //   console.log("accediendo");
  //   history.push("/AllViewsproyects");
  //   // <AllViewsProyects />;
  // }
  return (
    <div className="navBarProyects">
      <div className="containerReturn">
        <img
          className="btnReturn"
          src={arrowReturn}
          alt="Arrow"
          // onClick={handleClick}
        />
      </div>
      <div className="objectLineUpP"></div>

      <div className="containerSideBarP">
        <ul>
          <li>
            <Link to="cptView" spy={true} smooth={true}>
              Comida para Todos
            </Link>
          </li>
          <li>
            <Link to="bkView" spy={true} smooth={true}>
              Burguer Kingdom
            </Link>
          </li>
          <li>
            <Link to="witView" spy={true} smooth={true}>
              WIT
            </Link>
          </li>
          <li>
            <Link to="pwView" spy={true} smooth={true}>
              PokeWorld
            </Link>
          </li>
          <li>
            <Link to="homeContact" spy={true} smooth={true}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className="objectLineDownP"></div>
      <div className="containerBtnDownP">
        <img
          className="btnDownP"
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

      <div className="objectLineUpFooP"></div>
    </div>
  );
};

export default NavbarProyects;
