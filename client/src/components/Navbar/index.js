import React, { Component } from "react";
import "./style.css";
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Nav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      givenName: "",
      familyName: "",
      email: "",
      image: ""
    };
  }

  // state = {
  //   loggedIn: false,
  //   givenName: "",
  //   familyName: "",
  //   email: "",
  //   image: ""
  // };

  handleFormSubmit = data => {
    // event.preventDefault();
    if (data === 0) {
      API.saveUser({
        givenName: this.state.givenName,
        familyName: this.state.familyName,
        email: this.state.email,
        imageUrl: this.state.image
      })
      .then(console.log("added to db"))
      .catch(err => console.log(err));
    } else {
      console.log("already existing")
    }
  };

  checkExisting = () => {
    // event.preventDefault();
    console.log(this.state.email);
    API.getUserByEmail(
      this.state.email
    )
      .then(response => this.handleFormSubmit(response.data.length))
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
      sessionStorage.setItem("user", this.state.email)
      console.log(this.state);
      this.checkExisting();
      // this.handleFormSubmit();
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
      </GoogleLogout>;
    };


    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="/">Login</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/mycars">My Cars</Link>
              </li>
            </ul>
          </div>
          <Link to={"/home"}>
            {authButton}
          </Link>
        </nav>
      </div>
    );
  }
}

export default Nav;