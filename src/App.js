import React, { Component } from 'react';

import Title from './Components/Title';
import Search from './Components/Search';
import Current from './Components/Current';
import Forecast from './Components/Forecast';

const API_KEY = "640f3e3e1711cef42f5b61f55ae0adad";

class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    description: undefined,
    temperature: undefined,
    min_temp: undefined,
    max_temp: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    // const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(json => {
      console.log(json);
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
            <Title />
              <div className="row">
                <Search getWeather={this.getWeather} />
                <Current />
                <Forecast />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
