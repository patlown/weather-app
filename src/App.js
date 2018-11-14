import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = '793b961330b099f727cb548bb38929cb';

class WeatherApp extends React.Component{
  
  getWeather = async(e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}`);

    const data = await api_call.json();
    console.log(data);


    
  }
  render() {
    return (
      <div>
        <Titles></Titles>
        <Form getWeather={this.getWeather}></Form>
        <Weather></Weather>
      </div>
    );
  }
};

export default WeatherApp;