import React, { Component } from 'react';
import { LoggedIn } from '@solid/react';
import { Button } from '@material-ui/core';

// This component is redered as a button 'Dasboard', which will redirect the user to the 
// dashboard section or the Login section, whether it's logged or not.
export class Dashboard extends Component {  

    render() {
        return (
            <div>
                <LoggedIn>
                    <Button  href={"#/dashboard"} color="inherit">Dashboard</Button>
                </LoggedIn>
            </div>
        );
    }
}

export default Dashboard;
