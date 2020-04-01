import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DetailsMap from '../map/DetailsMap.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function RouteDetails(props) {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Card elevation={5} className={classes.root}>
            <CardContent>
                <Typography  variant="h5" component="h2">
                    {props.route.name}
                </Typography>
                <Typography className={classes.pos}>
                    <DetailsMap route={props.route}></DetailsMap>
                </Typography>
                <Typography className={classes.pos} >
                    Date: {props.route.date}
                </Typography>
                <Typography className={classes.pos} >
                    Distance: {props.route.totalDistance}
                </Typography>
                <Typography className={classes.pos} >
                    Time: {props.route.time}
                </Typography>
                <Typography className={classes.pos} >
                    Description: 
                </Typography>
                <Typography className={classes.pos} >
                    {props.route.getDescription()}
                </Typography>
                <Typography className={classes.pos} >
                    Coments: 
                </Typography>
                {
                    Array.isArray(props.route.getComments()) && //is empty??
                        props.route.getComments().map((comment)=>
                        (
                            <Typography className={classes.pos} >
                                {comment}
                            </Typography>
                        )
                        )
                }
                
            </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}