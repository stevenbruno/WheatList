import React from 'react';
import logo from './logo.svg';
import './App.css';
import {fakeData, addToWaitList, getFullWaitlist} from './Fakedata'

function App() {
  //fakeData();
  //addToWaitList({person: 1}, "Bombay Wraps")
  //You need to await the response from getFullWaitlist
  //getFullWaitlist("Bombay Wraps")
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
      </header>
    </div>
  );
}

export default App;
