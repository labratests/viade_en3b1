import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import  Main  from "./Main.js";
import  PageNotFound from "./PageNotFound.js";

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/404" component={PageNotFound} />
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" component={Main} />
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
