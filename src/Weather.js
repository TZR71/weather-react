import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";
import { ColorRing } from 'react-loader-spinner';




export default function Weather(props) {
  const [city, setCity]=useState(props.defaultCity);
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

  function search(){
    const apiKey = "eb0432d8499otf6b1e6a9e4fe11cf387";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value);

  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary  w-100"
              />
            </div>
          </div>
        </form>
        <WeatherDetails details={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#d31bb1", "#892375", "#dd75c8", "#f29fe1", "#f2bfe8"]}
      />
    );
  }
}
