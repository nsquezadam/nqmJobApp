import React from "react";
// import "../../assets/styles/proyects/pPW.css";
import "../../assets/styles/proyects/pCP.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//imagenes proyecto
import pw1 from "../../assets/images/proyects/PW/PW1-1.svg";
import pw2 from "../../assets/images/proyects/PW/PW2.svg";
import pw3 from "../../assets/images/proyects/PW/PW3.svg";
import pw4 from "../../assets/images/proyects/PW/PW4.svg";

// imagenes teem
import mo from "../../assets/images/proyects/PW/TeemPw/MO.svg";
import lr from "../../assets/images/proyects/PW/TeemPw/LR.svg";

import nq from "../../assets/images/proyects/NQ.svg";
//iconos tecnologias originalesx
import js from "../../assets/icon/tecnologiesProyects/jsO.svg";
import html5 from "../../assets/icon/tecnologiesProyects/html5O.svg";
import css from "../../assets/icon/tecnologiesProyects/cssO.svg";
// link contact
import mail from "../../assets/icon/linkContact/mail.svg";
import twiter from "../../assets/icon/linkContact/twiter.svg";
import linkedin from "../../assets/icon/linkContact/linkedin.svg";
import gitHub from "../../assets/icon/linkContact/gitHub.svg";
// boton return
// import BtnReturn from "./BtnReturn";
// import Footer from "../footer/Footer";
// import BtnDownP from "./BtnDownP";

const Ppokeworld = () => {
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
    <body id="pwView" className="containerViewCpt">
      <div className="cptBody">
        {/* <BtnDownP /> */}
        <div className="containerSlider">
          <Slider {...settings}>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={pw1} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={pw2} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={pw3} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={pw4} alt="" />
            </div>
          </Slider>
        </div>
        <div className="containerSection">
          <h2 className="titleSection">"PokeWorld"</h2>
          <div className="containerPtextcpt">
            <p>
              Diseño y Creación de pagina web que ofrece una pokepedia, donde
              nos brinda una vasta información, detalla, concisa y clara sobre
              cada pokemon usado en el juego, lo cual a nuestro usuario
              recurrente le es de gran ayuda para poder seguir avanzando en sus
              siguientes batallas, y así seguir perfeccionándose como entrenador
              Pokémon. De igual manera ofrecemos información relevante, feed de
              noticias, comparativas, rankings, mapas y actualizaciones del
              juego.
            </p>
          </div>
          <div className="containerTeemCpt">
            <h2>Equipo</h2>
            <div className="containerPictTeem">
              <div className="containerImgName">
                <a href="/">
                  <img src={mo} alt="" className="imgCptTeem" />
                </a>
                <h4>UX</h4>
                <p>Mara Orbegoso</p>
              </div>
              <div className="containerImgName">
                <a href="/">
                  <img src={lr} alt="Lia Ramos" className="imgCptTeem" />
                </a>
                <h4>UX</h4>
                <p>Lia Ramos</p>
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
          <div className="containerTec-linksMov">
            <div className="containerTecnologies">
              <h2>"PokeWorld"</h2>
              <h3>Tecnologías</h3>
              <div className="containerGralImgTec">
                <img src={js} alt="js" className="imgTec" />

                <img src={html5} alt="react" className="imgTec" />

                <img src={css} alt="css" className="imgTec" />
              </div>
            </div>
            <div className="containerLinks">
              <h3>Ver Más</h3>
              <div className="containerDeploy">
                <p>Link Deploy</p>
                <a href="https://nsquezadam.github.io/SCL014-data-lovers/">
                  https://nsquezadam.github.io/SCL014-data-lovers/
                </a>
                <div className="lineSep"></div>
              </div>
              <div className="containerGitHub">
                <p>Link Repositorio GitHub</p>
                <a href="https://github.com/nsquezadam/SCL014-data-lovers">
                  https://github.com/nsquezadam/SCL014-data-lovers
                </a>
                <div className="lineSep"></div>
              </div>
            </div>
            {/* <BtnReturn /> */}
          </div>

          {/* <Footer /> */}
        </div>
      </div>
      <div className="containerTec-linksDesk">
        <div className="containerTecnologiesDesk">
          <h2>"PokeWorld"</h2>
          <h3>Tecnologías</h3>
          <div className="containerGralImgTecDesk">
            <img src={js} alt="js" className="imgTec" />

            <img src={html5} alt="react" className="imgTec" />

            <img src={css} alt="css" className="imgTec" />
          </div>
        </div>
        <div className="containerLinksDesk">
          <h3>Ver Más</h3>
          <div className="containerDepaGit">
            <p>Link Deploy</p>
            <a href="https://nsquezadam.github.io/SCL014-data-lovers/">
              https://nsquezadam.github.io/SCL014-data-lovers/
            </a>
            <div className="lineSepdesk"></div>
          </div>
          <div className="containerDepaGit">
            <p>Link Repositorio GitHub</p>
            <a href="https://github.com/nsquezadam/comida-para-todos-">
              https://github.com/nsquezadam/SCL014-data-lovers
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

export default Ppokeworld;
