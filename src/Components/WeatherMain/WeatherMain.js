import React from 'react';
import './weathermain.css';

const WeatherMain = () => {
    return (
        <div className="weather-main">
            <div className="temperature">
              75°
            </div>
            <div className="description">
                <i className="wi wi-day-rain"></i> <span> Rain </span>
            </div>
        </div>

    )
}

export default WeatherMain;
