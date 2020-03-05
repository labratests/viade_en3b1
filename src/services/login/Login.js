import React from 'react'
import { Typography, Card, CardContent, Button } from '@material-ui/core';
import { LoggedIn, LoggedOut, AuthButton } from '@solid/react';

function Login() {

    const auth = require('solid-auth-client');
    popupLogin(auth);
    
    function logout(auth) {
        auth.logout().then(() => alert('Goodbye!'));
    }

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
                <Card>
                    <CardContent>
                        <Typography variant="h2" color="secondary">Login successful!</Typography>
                        <Typography variant="h4" >Logged in as </Typography>
                        <Button variant="outlined" color="secondary" onClick={() => logout(auth)}>Log out</Button>
                    </CardContent>
                </Card>
            </LoggedIn>
        </div>
    )
}

async function popupLogin(auth) {
    let session = await auth.currentSession();
    let popupUri = 'https://solid.community/common/popup.html';
    if (!session)
        session = await auth.popupLogin({ popupUri });

    return (`${session.webId}`);
}

export default Login
