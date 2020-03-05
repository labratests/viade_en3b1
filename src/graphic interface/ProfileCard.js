import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardProfile() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Username
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          friends: 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          activities: 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          _____________________
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          My last activity: 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          _____________________
        </Typography>
      </CardContent>
    </Card>
  );
}