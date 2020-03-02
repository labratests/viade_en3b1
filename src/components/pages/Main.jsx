import React from "react";
import "typeface-roboto";
import logo from "../../logo.svg";
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Main = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          In development.
        </p>
        <Router>
          <Link to="/welcome">Home</Link>
        </Router>
      </header>
    </div>
  );
};

export default Main;
