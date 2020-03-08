import React, { Fragment } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import  Main  from "./Main.js";
import  PageNotFound from "./PageNotFound.js";
import Login from "../services/login/Login.js";

const Routes = () => (
  <HashRouter>
    <Fragment>
      <Switch>
        <Route exact path="/404" component={PageNotFound} />
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home" component={Main} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </HashRouter>
);

export default Routes;