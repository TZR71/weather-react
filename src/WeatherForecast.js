import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  console.log(props);
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.details.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "eb0432d8499otf6b1e6a9e4fe11cf387";
    let city = props.details.coordinates;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.details.coordinates.longitude}&lat=${props.details.coordinates.latitude}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
