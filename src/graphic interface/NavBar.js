import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import amber from '@material-ui/core/colors/amber';

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="title" color="inherit">viade_en3b</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;