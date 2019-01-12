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
        configuredData:''
    }

    componentWillMount(){
     this.getData()
    }

    getData = () => {
      fetch("https://ipapi.co/json")
      .then((response)=>response.json())
      .then((data)=>{
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Fort+Worth&units=imperial&APPID=${USERID}`)
      .then((response)=>response.json())
      .then((data)=> {
          this.setState({
              data: data.list
          })

      })
      })
    }



    convertUNIXTime = (UNIX) => {
      return UNIX * 1000;
    }

    getDay = (date) => {
      const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
      const day = new Date(date).getDay()
      return days[day];
    }

  render() {
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
                        <Title/>
                        <WeatherMain/>
                        <hr/>
                        <WeatherDetails/>
                    </div>


                </div>

          </div>
    );
  }
}

export default App;
