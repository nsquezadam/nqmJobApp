import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeProyects from "./HomeProyects";
import AllViewsProyects from "./AllViewsProyects";
// router
const ProyectViewsR = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/HomeProyects" exact>
            <HomeProyects />
          </Route>

          <Route
            path="/AllViewsProyects"
            exact
            component={AllViewsProyects}
          ></Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default ProyectViewsR;
