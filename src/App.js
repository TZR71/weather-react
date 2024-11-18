import React from 'react';
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Palermo" />
        <footer>
          This project was created by{" "}
          <a href="https://github.com/TZR71" target="_blank" rel="noreferrer">
            Tiina Rojola{" "}
          </a>{" "}
          and is open-sourced on {""}
          <a
            href="https://github.com/TZR71/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://tr-weather-react.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

;
