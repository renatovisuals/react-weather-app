import React, {Component} from 'react';
import './weather-details.css';

class WeatherDetails extends Component {

    state = {
        details: [
            {
              fontAwesome:false,
              icon: 'wi wi-humidity',
              description: 'humidity',
              data: "20%"
            },
            {
              fontAwesome:false,
              icon: 'wi wi-humidity',
              description: 'humidity',
              data: "20%"
            },
            {
              fontAwesome:false,
              icon: 'wi wi-humidity',
              description: 'humidity',
              data: "20%"
            }
        ]
    }

    renderWeather = (fontAwesome) =>{

        return (
            !fontAwesome ?
            this.state.details.map((item) =>(
                <div>
                  <i className={item.icon}></i>
                  <span className="description">{item.description}</span>
                  <span className="data">{item.data}</span>
                </div>
            ))
            :null
        )
    }

    render(){
      return (
        <div className="weather-details">
            {this.renderWeather(false)}
        </div>

      )
    }

}

export default WeatherDetails;
