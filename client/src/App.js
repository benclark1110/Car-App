import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import CarHelp from "./pages/CarHelp/CarHelp";
import Home from "./pages/Home/Home";
import MyCars from "./pages/MyCars/MyCars";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Navbar/index";
import Footer from "./components/Footer/index";


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/mycars" component={MyCars} />
            <Route exact path="/carhelp" component={CarHelp} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
