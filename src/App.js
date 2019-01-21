import React, { Component } from 'react';
import { USERID } from './config';
import Header from './Components/Header/header';
import Title from './Components/Title/title';
import WeatherMain from './Components/WeatherMain/WeatherMain';
import WeatherDetails from './Components/WeatherDetails/WeatherDetails';
import './app.css';

class App extends Component {

    state = {
        data:'',
        cityQueryString:'',
        backgroundImage:'',
        units:'imperial',
        loading:true,
        error:false
    }

    componentDidMount(){
        this.loadHomeCityWeather();
    }


    handleError = (error) => {
        this.setState({
            error
        })
    }


    loadHomeCityWeather = () => {
        fetch("https://ipapi.co/json")
        .then((response)=>response.json())
        .then((data)=>{
          const cityString = this.setCityString(data.city)
          this.setState({
            cityQueryString:cityString
          })
        },()=>this.getWeatherData())
    }

    getWeatherData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityQueryString}&units=${this.state.units}&APPID=${USERID}`)
        .then((response)=>{
            if(response.ok){
                return response.json()
            } else {
              throw Error('Invalid City Was Entered');
            }
          })
        .then((weather)=> {
            this.setState({
                data:weather,
                loading:false
              },() => {console.log("this is the new state", this.state)})

        })
        .catch((err)=>{
              this.setState({
                error:true
              },()=>{this.handleError(true)})
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
        this.setState({
          cityQueryString: newString.join("")
        },() => {
          this.getWeatherData()
        })
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

        return {
          'backgroundImage':`url("${url}")`,
          'backgroundSize':"cover",
          'backgroundRepeat':"no-repeat"
        }
    }

    toggleUnits = () =>{
       let units = this.state.units;
       units === "imperial" ? units = "metric" : units = "imperial";
       this.setState({
         units:units
       },() => {this.getWeatherData()})

    }

  render() {

    const data = this.state.data;

    if(this.state.loading){return <div className = "loader"> Loading... </div>};

    return (
          <div className = "app"
            style = {this.renderBackgroundImage()}
            >
                <div className="gradient">
                    <Header toggleUnits = {()=>{this.toggleUnits()}} data = {{...this.state}} updateCity = {this.setCityString} handleError = {this.handleError} />
                    <div className="content-container">
                        <Title city = {data.name}/>
                        <WeatherMain temperature = {data.main.temp} weather = {data.weather[0]}/>
                        <hr/>
                        <WeatherDetails data = {data} units = {this.state.units}/>
                    </div>
                </div>
          </div>
    );
  }
}

export default App;
