import React from 'react';
import NavBar from './graphic interface/NavBar';
import SpacingGrid from './graphic interface/MainContainer';
import "./App.css";

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
  );
}

export default App;
