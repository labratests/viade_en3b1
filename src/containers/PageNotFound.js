import React from 'react';
import "typeface-roboto";
import { Link } from '@material-ui/core';

const PageNotFound = () => {
    return (
        <div>
            <h2>Sorry, there's nothing to see here</h2>
            <p>Go back to <Link href="/">Home</Link></p>
        </div>
    );
}

export default PageNotFound;
