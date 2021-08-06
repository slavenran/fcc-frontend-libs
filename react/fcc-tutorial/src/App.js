import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {Link} from 'react-router-dom';

function App() {
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
          Learn React
        </a>
        <a
          className="App-link"
          href="/test"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open testing page
        </a>
        {/* <Link to="./pages/Test">Test page</Link> */}
        <a
          className="App-link"
          href="/callback"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open callback page
        </a>
        <a
          className="App-link"
          href="/lifecycle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open lifecycle page
        </a>
        <a
          className="App-link"
          href="/eightball"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open magic eight ball page
        </a>
        <a
          className="App-link"
          href="/rendering"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open user age page
        </a>
        <a
          className="App-link"
          href="/mapfilter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open map and filtering page
        </a>
        <a
          className="App-link"
          href="/redux"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open redux page
        </a>
      </header>
    </div>
  );
}

export default App;
