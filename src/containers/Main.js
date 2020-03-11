import React from "react";
import "typeface-roboto";
import NavBar from '../graphic interface/NavBar.js';
import SpacingGrid from '../graphic interface/MainContainer.js';

const Main = () => {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <SpacingGrid />
      </div>
    </div>
  );
};

export default Main;
