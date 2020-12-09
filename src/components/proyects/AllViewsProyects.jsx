import React from "react";
import PcomidaParaTodos from "./PcomidaParaTodos";
// import Footer from "../footer/Footer";
import Pwit from "./Pwit";
import Ppokeworld from "./Ppokeworld";
import PburguerKingdom from "./PburguerKingdom";
// import NavBarProyects from "./NavbarProyects";

const AllViewsProyects = () => {
  return (
    <div>
      <PcomidaParaTodos />
      <PburguerKingdom />
      <Pwit />
      <Ppokeworld />
      {/* <NavBarProyects /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default AllViewsProyects;
