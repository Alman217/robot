import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
        <div className="container-fluid">
          <a href="" className="navbar-brand me-auto">Robots Inc.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/"  className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/robots"  className="nav-link">Robots</Link>
              </li>
              <li className="nav-item">
                <Link to="/services"  className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/testimonials"  className="nav-link">Testimonials</Link>
              </li>
            </ul>
            <form className="form-inline">
              <input className="form-control" />
              <button className="btn2 btn-outline-success">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;