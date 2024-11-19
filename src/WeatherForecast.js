import React, {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props){
    const [ready, setReady]=useState(false);
    const [forecastData, setForecastData]=useState(null);

function handleResponse(response) {
        setForecastData(response.data.daily);
        setReady(true);
    }
      

if(ready){
return (
  <div className="WeatherForecast">
    <div className="row">
      <div className="col">
        <WeatherForecastDay data={forecastData[0]}/>
        </div>
      </div>
    </div>
  
);
  }
  else{    
      const apiKey = "eb0432d8499otf6b1e6a9e4fe11cf387";
      let city="London";
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);        
  }

}