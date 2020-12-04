import React, { Fragment } from "react";
import "../../assets/styles/about/AboutMe.css";
import Logo from "../homepage/Logo";
import me from "../../assets/images/me.svg";

import hobbike from "../../assets/icon/hobbies/hobbike.svg";
import hobcards from "../../assets/icon/hobbies/hobcards.svg";
import hobcinema from "../../assets/icon/hobbies/hobcinema.svg";
import hobgamecel from "../../assets/icon/hobbies/hobgamecel.svg";
import hobgameold from "../../assets/icon/hobbies/hobgameold.svg";
import hobmusic from "../../assets/icon/hobbies/hobmusic.svg";
import hobnetflix from "../../assets/icon/hobbies/hobnetflix.svg";
import hobpaseo from "../../assets/icon/hobbies/hobpaseo.svg";

//import Navbar from "../homepage/Navbar";
const AboutMe = () => {
  return (
    <Fragment>
      <div id="aboutPage" className="abouPageFirtsCape">
        <div className="aboutPageSecondCape">
          <div className="aboutContainerText">
            <div className="aboutPageThirdCape"></div>
            <body className="bodyAboutMe">
              <div className="containerLogoAboutMe">
                <Logo />
              </div>
              <h2>Sobre Mi</h2>
              <div className="textAboutme">
                <div className="containerTexAndImg">
                  <div className="textP">
                    <p>
                      <img className="mePicture" src={me} alt="me" />
                      Natalia Quezada es mi nombre, soy Front-end Developer
                      Junior , soy egresada de Laboratoria. Con mucha valentía
                      dirigí mi rumbo a esta hermosa y apasionante profesión, me
                      apasiona enormemente lo que hago. Soy mamá de un niño de
                      10 años y un gatuno de 19 años. Llevo más de 15 años en el
                      mundo laboral trabajando principalmente enfocada a los
                      procesos de venta , servicio al cliente. Mi compromiso y
                      meta siempre han sido enfocadas a seguir creciendo y
                      desarrollandome como ser humano y profesional. Me gusta
                      trabajar en equipo, aprender cosas nuevas he fortalecido
                      en este tiempo mi capacidad de autoaprendizaje , enfrentar
                      la incertidumbre y los cambios constantes que propone la
                      vida .
                    </p>
                  </div>
                  {/* <div className="containerPic"></div> */}
                </div>
              </div>
              <div className="hobbies">
                <h2>Hobbies</h2>
                <div className="containerHobbies">
                  <img src={hobbike} alt="hobbike" />
                  <img src={hobnetflix} alt="hobnetflix" />
                  <img src={hobcinema} alt="hobcinema" />
                  <img src={hobgamecel} alt="hobgamecel" />
                  <img src={hobgameold} alt="hobgameold" />
                  <img src={hobmusic} alt="hobmusic" />
                  <img src={hobcards} alt="hobcards" />
                  <img src={hobpaseo} alt="hobpaseo" />
                </div>
              </div>
            </body>
            {/* <Navbar /> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
