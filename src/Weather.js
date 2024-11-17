import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CorrectedDate from "./CorrectedDate";

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response) {
    setWeatherData({
      ready:true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feels_like: response.data.temperature.feels_like,
      icon: response.data.condition.icon_url,
      date:new Date(response.data.time*1000),
    });

    
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <span>
            <li><CorrectedDate date={weatherData.date}/></li>
            <li className="text-capitalize">{weatherData.description}</li>
          </span>
        </ul>

        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt={""}></img>{" "}
            <span className="degrees">
              {" "}
              {Math.round(weatherData.temperature)}{" "}
            </span>
            <span className="units"> °C </span>
          </div>
          <div className="col-6">
            <ul>
              <li> Humidity: {weatherData.humidity}%</li>
              <li> Wind: {weatherData.wind} km/h</li>
              <li> Feels like: {Math.round(weatherData.feels_like)}°C</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "eb0432d8499otf6b1e6a9e4fe11cf387";
    
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading temperature...";
  }
}
