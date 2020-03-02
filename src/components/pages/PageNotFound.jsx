import React, { Fragment } from 'react';
import "typeface-roboto";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h2>Sorry, there's nothing to see here</h2>
            <p>Go back to <Link to="/">Home</Link></p>
        </div>
    );
}

export default PageNotFound;
