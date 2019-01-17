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
        cityQueryString:'',
        backgroundImage:''
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

    renderBackgroundImage = () => {
        const id = this.state.data.weather[0].id;
        let url = "./images/"

        if(id >= 200 && id <300){
            url += "thunderstorm.jpg";
        }else if( id >= 300 && id <500){
            url += "drizzle.jpg";
        }else if( id >= 500 && id <600){
            url += "rain.jpg";
        }else if( id >= 600 && id <700){
            url += "snow.jpg";
        }else if( id >= 700 && id <800){
            url += "fog.jpg";
        }else if( id === 800){
            url += "clear.jpg";
        }else{
            url += "clouds.jpg";
        }

        console.log(url);

        return {
          'backgroundImage':`url("${url}")`,
          'backgroundSize':"cover",
          'backgroundRepeat':"no-repeat"
        }
    }

  render() {

    const data = this.state.data;
    if(!this.state.data){return null};
    this.renderBackgroundImage()
    return (
          <div className = "app"
            style = {this.renderBackgroundImage()}
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
