import React from "react";
import arrowDown1 from "../../assets/icon/arrowDown1.svg";
import "../../assets/styles/proyects/btnDown.css";

const BtnDownP = () => {
  return (
    <div className="containerBtnDown">
      <img
        className="btnDown"
        src={arrowDown1}
        alt="Arrow"
        onClick={() => window.scrollTo(0, 1250)}
      />
    </div>
  );
};

export default BtnDownP;
