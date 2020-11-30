//import { Link } from "react-router-dom";
import "../../assets/styles/homepage/BtnPrincipal.css";

const BtnPrincipal = () => {
  const handleClickAbout = () => {
    console.log("funciono como boton");
  };
  return (
    <div className="containerBtn">
      <div className="btn">
        <a href="#aboutPage" className="btnInside" onClick={handleClickAbout}>
          ¡Conóceme!
        </a>
      </div>
    </div>
  );
};

export default BtnPrincipal;
