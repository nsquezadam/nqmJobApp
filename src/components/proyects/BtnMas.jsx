import React from "react";
import "../../assets/styles/proyects/btnMas.css";

const BtnMas = (props) => {
  return (
    <div className="containerBtnMas">
      <button className="btnMas" onClick={props.click}>
        Saber Más
      </button>
    </div>
  );
};

export default BtnMas;
