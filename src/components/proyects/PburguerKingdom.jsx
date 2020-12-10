import React from "react";
// import "../../assets/styles/proyects/pBK.css";
import "../../assets/styles/proyects/pCP.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//imagenes proyecto
import bk1 from "../../assets/images/proyects/BK/BK1.svg";
import bk2 from "../../assets/images/proyects/BK/BK2.svg";
import bk3 from "../../assets/images/proyects/BK/BK3.svg";
import bk4 from "../../assets/images/proyects/BK/BK4.svg";
import bk5 from "../../assets/images/proyects/BK/BK5.svg";
// imagenes teem
import aa from "../../assets/images/proyects/BK/TeemBk/AA.svg";
import pf from "../../assets/images/proyects/BK/TeemBk/PF.svg";
import nq from "../../assets/images/proyects/NQ.svg";
//iconos tecnologias originalesx
import js from "../../assets/icon/tecnologiesProyects/jsO.svg";
import reactjs from "../../assets/icon/tecnologiesProyects/reactjsO.svg";
import css from "../../assets/icon/tecnologiesProyects/cssO.svg";
import firebase from "../../assets/icon/tecnologiesProyects/firebaseO.svg";

// boton return
// import BtnReturn from "./BtnReturn";
// import Footer from "../footer/Footer";
// import BtnDownP from "./BtnDownP";
// import NavBarProyects from "./NavbarProyects";

const PburguerKingdom = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <body id="bkView" className="containerViewCpt">
      <div className="cptBody">
        {/* <BtnDownP /> */}
        <div className="containerSlider">
          <Slider {...settings}>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={bk1} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={bk2} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={bk3} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={bk4} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={bk5} alt="" />
            </div>
          </Slider>
        </div>
        <div className="containerSection">
          <h2>"Burguer Kingdom"</h2>
          <div className="containerPtextcpt">
            <p>
              Burger Kingdom web app, ha sido creada a partir de la idea de
              facilitar a meseros y cocineros la tarea de coordinación de
              pedidos. Nuestro proyecto está inspirado directamente en el
              universo "Disney Pixar".La idea de fondo es que la app cuenta con
              una usabilidad adecuada para todos los trabajadores del local, así
              evitar errores y mejorar los tiempos de procesos. Éste proyecto ha
              sido desarrollado con React js.
            </p>
          </div>
          <div className="containerTeemCpt">
            <h2>Equipo</h2>
            <div className="containerPictTeem">
              <div className="containerImgName">
                <a href="https://aneacevedo-d238a.web.app/">
                  <img src={aa} alt="Anelisse Acevedo" className="imgCptTeem" />
                </a>
                <p>Front end Developer</p>
                <p>Anelisse Acevedo</p>
              </div>
              <div className="containerImgName">
                <a href="https://paula-frias.web.app/">
                  <img src={pf} alt="Paula Frias" className="imgCptTeem" />
                </a>
                <p>Front end Developer</p>
                <p>Paula Frias</p>
              </div>
              <div className="containerImgName">
                <a href="/">
                  <img src={nq} alt="Natalia quezada" className="imgCptTeem" />
                </a>
                <p>Front end Developer</p>
                <p>Natalia Quezada</p>
              </div>
            </div>
          </div>
          <div className="containerTecnologies">
            <h2>Tecnologías</h2>
            <div className="containerGralImgTec">
              <img src={js} alt="js" className="imgTec" />

              <img src={reactjs} alt="react" className="imgTec" />

              <img src={css} alt="css" className="imgTec" />

              <img src={firebase} alt="firebase" className="imgTec" />
            </div>
          </div>
          <div className="containerLinks">
            <h2>Ver Más</h2>
            <div className="containerDeploy">
              <p>Link Deploy</p>
              <a href="https://burguer-queen-50550.web.app/">
                https://burguer-queen-50550.web.app/
              </a>
              <div className="lineSep"></div>
            </div>
            <div className="containerGitHub">
              <p>Link Repositorio GitHub</p>
              <a href="https://github.com/nsquezadam/Burger-Queen/tree/develop">
                https://github.com/nsquezadam/Burger-Queen/tree/develop
              </a>
              <div className="lineSep"></div>
            </div>
          </div>
          {/* <BtnReturn /> */}
        </div>
        {/* <NavBarProyects /> */}
        {/* <Footer /> */}
      </div>
    </body>
  );
};

export default PburguerKingdom;
