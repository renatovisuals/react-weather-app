import React, {Component} from 'react';
import './weather-details.css';

const WeatherDetails = (props) => {

    const data = props.data;

    const configureVisibility = (visibility) => {
           if (props.units === "imperial"){
             return `${Math.round(visibility/1609)} mi`;
           }else{
             return `${Math.round(visibility/1000)} km`;
            }
   }

   const configureWindSpeed = (speed) => {
      if(props.units === "imperial"){
        return `${Math.round(speed)} mph`
      }else{
        return `${Math.round(speed*1.609)} kmh`
      }
   }

   const details = [
                 {
                   fontAwesome:false,
                   icon: 'wi wi-humidity',
                   description: 'Humidity',
                   print:`${data.main.humidity}%`,
                   path:data.main.humidity
                 },
                 {
                   fontAwesome:false,
                   icon: 'wi wi-horizon-alt',
                   description: 'Visibility',
                   print: configureVisibility(data.visibility),
                   path:data.visibility
                 },
                 {
                   fontAwesome:false,
                   icon: 'wi wi-gale-warning',
                   description: 'Wind Speed',
                   print: configureWindSpeed(data.wind.speed),
                   path:data.wind.speed
                 }
             ]

    const renderWeather = () =>{
        return (
            details.map((item,i) =>{
                if(item.path){
                  return(
                    <div key={i}>
                      <i className={item.icon}></i>
                      <span className="description">{item.description}</span>
                      <span className="data">{item.print}</span>
                    </div>
                  )
                }else{
                  return null;
                }
            })
        )
    }


      return (
        <div className="weather-details">
            {renderWeather()}
        </div>

      )


}

export default WeatherDetails;
