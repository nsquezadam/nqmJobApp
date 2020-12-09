import React from "react";
import "../../assets/styles/about/btnCv.css";

import cv from "../../assets/doc/cv-NataliaQuezada.pdf";

const BtnCv = () => {
  const handleClick = () => {
    console.log("workit");
  };

  return (
    <div className="containerBtnCv">
      <a
        href={cv}
        className="btnCv"
        onClick={handleClick}
        download="cv-NataliaQuezada.pdf"
      >
        Mi CV (pdf)
      </a>
    </div>
  );
};

export default BtnCv;
