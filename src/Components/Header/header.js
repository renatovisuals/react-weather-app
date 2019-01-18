import React, { Component } from 'react';
import './header.css';

class Header extends Component{
    handleKeyDown = (e) => {
        console.log(e.key==="Enter");
    }

    render(){
        return (
            <div className ="header-container">
                <input type ='text' placeholder="enter a city" onKeyDown ={(e)=>{this.handleKeyDown(e)}}/>
                <i className = 'wi wi-celsius' onClick = {()=>{this.props.toggleUnits()}}> </i>
            </div>
          )
    }
}

export default Header;
