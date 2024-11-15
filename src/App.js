import React from 'react';
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather/>
        <footer>
          This project was created by Tiina Rojola and is open-sourced on {""}
          <a
            href="https://github.com/TZR71/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

;
