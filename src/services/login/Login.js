import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { LoggedIn, LoggedOut, AuthButton } from '@solid/react';
import NavBar from '../../graphic interface/NavBar';
import SpacingGrid from '../../graphic interface/MainContainer';


const auth = require('solid-auth-client');

class Login extends React.Component {

    async popupLogin(auth) {
        let session = await auth.currentSession();
        let popupUri = 'https://solid.community/common/popup.html';
        if (!session) {
            session = await auth.popupLogin({ popupUri });
        }

        return (`${session.webId}`);
    };

    logout(auth) {
        auth.logout().then(() => alert('Goodbye!'));
    };

    render() {
        return (
            <div>
                <LoggedOut>
                    <Button variant="outlined" color="inherit" onClick={() => this.popupLogin(auth)}>Sign in</Button>
                </LoggedOut>
                <LoggedIn>
                    <div>
                        <Button variant="outlined" color="inherit" onClick={() => this.logout(auth)}>Sign out</Button>
                    </div>
                </LoggedIn>
            </div>
        );
    }
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