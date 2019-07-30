import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index";
import Nav from "../components/Navbar/index";
import Footer from "../components/Footer/index";

class Home extends Component {
  // componentDidMount() {
  //   this.onSignIn();
  // }

    render() {
      return (
        <div>
          <Nav />
          <Jumbotron />
          <Footer />
        </div>
      );
    }
  }
  
  export default Home;
