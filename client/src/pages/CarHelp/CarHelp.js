import React, { Component } from "react";
import CarServices from "../../components/CarServices/index";
import "./carHelp.css";

class CarHelp extends Component {
  
    render() {
      return (
        <div className="carHelpPage">
          <h1>Welcome to Car Help!</h1>
          <h2>Find auto assistance near you.</h2>
          <CarServices />
        </div>
      );
    }
  }
  
  export default CarHelp;
