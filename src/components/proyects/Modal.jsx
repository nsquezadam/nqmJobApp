import React, { Component } from "react";
import Portal from "../../Portal";
import btnReturn from "../../assets/icon/arrowReturn.svg";
import "./modal.css";

class Modal extends Component {
  render() {
    const { children, toggle, active } = this.props;
    return (
      <Portal>
        {active && (
          <div className="wrapper">
            <div className="window">
              <a
                className="returnBtn"
                href="#/"
                // style={styles.returnBtn}
                onClick={toggle}
              >
                <img
                  src={btnReturn}
                  className="btnImg"
                  // style={styles.imgBtn}
                  alt="Regresar"
                />
              </a>
              <div>{children}</div>
              <a
                className="returnBtnDown"
                href="#/"
                // style={styles.returnBtnDown}
                onClick={toggle}
              >
                <img
                  src={btnReturn}
                  className="btnImg"
                  // style={styles.imgBtn}
                  alt="Regresar"
                />
              </a>
            </div>
          </div>
        )}
      </Portal>
    );
  }
}
// const styles = {
//   wrapper: {
//     position: "absolute",
//     width: "100vw",
//     heigth: "100vh",
//     display: "flex",
//     top: "300%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   window: {
//     position: "relative",
//     background: "#ffffff",
//     zIndex: 10,
//   },
//   returnBtn: {
//     position: "fixed",
//     top: "3vh",
//     right: "8vw",
//     borderStyles: "none",
//     textAlign: "center,",
//     zIndex: 11,
//   },
//   returnBtnDown: {
//     position: "absolute",
//     bottom: "15vh",
//     right: "8vw",
//     borderStyles: "none",
//     textAlign: "center,",
//     zIndex: 11,
//   },
//   imgBtn: {
//     width: "150%",
//     heigth: "150%",
//   },
// };

export default Modal;
