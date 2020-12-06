import React from "react";
import "../../assets/styles/footer/sideBar.css";
import arrowUp from "../../assets/icon/arrowUp.svg";

const sideBar = () => {
  return (
    <div className="sidebar">
      <div className="containerBtnUp">
        <img
          className="btnUp"
          src={arrowUp}
          alt="Arrow"
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
      <div className="objectLineUpFoo"></div>
    </div>
  );
};

export default sideBar;
