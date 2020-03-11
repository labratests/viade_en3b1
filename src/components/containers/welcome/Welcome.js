import React from 'react';
import NavBar from '../../graphic interface/NavBar.js';
import { Typography, Grid, Divider } from '@material-ui/core';
import 'typeface-roboto';

const Welcome = () => {

    return (
        <div>
            <NavBar />
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ marginTop: '40vh' }}
            >

                <Grid item xs={3}>
                    <Typography style={{marginBottom: '10px'}} variant="h4" color="inherit" align="center">Welcome to Viade.</Typography>
                    <Divider />
                    <Typography style={{marginTop: '10px'}} variant="body1" color="inherit" align="center">The first routes management system based on SOLID technology.</Typography>
                </Grid>

            </Grid>
        </div>
    );
}

export default Welcome;
