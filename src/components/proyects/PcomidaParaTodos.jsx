import React from "react";
import "../../assets/styles/proyects/pCP.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//imagenes proyecto
import cpt1 from "../../assets/images/proyects/CPT/CPT1-1.svg";
import cpt2 from "../../assets/images/proyects/CPT/CPT2.svg";
import cpt3 from "../../assets/images/proyects/CPT/CPT3.svg";
import cpt4 from "../../assets/images/proyects/CPT/CPT4.svg";
import cpt5 from "../../assets/images/proyects/CPT/CPT5.svg";
// imagenes teem
import nb from "../../assets/images/proyects/CPT/TeemCpt/NB.svg";
import db from "../../assets/images/proyects/CPT/TeemCpt/DB.svg";
import am from "../../assets/images/proyects/CPT/TeemCpt/AM.svg";
import nq from "../../assets/images/proyects/NQ.svg";
//iconos tecnologias originalesx
import js from "../../assets/icon/tecnologiesProyects/jsO.svg";
import reactjs from "../../assets/icon/tecnologiesProyects/reactjsO.svg";
import css from "../../assets/icon/tecnologiesProyects/cssO.svg";
import sass from "../../assets/icon/tecnologiesProyects/sassO.svg";
import mu from "../../assets/icon/tecnologiesProyects/muO.svg";
import boots from "../../assets/icon/tecnologiesProyects/bootsO.svg";
// link contact
import mail from "../../assets/icon/linkContact/mail.svg";
import twiter from "../../assets/icon/linkContact/twiter.svg";
import linkedin from "../../assets/icon/linkContact/linkedin.svg";
import gitHub from "../../assets/icon/linkContact/gitHub.svg";

// boton return
// import BtnReturn from "./BtnReturn";
// import Footer from "../footer/Footer";
// import BtnDownP from "./BtnDownP";
import NavBarProyects from "../proyects/NavbarProyects";

const PcomidaParaTodos = () => {
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
    <body id="cptView" className="containerViewCpt">
      <div className="cptBody">
        {/* <BtnDownP /> */}
        <div className="containerSlider">
          <Slider {...settings}>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={cpt1} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={cpt2} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={cpt3} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={cpt4} alt="" />
            </div>
            <div className="containerImgPtc">
              <img className="imgSliderPtc" src={cpt5} alt="" />
            </div>
          </Slider>
        </div>
        <div className="containerSection">
          <h2 className="titleSection">"Comida Para Todos"</h2>
          <div className="containerPtextcpt">
            <p>
              Rediseño de página web de ONG Comidas para todos. Es una
              plataforma solidaria que nace de la unión de organizaciones
              sociales, que busca salvaguardar la Seguridad Alimentaria. Se
              trabajó junto a un equipo multidisciplinario entre UX y Frontend
              creando una nueva opción de plataforma, diseñando una nueva opción
              de formulario de pago y acceso de información relevante a la
              organización.
            </p>
          </div>
          <div className="containerTeemCpt">
            <h2>Equipo</h2>
            <div className="containerPictTeem">
              <div className="containerImgName">
                <a href="/">
                  <img
                    src={nb}
                    alt="Namastheys Bastardo"
                    className="imgCptTeem"
                  />
                </a>
                <h4>UX</h4>
                <p>Namastheys Bastardo</p>
              </div>
              <div className="containerImgName">
                <a href="/">
                  <img src={db} alt="Daniela  blanco" className="imgCptTeem" />
                </a>
                <h4>Front end Developer</h4>
                <p>Daniela Blanco</p>
              </div>
              <div className="containerImgName">
                <a href="/">
                  <img src={am} alt="" className="imgCptTeem" />
                </a>
                <h4>Front end Developer</h4>
                <p>Algris Marquez</p>
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
              <h2>"Comida Para Todos"</h2>
              <h3>Tecnologías</h3>
              <div className="containerGralImgTec">
                <img src={js} alt="js" className="imgTec" />

                <img src={reactjs} alt="react" className="imgTec" />

                <img src={css} alt="css" className="imgTec" />

                <img src={sass} alt="sass" className="imgTec" />

                <img src={mu} alt="mu" className="imgTec" />

                <img src={boots} alt="boots" className="imgTec" />
              </div>
            </div>
            <div className="containerLinks">
              <h3>Ver Más</h3>
              <div className="containerDeploy">
                <p>Link Deploy</p>
                <a href="https://comida-para-todos-9fe1e.web.app/">
                  https://comida-para-todos-9fe1e.web.app/
                </a>
                <div className="lineSep"></div>
              </div>
              <div className="containerGitHub">
                <p>Link Repositorio GitHub</p>
                <a href="https://github.com/nsquezadam/comida-para-todos-">
                  https://github.com/nsquezadam/comida-para-todos-
                </a>
                <div className="lineSep"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="containerTec-linksDesk">
        <div className="containerTecnologiesDesk">
          <h2>"Comida Para Todos"</h2>
          <h3>Tecnologías</h3>
          <div className="containerGralImgTecDesk">
            <img src={js} alt="js" className="imgTec" />

            <img src={reactjs} alt="react" className="imgTec" />

            <img src={css} alt="css" className="imgTec" />

            <img src={sass} alt="sass" className="imgTec" />

            <img src={mu} alt="mu" className="imgTec" />

            <img src={boots} alt="boots" className="imgTec" />
          </div>
        </div>
        <div className="containerLinksDesk">
          <h3>Ver Más</h3>
          <div className="containerDepaGit">
            <p>Link Deploy</p>
            <a href="https://comida-para-todos-9fe1e.web.app/">
              https://comida-para-todos-9fe1e.web.app/
            </a>
            <div className="lineSepdesk"></div>
          </div>
          <div className="containerDepaGit">
            <p>Link Repositorio GitHub</p>
            <a href="https://github.com/nsquezadam/comida-para-todos-">
              https://github.com/nsquezadam/comida-para-todos-
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

      <div className="containerNavbar">
        <NavBarProyects />
      </div>
    </body>
  );
};

export default PcomidaParaTodos;
