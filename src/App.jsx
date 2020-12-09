import React, { Fragment } from "react";
import InitialPage from "../src/components/homepage/InitialPage";
import AboutMe from "../src/components/about/AboutMe";
import HabAndKnowledge from "../src/components/about/HabAndKnowledge";
// import HomeProyects from "../src/components/proyects/HomeProyects";
//import Navbar from "../src/components/homepage/Navbar";
import Logo from "../src/components/homepage/Logo";
import Footer from "../src/components/footer/Footer";
import ProyectViewsR from "../src/components/proyects/ProyectViewsR";
// views proyecto
// import PcomidaParaTodos from "../src/components/proyects/PcomidaParaTodos";
// import PburguerKingdom from "../src/components/proyects/PburguerKingdom";
//import Pwit from "../src/components/proyects/Pwit";
// import Ppokeworld from "../src/components/proyects/Ppokeworld";
// import AllViewsProyects from "../src/components/proyects/AllViewsProyects";

import "./App.css";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <div className="App">
        {/* <AllViewsProyects /> */}
        <Logo />
        <InitialPage />
        <AboutMe />
        <HabAndKnowledge />
        <ProyectViewsR />
        {/* <Navbar /> */}
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
//
