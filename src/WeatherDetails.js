import React from "react";
import CorrectedDate from "./CorrectedDate";

export default function WeatherDetails(props){
    return (
      <div className="WeatherDetails">
        <h1>{props.details.city}</h1>
        <ul>
          <span>
            <li>
              <CorrectedDate date={props.details.date} />
            </li>
            <li className="text-capitalize">{props.details.description}</li>
          </span>
        </ul>

        <div className="row">
          <div className="col-6">
            <img src={props.details.icon} alt={""}></img>{" "}
            <span className="degrees">
              {" "}
              {Math.round(props.details.temperature)}{" "}
            </span>
            <span className="units"> °C </span>
          </div>
          <div className="col-6">
            <ul>
              <li> Humidity: {props.details.humidity}%</li>
              <li> Wind: {props.details.wind} km/h</li>
              <li> Feels like: {Math.round(props.details.feels_like)}°C</li>
            </ul>
          </div>
        </div>
      </div>
    );
}