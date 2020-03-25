import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MyRouteCard from './MyRouteCard';
import { LoggedIn } from '@solid/react';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ListUserRoutes() {
  const [spacing] = React.useState(2);
  const classes = useStyles();



  let size=[];
  for (let index = 0; index < 5; index++) {
     size.push(1); 
  }

  
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
        {size.map(card => (
          <Grid item>
          <LoggedIn>
            <MyRouteCard />
          </LoggedIn>
        </Grid>
        ))}
        </Grid>
      </Grid>
    </Grid>
  );
}