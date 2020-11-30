import React from "react";
import InitialPage from "../src/components/homepage/InitialPage";
import AboutMe from "../src/components/about/AboutMe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <InitialPage />
      <AboutMe />
    </div>
  );
}

export default App;
