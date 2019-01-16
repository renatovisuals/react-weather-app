import React from 'react';
import './weathermain.css';

const WeatherMain = (props) => {


    const renderIcon = () => {
        const icon = props.weather.icon;
        let iconStr = "wi wi-";
        switch(icon){
            case('01d'): iconStr += "day-sunny"
            break;
            case('02d'): iconStr += "day-cloudy"
            break;
            case('03d'): iconStr += "cloud"
            break;
            case('04d'): iconStr += "cloudy"
            break;
            case('09d'): iconStr += "day-showers"
            break;
            case('10d'): iconStr += "day-rain"
            break;
            case('11d'): iconStr += "day-thunderstorm"
            break;
            case('13d'): iconStr += "day-snow"
            break;
            case('50d'): iconStr += "dust"
            break;

            case('01n'): iconStr += "night-clear"
            break;
            case('02n'): iconStr += "night-alt-cloudy"
            break;
            case('03n'): iconStr += "cloud"
            break;
            case('04n'): iconStr += "cloudy"
            break;
            case('09n'): iconStr += "night-showers"
            break;
            case('10n'): iconStr += "night-alt-rain"
            break;
            case('11n'): iconStr += "night-alt-thunderstorm"
            break;
            case('13n'): iconStr += "night-snow"
            break;
            case('50n'): iconStr += "dust"
            break;

            default:
                iconStr = null;
        }

      return  <i className={`${iconStr}`}></i>
    }

    return (
        <div className="weather-main">
            <div className="temperature">
              {`${Math.floor(props.temperature)}°`}
            </div>
            <div className="description">
                {renderIcon()} <span> {props.weather.description} </span>
            </div>
        </div>

    )
}

export default WeatherMain;
