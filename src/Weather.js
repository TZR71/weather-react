import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                class="form-control"
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
        <h1>Helsinki</h1>
        <ul>
          <span>
            <li>Thursday 08:00</li>

            <li>Cloudy</li>
          </span>
        </ul>

        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
            ></img>{" "}
            <span className="degrees"> 6 </span>
            <span className="units"> °C </span>
          </div>
          <div className="col-6">
            <ul>
              <li> Precipitation: 15%</li>
              <li> Humidity: 72%</li>
              <li> Wind: 12 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}