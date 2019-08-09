import React from "react";
import "./footerStyle.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="row">
          <li className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <a href="https://github.com/benclark1110" target="blank">Github</a>
          </li>
          <li className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <a className="link-email" href="mailto:benclark1110@gmail.com">benclark110@gmail.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;