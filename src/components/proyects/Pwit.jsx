import React from "react";
// import "../../assets/styles/proyects/pWIT.css";
import "../../assets/styles/proyects/pCP.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//imagenes proyecto
import wit1 from "../../assets/images/proyects/WIT/WIT1-1.svg";
import wit2 from "../../assets/images/proyects/WIT/WIT2.svg";
import wit3 from "../../assets/images/proyects/WIT/WIT3.svg";
import wit4 from "../../assets/images/proyects/WIT/WIT4.svg";

// imagenes teem
import jg from "../../assets/images/proyects/WIT/TeemWit/JG.svg";
import cj from "../../assets/images/proyects/WIT/TeemWit/CJ.svg";
import nq from "../../assets/images/proyects/NQ.svg";
//iconos tecnologias originalesx
import js from "../../assets/icon/tecnologiesProyects/jsO.svg";
import html5 from "../../assets/icon/tecnologiesProyects/html5O.svg";
import css from "../../assets/icon/tecnologiesProyects/cssO.svg";
import firebase from "../../assets/icon/tecnologiesProyects/firebaseO.svg";
// link contact
import mail from "../../assets/icon/linkContact/mail.svg";
import twiter from "../../assets/icon/linkContact/twiter.svg";
import linkedin from "../../assets/icon/linkContact/linkedin.svg";
import gitHub from "../../assets/icon/linkContact/gitHub.svg";
// boton return
// import BtnReturn from "./BtnReturn";
// import Footer from "../footer/Footer";
// import BtnDownP from "./BtnDownP";

const Pwit = () => {
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
    <body id="witView" className="containerViewCpt">
      <div className="cptBody">
        {/* <BtnDownP /> */}
        <div className="containerSlider">
          <Slider {...settings}>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={wit1} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={wit2} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={wit3} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={wit4} alt="" />
            </div>
          </Slider>
        </div>
        <div className="containerSection">
          <h2>"WIT"</h2>
          <div className="containerPtextcpt">
            <p>
              WIT está dirigido a todas las mujeres que se encuentren dentro del
              mundo Tech, y que quieran buscar una comunidad de apoyo y
              desarrollo para poder seguir avanzando en romper la brecha de
              participación femenina en el área de la tecnología.
            </p>
          </div>
          <div className="containerTeemCpt">
            <h2>Equipo</h2>
            <div className="containerPictTeem">
              <div className="containerImgName">
                <a href="/">
                  <img src={jg} alt="Jeniffer Genoves" className="imgCptTeem" />
                </a>
                <h4>Front end Developer</h4>
                <p>Jeniffer Genoves</p>
              </div>
              <div className="containerImgName">
                <a href="/">
                  <img src={cj} alt="Catalina Jara" className="imgCptTeem" />
                </a>
                <h4>Front end Developer</h4>
                <p>Catalina Jara</p>
              </div>

              <div className="containerImgName">
                <a href="/">
                  <img src={nq} alt="Natalia Quezada" className="imgCptTeem" />
                </a>
                <h4>Front end Developer</h4>
                <p>Natalia Quezada</p>
              </div>
            </div>
          </div>
          <div className="containerTecnologies">
            <h2>Tecnologías</h2>
            <div className="containerGralImgTec">
              <img src={js} alt="js" className="imgTec" />

              <img src={html5} alt="html5" className="imgTec" />

              <img src={css} alt="css" className="imgTec" />

              <img src={firebase} alt="firebase" className="imgTec" />
            </div>
          </div>
          <div className="containerLinks">
            <h2>Ver Más</h2>
            <div className="containerDeploy">
              <p>Link Deploy</p>
              <a href="https://jeniffergenoves.github.io/SCL014-social-network/src/">
                https://jeniffergenoves.github.io/SCL014-social-network/src/
              </a>
              <div className="lineSep"></div>
            </div>
            <div className="containerGitHub">
              <p>Link Repositorio GitHub</p>
              <a href="https://github.com/nsquezadam/SCL014-social-network/tree/Desarrollo">
                https://github.com/nsquezadam/SCL014-social-network/
              </a>
              <div className="lineSep"></div>
            </div>
          </div>
          {/* <BtnReturn /> */}
        </div>

        {/* <Footer /> */}
      </div>
      <div className="containerTec-linksDesk">
        <div className="containerTecnologiesDesk">
          <h2>"Burguer Kingdom"</h2>
          <h3>Tecnologías</h3>
          <div className="containerGralImgTecDesk">
            <img src={js} alt="js" className="imgTec" />

            <img src={html5} alt="html5" className="imgTec" />

            <img src={css} alt="css" className="imgTec" />

            <img src={firebase} alt="firebase" className="imgTec" />
          </div>
        </div>

        <div className="containerLinksDesk">
          <h3>Ver Más</h3>
          <div className="containerDepaGit">
            <p>Link Deploy</p>
            <a href="https://jeniffergenoves.github.io/SCL014-social-network/src/">
              https://jeniffergenoves.github.io/SCL014-social-network/src/
            </a>
            <div className="lineSepdesk"></div>
          </div>
          <div className="containerDepaGit">
            <p>Link Repositorio GitHub</p>
            <a href="https://github.com/nsquezadam/SCL014-social-network/tree/Desarrollo">
              https://github.com/nsquezadam/SCL014-social-network/
            </a>
            <div className="lineSepdesk"></div>
          </div>
        </div>
        <div className="containerLinksContactDesk">
          <div className="containerLinksContactDetails">
            <div className="contImgLinks">
              <a href="mailto:nsquezadam@gmail.com" className="linkTo">
                <img
                  src={mail}
                  alt="nsquezadam@gmail.com"
                  className="linkIcons"
                />
              </a>
            </div>

            <div className="contImgLinks">
              <a
                href="https://twitter.com/Natalia79796659?s=08"
                className="linkTo"
              >
                <img
                  src={twiter}
                  alt="@Natalia79796659"
                  className="linkIcons"
                />
              </a>
            </div>

            <div className="contImgLinks">
              <a
                href="https://www.linkedin.com/in/nataliaquezadam"
                className="linkTo"
              >
                <img
                  src={linkedin}
                  alt="nataliaquezadam"
                  className="linkIcons"
                />
              </a>
            </div>

            <div className="contImgLinks">
              <a href="https://github.com/nsquezadam" className="linkTo">
                <img src={gitHub} alt="nsquezadam" className="linkIcons" />
              </a>
            </div>
          </div>
          <div className="lineUPdesk"></div>
        </div>
      </div>
      <div className="containerNavbar"></div>
    </body>
  );
};

export default Pwit;
