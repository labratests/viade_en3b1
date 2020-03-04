import React from "react";
import "typeface-roboto";
import logo from "../logo.svg";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { LoginButton, LogoutButton, AuthButton } from '@solid/react';

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

        <AuthButton popup="https://solid.community/common/popup.html" login="Login here!" logout="Log me out"/>
      </header>
    </div>
  );
};

export default Main;
