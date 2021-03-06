import React, { Component } from 'react';
import './App.css';
import Weather from './Components/Weather/Weather';
import Form from './Components/Form/Form';
import Title from './Components/Title/Title';
import tachyon from 'tachyons';

const Api_Key = "9f5a403a5d4989a00948bf911a36c039";

class App extends Component{
  
  //   state = {
  //     temperature: undefined,
  //     city: undefined,
  //     country: undefined,
  //     humidity: undefined,
  //     description: undefined,
  //     error: undefined,
  //     errorMessage: undefined
  // }

  constructor(props) {
    super(props)

    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      errorMessage: undefined
    }
  }

  getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await 
      
      // try{
           fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
      // }catch(error) {
      //   response.state(404) = console.log('Please enter the correct values',error)
      //   this.setState ({
      //     error: "Not found!!!"
      //   })
      // }

      const response = await api_call.json();
      console.log(response)

      if(response.cod === 200){
        if(city && country){
          this.setState({
            temperature: Math.round((response.main.temp - 273.15)) ,
            city: response.name,
            country: response.sys.country,
            humidity: response.main.humidity,
            description: response.weather[0].description,
            error: ""
        })
        } else {
          this.setState({
            error: "Please enter the name of city and country"
          })
        }
      } else {
        this.setState({
          errorMessage: response.message
        })
      }
        
      console.log(response)
  }
  render() {
    return (
      <div className="App">
        <Title/>
        <Form weather={this.getWeather}/>
        <Weather 
          temp = {this.state.temperature}
          city = {this.state.city}
          count = { this.state.country}
          humid = {this.state.humidity}
          des = {this.state.description}
          error = {this.state.error}
          errorMessage = {this.state.errorMessage}/>
      </div>
    );
  }
}

export default App;
