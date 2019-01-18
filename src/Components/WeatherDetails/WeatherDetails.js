import React, {Component} from 'react';
import './weather-details.css';

const WeatherDetails = (props) => {
        const data = props.data;
        const details = [
                      {
                        fontAwesome:false,
                        icon: 'wi wi-humidity',
                        description: 'Humidity',
                        data:`${data.main.humidity}%`
                      },
                      {
                        fontAwesome:false,
                        icon: 'wi wi-horizon-alt',
                        description: 'Visibility',
                        data: `${Math.floor(data.visibility/1609)} mi`
                      },
                      {
                        fontAwesome:false,
                        icon: 'wi wi-gale-warning',
                        description: 'Wind Speed',
                        data: `${Math.floor(data.wind.speed)} mph`
                      }
                  ]


    const renderWeather = (fontAwesome) =>{


        return (
            !fontAwesome ?
            details.map((item,i) =>(
                <div key={i}>
                  <i className={item.icon}></i>
                  <span className="description">{item.description}</span>
                  <span className="data">{item.data}</span>
                </div>
            ))
            :null
        )
    }


      return (
        <div className="weather-details">
            {renderWeather(false)}
        </div>

      )


}

export default WeatherDetails;
