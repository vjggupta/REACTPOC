import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    imgSrc: ""
  };

  render() {
    console.log("");
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand" href="#">
            JP MORGAN
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Link to="/searchgroup">
                <li>SEARCH GROUP</li>
              </Link>
              &nbsp;&nbsp;
              <Link to="/viewgroup">
                <li>VIEW GROUP</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
