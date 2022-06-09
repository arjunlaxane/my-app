import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  // console.log(props);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/textform">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          {/* let's add pallett here */}

          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              onClick={() => props.toggleMode('primary')}
              style={{ height: '30px', width: '30px', cursor: 'pointer' }}
            ></div>
            <div
              className="bg-success rounded mx-2"
              onClick={() => props.toggleMode('success')}
              style={{ height: '30px', width: '30px', cursor: 'pointer' }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              onClick={() => props.toggleMode('danger')}
              style={{ height: '30px', width: '30px', cursor: 'pointer' }}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              onClick={() => props.toggleMode('warning')}
              style={{ height: '30px', width: '30px', cursor: 'pointer' }}
            ></div>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === 'light' ? 'dark' : 'light'
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// it checks property types--string,number,object,array
Navbar.prototype = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string.isRequired,
};

// default props values if not given...it will trigger only when prop name not given while calling function in app.js

Navbar.defaultProps = {
  title: ' Wordgame!',
  aboutText: 'about click',
};
