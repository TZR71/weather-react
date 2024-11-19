import React from "react";
import axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props){
const 
    function handleResponse(response) {
    }
      const apiKey = "eb0432d8499otf6b1e6a9e4fe11cf387";
      let city="London";
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    


return (
  <div className="WeatherForecast">
    <div className="row">
      <div className="col">
        <div>
          <div className="ForecastDay">Thu</div>
          <div className="ForecastIcon">
            <img src={props.icon} alt={""}></img>
          </div>
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