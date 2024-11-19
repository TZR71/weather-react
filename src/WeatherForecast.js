import React from "react";
import "./WeatherForecast.css"

export default function WeatherForecast(props){
return (
  <div className="WeatherForecast">
    <div className="row">
      <div className="col">
        <div>
          <div className="ForecastDay">Thu</div>
          <div className="ForecastIcon">icon</div>
          <div className="ForecastTemperatures">
            <span className="ForecastTemperatureMax"> 19° | </span>
            <span className="ForecastTemperatureMin"> 10° </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}