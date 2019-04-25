import React, { Component } from 'react';

import Title from './Components/Title';
import Search from './Components/Search';
import Current from './Components/Current';

const API_KEY = "640f3e3e1711cef42f5b61f55ae0adad";

class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    description: undefined,
    temperature: undefined,
    min_temp: undefined,
    max_temp: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      if(city && country){
        this.setState({
          city: json.name,
          country: json.sys.country,
          description: json.weather[0].description,
          temperature: json.main.temp,
          min_temp: json.main.temp_min,
          max_temp: json.main.temp_max,
          error: ""
        })
      } else {
        this.setState({
          city: undefined,
          country: undefined,
          description: undefined,
          temperature: undefined,
          min_temp: undefined,
          max_temp: undefined,
          error: "Please Enter a city and country"
        })
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
            <Title />
                <div className="form-container">
                  <Search getWeather={this.getWeather} />
                </div>
                <div className="data-container">
                  <Current city={this.state.city} country={this.state.country} description={this.state.description} temperature={this.state.temperature} min_temp={this.state.min_temp} max_temp={this.state.max_temp} error={this.state.error} />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
