import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Login from "../services/login/Login.js";
import { LoggedOut, LoggedIn } from '@solid/react';
import {Link} from '@material-ui/core';
import "typeface-roboto";
import MisRutas from './MisRutas.js';

const NavBar = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >
          <LoggedIn><Link underline='none' color='inherit' href={'#/dashboard'} className={classes.title}>Viade</Link></LoggedIn>
          <LoggedOut><Link underline='none' color='inherit' href={'#/welcome'} className={classes.title}>Viade</Link></LoggedOut>

          <MisRutas></MisRutas>
          <LoggedOut><Button className={classes.menuButton} href={"#/register"} color="inherit">Sign up</Button></LoggedOut>
          <Login />
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 20,
    letterSpacing: 1,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menu: {
    width: 150,
  }
}));

export default NavBar;