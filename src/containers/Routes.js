import React, { Fragment } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Main  from "./Main.js";
import Welcome  from "./Welcome.js";
import PageNotFound from "./PageNotFound.js";
import Register from '../services/register/Register.js';

const Routes = () => (
  <HashRouter>
    <Fragment>
      <Switch>
        <Route exact path="/404" component={PageNotFound} />
        <Redirect exact from="/" to="/welcome" />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/dashboard" component={Main} />
        <Route exact path="/register" component={Register}/>
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </HashRouter>
);

export default Routes;
