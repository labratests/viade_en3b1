import React from 'react';
import Routes from './components/containers/Routes.js';
import "./App.css";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <title>{'Viade'}</title>
      </Helmet>
      <Routes />
    </div>
  );
}

export default App;
