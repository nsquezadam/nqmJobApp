import React, { Fragment } from "react";
import Logo from "../homepage/Logo";
import BtnCv from "../about/BtnCv";
import "../../../src/assets/styles/about/habAndKnowledge.css";

import agil from "../../assets/icon/habilities/agil.svg";
import analisis from "../../assets/icon/habilities/analisis.svg";
import autoaprendizaje from "../../assets/icon/habilities/autoaprendizaje.svg";
import gtiempo from "../../assets/icon/habilities/gtiempo.svg";
import resolucion from "../../assets/icon/habilities/resolucion.svg";
import teem from "../../assets/icon/habilities/teem.svg";

import css from "../../assets/icon/knowledge/css.svg";
import figma from "../../assets/icon/knowledge/figma.svg";
import firebase from "../../assets/icon/knowledge/firebase.svg";
import git from "../../assets/icon/knowledge/git.svg";
import html5 from "../../assets/icon/knowledge/html5.svg";
import js from "../../assets/icon/knowledge/js.svg";
import reactjs from "../../assets/icon/knowledge/reactjs.svg";
import sass from "../../assets/icon/knowledge/sass.svg";
import trello from "../../assets/icon/knowledge/trello.svg";

const HabAndKnowledge = () => {
  return (
    <Fragment>
      <div id="habAndKnowPage" className="habAndKnowCapeFirts">
        <div className="habAndKnowCapeSecond">
          <div className="containerSkillsThirdCape">
            <div className="habAndKnowCapeForth"></div>
            <body className="bodyHabAndKnow">
              <div className="containerLogoHabAndKnow">
                <Logo />
              </div>
              <div className="containerTitleAndHabandKnow">
                <div className="containerTitleAndHab">
                  <h2>Habilidades</h2>
                  <div className="containerHab">
                    <img src={teem} alt="teem" className="teem" />
                    <img src={agil} alt="agil" className="agil" />
                    <img
                      src={autoaprendizaje}
                      alt="autoaprendizaje"
                      className="autoaprendizaje"
                    />
                    <img src={analisis} alt="analisis" className="analisis" />

                    <img src={gtiempo} alt="gtiempo" className="gtiempo" />
                    <img
                      src={resolucion}
                      alt="resolucion"
                      className="resolucion"
                    />
                  </div>
                </div>
                <div className="containerTitleAndKnow">
                  <h2>Conocimientos</h2>
                  <div className="containerKnow">
                    <img src={js} alt="js" className="js" />
                    <img src={html5} alt="html5" className="html5" />
                    <img src={css} alt="css" className="css" />
                    <img src={reactjs} alt="reactjs" className="reactjs" />
                    <img src={figma} alt="figma" className="figma" />
                    <img src={git} alt="git" className="git" />
                    <img src={trello} alt="trello" className="trello" />
                    <img src={sass} alt="sass" className="sass" />
                    <img src={firebase} alt="firebase" className="firebase" />
                  </div>
                </div>
              </div>
              <BtnCv />
            </body>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HabAndKnowledge;
