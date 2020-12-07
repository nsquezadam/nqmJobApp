import React from "react";
import arrowReturn from "../../assets/icon/arrowReturn.svg";
import "../../assets/styles/proyects/btnReturn.css";
// import { Link } from "react-router-dom";

const BtnReturn = () => {
  return (
    <div className="containerBtnReturn">
      <a href="#initialPage">
        <img src={arrowReturn} alt="return" className="btnArrowR" />{" "}
      </a>
    </div>
  );
};

export default BtnReturn;
