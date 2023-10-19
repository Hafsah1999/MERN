import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-danger  fs-3" href="#">
          SEASONS.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link active fs-5  text-danger opacity-75"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
            <NavLink
              className="nav-link active fs-5  text-danger opacity-75"
              to="/about"
            >
              About
            </NavLink>
            </li>


            <li className="nav-item">
            <Link
              className="nav-link active fs-5  text-danger opacity-75"
              to="/explore"
            >
              Explore
            </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active fs-5  text-danger opacity-75"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fs-5  text-danger opacity-75"
                to="/EventHandling"
              >
                Alert
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fs-5  text-danger opacity-75"
                to="/Count"
              >
                Count
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fs-5  text-danger opacity-75"
                to="/Todo"
              >
                Todo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fs-5  text-danger opacity-75"
                to="/ProductListing"
              >
                ProductListing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fs-5  text-danger opacity-75"
                to="/Weathercard"
              >
                Weathercard
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
