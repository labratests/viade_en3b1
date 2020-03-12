import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Login from "../services/login/Login.js";
import { LoggedOut } from '@solid/react';
import Dashboard from '../services/dashboard/Dashboard.js';
import { Link } from '@material-ui/core';
import "typeface-roboto";

const NavBar = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar >
                    <Link underline='none' color='inherit' href={'#/welcome'} className={classes.title}>Viade</Link>
                    <Dashboard className={classes.menuButton}/>
                    <LoggedOut><Button className={classes.menuButton} href={"#/register"} color="inherit">Sign up</Button></LoggedOut>
                    <Login/>
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
}));

export default NavBar;