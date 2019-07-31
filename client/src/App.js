import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyCars from "./pages/MyCars";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <div>
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/mycars" component={MyCars} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
