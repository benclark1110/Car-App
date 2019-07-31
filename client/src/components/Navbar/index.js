import React, { Component } from "react";
import "./style.css";
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Nav extends Component {
  
  state = {
    loggedIn: false,
    givenName: "test",
    familyName: "test",
    email: "test",
    image: "test"
  };

  handleFormSubmit = event => {
      API.saveUser({
        givenName: this.state.givenName,
        familyName: this.state.familyName,
        email: this.state.email,
        image: this.state.image
      })
        // .then(res => this.loadBooks())
        .catch(err => console.log(err));
  };
  
   render() {
     
    const responseGoogle = (response) => {
      this.setState({
        loggedIn: true,
        givenName: response.profileObj.givenName,
        familyName: response.profileObj.familyName,
        email: response.profileObj.email,
        image: response.profileObj.imageUrl
      });
      console.log(this.state)
    };

    const logout = (response) => {
      console.log(response);
      this.setState({
        loggedIn: false,
        givenName: "",
        familyName: "",
        email: "",
        image: ""
      });
      console.log(this.state)
    };

    let authButton;
      if (!this.state.loggedIn) {
        authButton = <GoogleLogin
        clientId="321790988998-dd7ojo9jl0oaqn9nhltn85g798gv53ve.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      } else {
        authButton = <GoogleLogout
        buttonText="Logout"
        onLogoutSuccess={logout}
      >
      </GoogleLogout>
      };

    return (
      <div>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <a className="navbar-brand">Fixed navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link">
                        <Link to="/">Login</Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <Link to="/home">Home</Link>
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link">
                        <Link to="/mycars">My Cars</Link>
                      </a>
                    </li>
                </ul>
              </div>
              <Link to={"/home"}
                    onClick={this.handleFormSubmit}
              >
                {authButton}
              </Link>
          </nav>
        </div>
    );
  }
}

export default Nav;