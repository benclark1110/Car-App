import React, { Component } from "react";
import "./carServices.css";
const axios = require("axios");

class CarServices extends Component {
  
    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
  
        this.state = {
        zipCode: "",
        service: ""
        };
    }
  
    onChangeZipCode = (event) => {
      this.setState({
        zipCode: event.target.value
      });
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            service: event.target.name
        }, function () {
            this.handleCarSubmit();
        });
      };
  
    handleCarSubmit = event => {
        let serviceQueryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + this.state.service + "&location=" + this.state.zipCode + "&limit=10";
        let apiKey = "tM-UqkhLSQAbJwmpKiTeXGPAagl3_g8ZSo1kpVtGKCbvuT1JLc9RIDJ9G425PSBg_90EakpuaP0p-9fUBWjoX257R6vRewtfaRzJWwoHtUDsxPRga7k0-ArIHPexXHYx" 
  
        axios({
            url: serviceQueryURL,
            method: "GET",
            headers: {
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin":"*",
                "Authorization": `Bearer ${apiKey}`
            }
        }).then(function(carResponse) {
            console.log(carResponse);
            console.log(carResponse.config.url);
        });
    };

    render() {
  
      return (
        <div>
          <label className="col-form-label">What is your zip code?</label>
            <input
            type="text"
            className="form-control"
            id="zipCode"
            placeholder="12345"
            value={this.state.zipCode || ''}
            onChange={this.onChangeZipCode}
            />
            <label className="col-form-label">What service are you looking for?</label>
            <button type="submit" 
                    className="btn btn-primary" 
                    value={this.state.service}
                    id="oilchange"
                    name="oilchange"
                    onClick={this.handleChange}>Oil Change
            </button>
            <button type="submit" 
                    className="btn btn-primary" 
                    value={this.state.service}
                    id="tirerotation"
                    name="tirerotation"
                    onClick={this.handleChange}>Tire Rotation
            </button>
            <button type="submit" 
                    className="btn btn-primary"
                    value={this.state.service}
                    id="carbattery"
                    name="carbattery"
                    onClick={this.handleChange}>Car Battery
            </button>
        </div>
      );
    }
  }
  
  export default CarServices;