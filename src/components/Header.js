import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
  <div className="container">
    <a className="navbar-brand" href="index.html"
      ><i className="fas fa-laptop-code"></i> DevCamper</a
    >
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
          >
            <i className="fas fa-user"></i> Account
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="manage-bootcamp.html"
              >Manage Bootcamp</a
            >
            <a className="dropdown-item" href="manage-reviews.html"
              >Manage Reviews</a
            >
            <a className="dropdown-item" href="manage-account.html"
              >Manage Account</a
            >
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="login.html"
              ><i className="fas fa-sign-out-alt"></i> Logout</a
            >
          </div>
        </li>
        <li className="nav-item d-none d-sm-block">
          <a className="nav-link" href="#">|</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="bootcamps.html">Browse Bootcamps</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
