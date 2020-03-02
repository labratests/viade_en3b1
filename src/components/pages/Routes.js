import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import  Main  from "./Main.jsx";
import  PageNotFound from "./PageNotFound.jsx";

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/404" component={PageNotFound} />
        <Redirect exact from="/" to="/welcome" />
        <Route exact path="/welcome" component={Main} />
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </Router>
);

export default Routes;
