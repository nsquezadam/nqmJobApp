import React from "react";
import InitialPage from "../src/components/homepage/InitialPage";
import AboutMe from "../src/components/about/AboutMe";
import HabAndKnowledge from "../src/components/about/HabAndKnowledge";
import Navbar from "../src/components/homepage/Navbar";

import "./App.css";

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <InitialPage />
      <AboutMe />
      <HabAndKnowledge />
      <Navbar />
    </div>
  );
}

export default App;
//
