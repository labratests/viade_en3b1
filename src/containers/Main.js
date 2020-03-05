import React from "react";
import "typeface-roboto";
import logo from "../logo.svg";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from '@material-ui/core';

const Main = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          In development.
        </p>
        <Router>
          <Link href="/login" variant="body2">Sign in</Link>
        </Router>
      </header>
    </div>
  );
};

export default Main;
