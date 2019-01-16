import React, { Component } from 'react';
import { USERID } from './config';
import Header from './Components/Header/header';
import Title from './Components/Title/title';
import WeatherMain from './Components/WeatherMain/WeatherMain';
import WeatherDetails from './Components/WeatherDetails/WeatherDetails';
import './app.css';

class App extends Component {

    state = {
        data:null,
        cityQueryString:''
    }

    componentWillMount(){
        this.loadHomeCityWeather();
    }

    loadHomeCityWeather = () => {
      fetch("https://ipapi.co/json")
      .then((response)=>response.json())
      .then((data)=>{
        const cityString = this.setCityString(data.city)
        this.getWeatherData(cityString);
      })
    }


    getWeatherData = (cityString) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityString}&units=imperial&APPID=${USERID}`)
      .then((response)=>response.json())
      .then((data)=> {this.setState({data:data})
      console.log(this.state);
      })
    }


    setCityString = (string) => {
        string = string.trim();
        let newString = Array.from(string);
        for(let i = 0; i<newString.length; i++){
          if(newString[i]===" "){
            newString[i]="+";
          }
        }
        return newString.join("");
    }

  render() {
    const data = this.state.data;
    if(!this.state.data){return null};
    return (
          <div className = "app"
            style = {{
              backgroundImage:"url('./images/fog.jpg')",
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat"
            }}
            >
                <div className="gradient">
                    <Header/>
                    <div className="content-container">
                        <Title city = {data.name}/>
                        <WeatherMain temperature = {data.main.temp} weather = {data.weather[0]}/>
                        <hr/>
                        <WeatherDetails/>
                    </div>
                </div>
          </div>
    );
  }
}

export default App;
