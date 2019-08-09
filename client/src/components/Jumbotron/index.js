import React from "react";
import "./jumboStyle.css";

function Jumbotron() {
  return (
    <div className="jumbotron">
        <h1 className="display-4">Welcome to Car Care!</h1>
        <p className="lead">Your one stop for all of your automotive needs.</p>
        <hr className="my-4" />
        <p>Track maintenance and find automotive services</p>
        <p className="lead">
        </p>
    </div>
  );
}

export default Jumbotron;