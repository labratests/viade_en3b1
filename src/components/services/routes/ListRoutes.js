import React, { Component } from 'react';
import { LoggedIn } from '@solid/react';
import { Button } from '@material-ui/core';

// This component is redered as a button 'Dasboard', which will redirect the user to the 
// dashboard section or the Login section, whether it's logged or not.
export class ListRoutes extends Component {  

    render() {
        return (
            <div>
                <LoggedIn>
                    <Button  href={"#/myroutes"} color="inherit">My Routes</Button>
                </LoggedIn>
            </div>
        );
    }
}

export default ListRoutes;