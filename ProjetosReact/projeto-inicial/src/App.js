import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rafael from './Rafael';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projeto do Rafael em React
        </p>
        <Rafael></Rafael>
      </header>
    </div>
  );
}

export default App;
