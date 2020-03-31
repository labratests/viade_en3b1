import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MapSnapshot from '../map/MapSnapshot.js'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    pos: {
      marginBottom: 12,
      marginTop: 12,
    },
  });

export default function MyRouteCard(props) {
  const classes = useStyles();
  return (
    <Card elevation={5} className={classes.root}>
      <CardContent>
        <Typography  variant="h5" component="h2">
          {props.route.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Date: {props.route.date}
        </Typography>
        <Typography variant="h5" component="h2">
          <MapSnapshot route={props.route}></MapSnapshot>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Distance: {props.route.totalDistance}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Time: {props.route.time}
        </Typography>
        <Typography className={classes.pos} >
          <Button className={classes.menuButton} href={"#/RouteDetails/"+props.route.name} color="inherit">Details</Button>
        </Typography>
      </CardContent>
    </Card>
  );
}