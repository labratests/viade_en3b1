import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './graphic interface/NavBar';
import SpacingGrid from './graphic interface/MainContainer';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React. Developed using Docker.
        </a>
      </header>
    </div>
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
  );
}

export default App;
