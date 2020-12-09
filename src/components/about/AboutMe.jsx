import React, { Fragment } from "react";
import "../../assets/styles/about/AboutMe.css";

import me from "../../assets/images/me.svg";

import hobbike from "../../assets/icon/hobbies/hobbike.svg";
import hobcards from "../../assets/icon/hobbies/hobcards.svg";
import hobcinema from "../../assets/icon/hobbies/hobcinema.svg";
import hobgamecel from "../../assets/icon/hobbies/hobgamecel.svg";
import hobgameold from "../../assets/icon/hobbies/hobgameold.svg";
import hobmusic from "../../assets/icon/hobbies/hobmusic.svg";
import hobnetflix from "../../assets/icon/hobbies/hobnetflix.svg";
import hobpaseo from "../../assets/icon/hobbies/hobpaseo.svg";

import Navbar from "../homepage/Navbar";

const AboutMe = () => {
  return (
    <Fragment>
      <body id="aboutPage" className="abouPageFirtsCape">
        <div className="bodyAboutMe">
          <h2>Sobre Mi</h2>
          <div className="textAboutme">
            <div className="containerTexAndImg">
              <div className="textP">
                <p>
                  <img className="mePicture" src={me} alt="me" />
                  Natalia Quezada es mi nombre, soy Front-end Developer Junior ,
                  soy egresada de Laboratoria. Con mucha valentía dirigí mi
                  rumbo a esta hermosa y apasionante profesión, me apasiona
                  enormemente lo que hago. Soy mamá de un niño de 10 años y un
                  gatuno de 19 años. Llevo más de 15 años en el mundo laboral
                  trabajando principalmente enfocada a los procesos de venta ,
                  servicio al cliente. Mi compromiso y meta siempre han sido
                  enfocadas a seguir creciendo y desarrollandome como ser humano
                  y profesional. Me gusta trabajar en equipo, aprender cosas
                  nuevas he fortalecido en este tiempo mi capacidad de
                  autoaprendizaje , enfrentar la incertidumbre y los cambios
                  constantes que propone la vida .
                </p>
              </div>
              {/* <div className="containerPic"></div> */}
            </div>
          </div>
          <div className="hobbies">
            <h2>Hobbies</h2>
            <div className="containerHobbies">
              <div className="containerImgH">
                <img src={hobbike} alt="hobbike" className="imgHob" />
              </div>
              <div className="containerImgH">
                <img src={hobnetflix} alt="hobnetflix" className="imgHob" />
              </div>
              <div className="containerImgH">
                <img src={hobcinema} alt="hobcinema" className="imgHob" />
              </div>
              <div className="containerImgH">
                <img src={hobgamecel} alt="hobgamecel" className="imgHob" />
              </div>
              <div className="containerImg">
                <img src={hobgameold} alt="hobgameold" className="imgHob" />
              </div>
              <div className="containerImgH">
                <img src={hobmusic} alt="hobmusic" className="imgHob" />
              </div>
              <div className="containerImgH">
                <img src={hobcards} alt="hobcards" className="imgHob" />
              </div>
              <div className="containerImgH">
                <img src={hobpaseo} alt="hobpaseo" className="imgHob" />
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </body>
    </Fragment>
  );
};

export default AboutMe;
