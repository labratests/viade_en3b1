import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DemoMap from '../map/DemoMap.js'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    pos: {
      marginBottom: 12,
      marginTop: 12,
    },
  });

export default function MyRouteCard() {
  const classes = useStyles();

  return (
    <Card elevation={5} className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Route Name
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Date: 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Distance: 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Time: 
        </Typography>
        <Typography variant="h5" component="h2">
          <DemoMap></DemoMap>
        </Typography>
      </CardContent>
    </Card>
  );
}