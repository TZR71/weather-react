import React, {useState} from "react";


export default function WeatherUnits(props){
    const[unit, setUnit]=useState("metric");
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    
    function showCelcius(event){
        event.preventDefault();
        setUnit("celcius");
    }

    if (unit=== "celcius"){
        return (
          <span className="WeatherUnits">
            <span className="degrees"> {Math.round(props.celcius)} </span>
            <span className="units">
              {" "}
              °C  |{" "}
              <a href="/" onClick={showFahrenheit}>
                {" "}
                °F{" "}
              </a>{" "}
            </span>
          </span>
        );

    }else{
        let fahrenheit=(props.celcius*9/5+32);
        return (
          <span className="WeatherUnits">
            <span className="degrees"> {Math.round(fahrenheit)} </span>
            <span className="units">
              {" "}
              <a href="/" onClick={showCelcius}>°C </a>| °F {" "}
            </span>
          </span>
        );
    }}
