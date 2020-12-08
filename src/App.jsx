import React, { Fragment } from "react";
import InitialPage from "../src/components/homepage/InitialPage";
import AboutMe from "../src/components/about/AboutMe";
import HabAndKnowledge from "../src/components/about/HabAndKnowledge";
import HomeProyects from "../src/components/proyects/HomeProyects";
import Navbar from "../src/components/homepage/Navbar";
import Logo from "../src/components/homepage/Logo";
import Footer from "../src/components/footer/Footer";
// import PcomidaParaTodos from "../src/components/proyects/PcomidaParaTodos";
// import PburguerKingdom from "../src/components/proyects/PburguerKingdom";

import "./App.css";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <div className="App">
        {/* <PburguerKingdom /> */}
        <Logo />
        <InitialPage />
        <AboutMe />
        <HabAndKnowledge />
        <HomeProyects />
        <Navbar />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
//
