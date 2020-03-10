import React from 'react';
import NavBar from './graphic interface/NavBar';
import SpacingGrid from './graphic interface/MainContainer';
import "./App.css";
import Routes from "./containers/Routes.js";
import Login from "./services/login/Login";

/*function App() {
  return (
    <Routes />
  );
}*/

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <SpacingGrid />
      </div>
    </div>
    // <div>
    //   <Login />
    // </div>
  );
}

export default App;
