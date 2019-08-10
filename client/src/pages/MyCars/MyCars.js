import React, { Component } from "react";
import AddVehicle from "../../components/AddVehicle/index";
import Jumbotron from "../../components/Jumbotron/index";
import "./myCars.css";

class Home extends Component {

    render() {
      return (
        <div className="myCarsPage">
          <h1>Keep track of your vehicles!</h1>
          <h2>Add your vehicle information below</h2>
          <AddVehicle />
        </div>
      );
    }
  }
  
  export default Home;