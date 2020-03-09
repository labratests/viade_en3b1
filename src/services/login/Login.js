import React from 'react';
import { Typography, Card, CardContent, Button } from '@material-ui/core';
import { LoggedIn, LoggedOut, AuthButton } from '@solid/react';
import NavBar from '../../graphic interface/NavBar';
import SpacingGrid from '../../graphic interface/MainContainer';

function Login() {

    async function popupLogin(auth) {
        let session = await auth.currentSession();
        let popupUri = 'https://solid.community/common/popup.html';
        if (!session){
            session = await auth.popupLogin({ popupUri });
        }
    
        return (`${session.webId}`);
    };

    const auth = require('solid-auth-client');
    popupLogin(auth);

    function logout(auth) {
        auth.logout().then(() => alert('Goodbye!'));
    };

    return (
        <div>
            <LoggedOut>
                <Card>
                    <CardContent>
                        <Typography variant="h2" color="primary">Signing In...</Typography>
                    </CardContent>
                </Card>
            </LoggedOut>
            <LoggedIn>
                <div>
                    <NavBar />
                    <Button variant="outlined" color="secondary" onClick={() => logout(auth)}>Log out</Button>
                </div>
                <div>
                    <SpacingGrid />
                </div>
            </LoggedIn>
        </div>
    );
}
/*
    <Card>
        <CardContent>
            <Typography variant="h2" color="secondary">Login successful!</Typography>
            <Typography variant="h4" >Logged in as </Typography>
            <Button variant="outlined" color="secondary" onClick={() => logout(auth)}>Log out</Button>
        </CardContent>
    </Card>
*/ 


export default Login;