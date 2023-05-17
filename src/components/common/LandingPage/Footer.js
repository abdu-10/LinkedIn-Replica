import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="linkedln_logo">
          <img
            src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
            alt="linkedin"
          />
        </div>
        <div className="general">
          <ul>
            <span className="main">
              <p>General</p>
            </span>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signup">About</Link>
            </li>
          </ul>
        </div>
        <div className="Browsed_linkedln">
          <ul>
            <span className="main">
              <p>Browse LinkedIn</p>
            </span>
            <li>
              <Link to="/signup">Jobs</Link>
            </li>
            <li>
              <Link to="/signup">Salary</Link>{" "}
            </li>
            
            <li>
              <Link to="/signup">Services</Link>
            </li>
            
          </ul>
        </div>
        <div className="Business_solutions">
          <ul>
            <span className="main">
              <p>Business Solutions</p>
            </span>
            <li>
              <Link to="/signup">Talent</Link>
            </li>
            <li>
              <Link to="/signup">Marketing</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/signup">Sales</Link>{" "}
            </li>
            
          </ul>
        </div>
        <div className="Directories">
          <ul>
            <span className="main">
              <p>Directories</p>
            </span>
            <li>
              <Link to="/signup">Members</Link>{" "}
            </li>
            <li>
              <Link to="/signup">Jobs</Link>{" "}
            </li>
            <li>
              <Link to="/signup">Companies</Link>
            </li>
            <li>
              <Link to="/signup">Posts </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
