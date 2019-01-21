import React from 'react';
import './title.css';

const Title = (props) => {

    const getDateString = () =>{
        const date = new Date (Date.now());
        const dates = {
            month:['January','February','March','April','May','June','July','August','September','October','November','December'],
            day:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        }
        return `${dates.day[date.getDay()]} ${date.getDate()} ${dates.month[date.getMonth()]} ${date.getFullYear()}`
    }

    return (
        <div className = "title">
            <span className = "main-title"> {props.city} </span>
            <span className = "subtitle"> {getDateString()} </span>
        </div>
    )
}

export default Title;
