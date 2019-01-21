import React, { Component } from 'react';
import './header.css';

class Header extends Component{
    state = {
      cityQuery:''
    }

    handleKeyDown = (e) => {
      if(e.key === "Enter"){
        console.log("working")
        this.props.updateCity(this.state.cityQuery)
      }
    }

    handleChange = (e) => {
          this.setState({
            cityQuery: e.target.value
          })
          this.props.handleError(false);
    }

    unitIcon = () => {
      const { units } = this.props.data;
      return units === "metric" ? "fahrenheit" : "celsius";
    }

    render(){
        return (
            <div className ="header-container">
                <input type ='text' placeholder="enter a city" onKeyDown ={(e)=>{this.handleKeyDown(e)}} onChange = {(e) => {this.handleChange(e)}} value ={this.state.cityQuery}/>
                <i className = {`wi wi-${this.unitIcon()}`} onClick = {()=>{this.props.toggleUnits()}}> </i>
                { this.props.data.error ? <div className="error"> *Enter A Valid City Name </div> :null}
            </div>
          )
    }
}

export default Header;
