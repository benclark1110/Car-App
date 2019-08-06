import React, { Component } from "react";
import AddVehicle from "../../components/AddVehicle/index";
import Jumbotron from "../../components/Jumbotron/index";
import "./myCars.css";

class Home extends Component {

    render() {
      return (
        <div className="myCarsPage">
          <Jumbotron />
          <AddVehicle />
        </div>
      );
    }
  }
  
  export default Home;