import React from "react";
import "./navpanel.css";
import ExploreIcon from "@mui/icons-material/Explore";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate } from "react-router-dom";

function NavPanel() {
  const navigate = useNavigate()
  return (
    <div className="NavPanel bg-white">
      <div className="nav">
        <img
          src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
          alt="linkedIn logo"
        />
      </div>

      <div className="nav_items">
        <ul>
          <li onClick={()=> navigate("/signup")}>
            <ExploreIcon /> Discover
          </li>
          
          <li onClick={()=> navigate("/signup")}>
            <PeopleIcon /> People
          </li>
          <li onClick={()=> navigate("/signup")}>
            <WorkIcon /> Jobs
          </li>
          <li className="divider">|</li>
        </ul>
        <button className="join" onClick={()=> navigate("/signup")}>Join now</button>
        <button className="sign" onClick={()=> navigate("/login")}>Sign in</button>
      </div>
    </div>
  );
}

export default NavPanel;
