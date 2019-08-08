import React, { Component } from "react";
import "./carServices.css";
import { List, ListItem, resItem } from "../List/index";
const axios = require("axios");


class CarServices extends Component {
  
    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
  
        this.state = {
        zipCode: "",
        service: "",
        searchResults: []
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
        }).then(res => {
            this.setState({ searchResults: res });
            console.log(this.state.searchResults);
          })
          .catch(err => console.log(err))
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
            {/* {this.state.searchResults.length ? (
              <List>
                {this.state.searchResults.map(result => (
                  <ListItem key={result._id}>
                    <Link to={"/books/" + result._id}>
                      <strong>
                        {result.title} by {result.authors}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
              ) : (
                <h3>No Results to Display</h3>
              )} */}
              {this.state.searchResults.data ? (
                this.state.searchResults.data.businesses.map(store => (
                  <resItem key={store.id}>
                    <h6>{store.name} Call at: {store.display_phone}</h6>
                  </resItem>
                ))
              ) : (
                <h6>Search results will go here..</h6>
              )}
        </div>
      );
    }
  }
  
  export default CarServices;