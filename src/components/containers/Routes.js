import React, { Fragment } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Main  from "./main/Main.js";
import Welcome  from "./welcome/Welcome.js";
import PageNotFound from "./pagenotfound/PageNotFound.js";
import Register from '../services/register/Register.js';
import UserRoutes from './routes/UserRoutes.js';
import RouteDetails from './routes/RouteDetails.js';

const Routes = () => (
  <HashRouter>
    <Fragment>
      <Switch>
        <Route exact path="/404" component={PageNotFound} />
        <Redirect exact from="/" to="/welcome" />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/myroutes" component={UserRoutes}/>
        <Route exact path="/dashboard" component={Main} />
        <Route exact path="/register" component={Register}/>
        <Route exact path="/RouteDetails/:id" component={RouteDetails}/>
        <Redirect to="/404" />
      </Switch>
    </Fragment>
  </HashRouter>
);

export default Routes;
