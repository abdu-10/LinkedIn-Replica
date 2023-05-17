import React from "react";
import "./footer.css";

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
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="Browsed_linkedln">
          <ul>
            <span className="main">
              <p>Browse LinkedIn</p>
            </span>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Salary</a>{" "}
            </li>
            
            <li>
              <a href="#">Services</a>
            </li>
            
          </ul>
        </div>
        <div className="Business_solutions">
          <ul>
            <span className="main">
              <p>Business Solutions</p>
            </span>
            <li>
              <a href="#">Talent</a>
            </li>
            <li>
              <a href="#">Marketing</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Sales</a>{" "}
            </li>
            
          </ul>
        </div>
        <div className="Directories">
          <ul>
            <span className="main">
              <p>Directories</p>
            </span>
            <li>
              <a href="#">Members</a>{" "}
            </li>
            <li>
              <a href="#">Jobs</a>{" "}
            </li>
            <li>
              <a href="#">Companies</a>
            </li>
            <li>
              <a href="#">Posts </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
