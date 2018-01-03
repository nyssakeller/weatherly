import React, { Component } from 'react';
import MockData from './MockData';
import Card from './Card';
import Cards from './Cards';
import CurrentWeather from './CurrentWeather'
import ApiKey from './ApiKey';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Denver',
      state: 'CO',
      icon: MockData.current_observation.icon_url,
      currentTemp: MockData.current_observation.temp_f,
      hi: MockData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      lo: MockData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      conditions: MockData.forecast.simpleforecast.forecastday[0].conditions
    }
  }

  componentDidMount() {
    this.fetchData();
  }
  
  fetchData() {
    fetch(`http://api.wunderground.com/api/29c1bf6746efbe5f/conditions/q/${this.state.state}/${this.state.city}.json`)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log('err'))
  }

  render() {
    return (
      <div className='App'>
        <CurrentWeather 
              MockData={MockData} 
              location={this.state.city}
              icon={this.state.icon}
              currentTemp={this.state.currentTemp}
              conditions={this.state.conditions}
              hi={this.state.hi}
              lo={this.state.lo}
        />
      </div>
      );
  }
}


export default App;