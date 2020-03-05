import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function CardRouteManagement() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
          <CardContent>
        <Typography variant="h5" component="h2">
          Route Management
        </Typography>
      </CardContent>
        <CardActions>
            <Button size="small">Add route</Button>
        </CardActions>
        <CardActions>
            <Button size="small">Share route</Button>
        </CardActions>
      </Card>
    );
  }