import React from 'react';
import logo from './tesla_logo.jpg';
import './App.css';
import Tesla from './Tesla'
import Jeep from './Jeep'
import RangeRover from './RangeRover'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <br />
        <br />
        <br />
        
        <a
          className="App-link"
          href="https://www.tesla.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn More About Tesla
        </a>
      </header>
      <Tesla />
      <Jeep />
      <RangeRover />
    </div>
  );
}

export default App;
