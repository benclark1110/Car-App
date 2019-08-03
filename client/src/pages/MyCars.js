import React, { Component } from "react";
import AddVehicle from "../components/AddVehicle/index";
import Jumbotron from "../components/Jumbotron/index";

class Home extends Component {

    render() {
      return (
        <div>
          <Jumbotron />
          <AddVehicle />
        </div>
      );
    }
  }
  
  export default Home;