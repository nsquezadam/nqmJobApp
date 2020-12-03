import React, { Fragment } from "react";
import Logo from "../homepage/Logo";
import "../../../src/assets/styles/about/habAndKnowledge.css";

// import agil from "../../assets/icon/abilities/agil.svg";
// import analisis from "../../assets/icon/abilities/analisis.svg";
// import autoaprendizaje from "../../assets/icon/abilities/autoaprendizaje.svg";
// import gtiempo from "../../assets/icon/abilities/gtiempo.svg";
// import resolucion from "../../assets/icon/abilities/resolucion.svg";
// import teem from "../../assets/icon/abilities/teem.svg";

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
            </body>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HabAndKnowledge;
