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

export default function CardMain() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Username
        </Typography>
        <Typography variant="h5" component="h2">
          Route Name
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Distance: 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Time: 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          _____________________
        </Typography>
        <Typography variant="h5" component="h2">
          SPACE TO INSERT THE MAP
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          _____________________
        </Typography>
      </CardContent>
    </Card>
  );
}