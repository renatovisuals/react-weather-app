import React from 'react';
import './weather-details.css';

const WeatherDetails = () => {

    return (
      <div className="weather-details">
          <div>
            <i className="wi wi-humidity"></i>
            <span className="description">Humidity</span>
            <span className="data">20%</span>
          </div>
          <div>
            <i className="wi wi-humidity"></i>
            <span className="description">Humidity</span>
            <span className="data">20%</span>
          </div>
          <div>
            <i className="wi wi-humidity"></i>
            <span className="description">Humidity</span>
            <span className="data">20%</span>
          </div>
      </div>
    )

}

export default WeatherDetails;
