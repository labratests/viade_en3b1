import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MyRouteCard from './MyRouteCard';
import { LoggedIn } from '@solid/react';
import { Card } from '@material-ui/core';
import Route from'../../entities/Route.js';
import RouteElement from'../../entities/RouteElement.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ListUserRoutes() {
  const [spacing] = React.useState(2);
  const classes = useStyles();



  let routes=[
    new Route('ruta1','08/04/2020',123,'ruta larga',[
      new RouteElement(1,43.359683,-5.850272,0),
      new RouteElement(1,43.361770, -5.848060,0),
      new RouteElement(1,43.363291, -5.850281,0),
      new RouteElement(1,43.362667, -5.851740,0),
      new RouteElement(1,43.364970, -5.853963,0)
    ]),
    new Route('ruta2','15/02/2020',15,'ruta muy corta',[
      new RouteElement(1,43.556428, -5.926715,0),
      new RouteElement(1,43.557540, -5.922617,0)
    ]),
    new Route('ruta3','01/01/2020',260,'ruta muy larga',[
      new RouteElement(1,43.526225, -5.669465,0),
      new RouteElement(1,43.533587, -5.683302,0),
      new RouteElement(1,43.540584, -5.693542,0),
      new RouteElement(1,43.549988, -5.708704,0),
      new RouteElement(1,43.551855, -5.716201,0)
    ]),
    new Route('ruta4','25/11/2019',64,'ruta corta',[
      new RouteElement(1,43.312144,-5.695810,0),
      new RouteElement(1,43.309761,-5.691106,0),
      new RouteElement(1,43.305206,-5.688753,0)
    ])
  ];

  
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
        {routes.map(each => (
          <Grid item>
          <LoggedIn>
            <MyRouteCard route={each} />
          </LoggedIn>
        </Grid>
        ))}
        </Grid>
      </Grid>
    </Grid>
  );
}