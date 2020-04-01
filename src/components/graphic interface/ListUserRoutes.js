import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MyRouteCard from './MyRouteCard';
import { LoggedIn } from '@solid/react';
import { Card } from '@material-ui/core';
import cache from '../../cache/RoutesChache';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export class ListUserRoutes extends Component {

  constructor() {
    super();
    this.state = {
      routes: cache.getRoutes()
    };
  }

  sizeFunction() {
    let size = [];
    for (let index = 0; index < 5; index++) {
      size.push(1);
    }
  }

  render() {

    const { routes } = this.state;
    
    console.log("LIST USER ROUTES");
    console.log(routes);
    

    return (
      <Grid container style={{ flexGrow: 1 }} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {routes.map(card => (
              <Grid item>
                <LoggedIn>
                  <MyRouteCard route={card} />
                </LoggedIn>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default ListUserRoutes;