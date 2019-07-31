import React, { Component } from "react";
import Nav from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import AddVehicle from "../components/AddVehicle/index";
import Jumbotron from "../components/Jumbotron/index";

class Home extends Component {
  // componentDidMount() {
  //   this.onSignIn();
  // }

    render() {
      return (
        <div>
          <Nav />
          <Jumbotron />
          <AddVehicle />
          <Footer />
        </div>
      );
    }
  }
  
  export default Home;