import React from "react";
import "./style.css";
import GoogleLogin from 'react-google-login';
import { Link } from "react-router-dom";

function Nav() {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand">Fixed navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                  <a className="nav-link">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link">Link</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                  </li>
              </ul>
            </div>
            <Link to={"/home"}>
            <GoogleLogin
              clientId="321790988998-dd7ojo9jl0oaqn9nhltn85g798gv53ve.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            </Link>
        </nav>
      </div>
  );
}

export default Nav;