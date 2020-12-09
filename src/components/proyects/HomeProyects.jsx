import React from "react";
//import { useHistory } from "react-router-dom";
import "../../assets/styles/proyects/homeProyects.css";
import cpt from "../../assets/images/proyects/cpt.svg";
import bk from "../../assets/images/proyects/bk.svg";
import wit from "../../assets/images/proyects/wit.svg";
import pkw from "../../assets/images/proyects/pkw.svg";
import BtnMas from "./BtnMas";

//import PcomidaParaTodos from "./PcomidaParaTodos";
// import AllViewsProyects from "./AllViewsProyects";

import Navbar from "../homepage/Navbar";

const HomeProyects = (props) => {
  // let history = useHistory();

  // function handleClick() {
  //   console.log("accediendo");
  //   // e.preventDefault();
  //   history.push("/AllViewsproyects");
  //   // <AllViewsProyects />;
  // }

  return (
    <body id="homeProyect" className="bodyHomeProyects">
      <div className="containerTitleandProj">
        <h2>Proyectos</h2>
        <div className="containerHomeProyects">
          <div className="containerProyect">
            <h3>"Comida Para Todos"</h3>
            <img className="imgCpt" src={cpt} alt="CPT" />
            <div className="containerBtnMasP">
              <BtnMas />
            </div>
          </div>
          <div className="containerProyect">
            <h3>"Burguer Kingdom"</h3>
            <img className="imgBk" src={bk} alt="BurguerKingdom" />
            <div className="containerBtnMasP">
              <BtnMas />
            </div>
          </div>
          <div className="containerProyect">
            <h3>"WIT"</h3>
            <img className="imgWit" src={wit} alt="WIT" />
            <div className="containerBtnMasP">
              <BtnMas click />
            </div>
          </div>
          <div className="containerProyect">
            <h3>"Pokeworld"</h3>
            <img className="imgPkw" src={pkw} alt="WIT" />
            <div className="containerBtnMasP">
              <BtnMas click />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </body>
  );
};

export default HomeProyects;
