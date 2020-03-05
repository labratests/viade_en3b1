import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardProfile from './ProfileCard';
import CardRouteManagement from './RoutesManagementCard';
import FriendsManagement from './FriendsCard';
import CardMain from './MainCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
            <Grid item>
              <CardProfile />
              <CardRouteManagement />
            </Grid>
            <Grid item>
                <CardMain />
            </Grid>
            <Grid item >
                <FriendsManagement />
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}