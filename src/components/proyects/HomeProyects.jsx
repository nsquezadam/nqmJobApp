import React from "react";
import "../../assets/styles/proyects/homeProyects.css";
import cpt from "../../assets/images/proyects/cpt.svg";
import bk from "../../assets/images/proyects/bk.svg";
import wit from "../../assets/images/proyects/wit.svg";
import pkw from "../../assets/images/proyects/pkw.svg";
import BtnMas from "./BtnMas";
// import Navbar from "../homepage/Navbar";

const HomeProyects = () => {
  return (
    <body id="homeProyect" className="bodyHomeProyects">
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
            <BtnMas />
          </div>
        </div>
        <div className="containerProyect">
          <h3>"Pokeworld"</h3>
          <img className="imgPkw" src={pkw} alt="WIT" />
          <div className="containerBtnMasP">
            <BtnMas />
          </div>
        </div>
      </div>
      {/* <Navbar /> */}
    </body>
  );
};

export default HomeProyects;
