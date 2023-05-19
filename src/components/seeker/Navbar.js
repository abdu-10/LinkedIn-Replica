import React, { useState } from "react";
import "./navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Box, Menu, MenuItem,} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

function Navbar() {
  const navigate = useNavigate()
  const [anchMenu, setAnchMenu] = useState(null)

  const handleAccountActionsClick = () => (event) => {
    // setSelectedOption(params);
    console.log("clicked")
    setAnchMenu(event.currentTarget);
  }
  const handleCloseMenu = () => {
    setAnchMenu(null);
  };
  const handleMenuItemClick = (prop) => {
    handleCloseMenu();
    if (prop === "view") {
      navigate("/seeker/profile");
    } else if (prop === "edit") {
      navigate("/seeker/profile");
    }else if (prop === "logout"){
      navigate("/");
      handleCloseMenu();
    } else
    handleCloseMenu();
  };

  const AccountDetails = () => {
    return (
      <>
        {" "}
       <Menu
          id="menu-appbar"
          anchorEl={anchMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchMenu)}
          onClose={handleCloseMenu}

        >
          <MenuItem onClick={() => handleMenuItemClick("view")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <VisibilityOutlinedIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              View Account Details
            </Box>
          </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("edit")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <EditIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Edit Account Details
            </Box>
          </MenuItem>          
          <MenuItem onClick={() => handleMenuItemClick("logout")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <LogoutIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Log Out
            </Box>
          </MenuItem>
        </Menu>{" "}
      </>
    );
  };

  return (
    <div>
    <div className="Navbar fixed top-0 left-0 right-0 z-30">
      <div className="logo_section">
        <img
          className="cursor-pointer"
          src="https://www.seekpng.com/png/full/8-84419_linkedin-logo-png-icon-linkedin-logo-png.png"
          alt="logo"
        />

        {/* <SearchIcon className = 'spair_search'/> */}
        <div className="search_bar">
          {/* <SearchIcon className="search_icon" /> */}
          <input placeholder="search"></input>
        </div>
      </div>
      <div className="nav_section">
        <ul>
        
          <li className="active" onClick={()=> navigate("/seeker")}>
            {/* <NavLink to="/seeker"> */}
            <HomeIcon />
            <span className="nav_text">
              Home</span>{" "}  
              {/* </NavLink>  */}
          </li>
          
          
         
          <li>
            <GroupIcon />
            <span className="nav_text">My Network</span>
          </li>
          <li onClick={()=> navigate("/seeker/jobs")}>
            <WorkIcon />
            <span className="nav_text">Jobs</span>
          </li>
          <li>
            <TextsmsIcon />
            <span className="notification bg-red-500 text-white pl-1 pr-1 rounded-full -mt-[20px] ml-[16px]">
              4
            </span>
            <span className="nav_text">Messaging</span>
          </li>
          <li>
            <NotificationsIcon />
            <span className="nav_text">Notification</span>
          </li>
          <li onClick={handleAccountActionsClick()}>
            {" "}
            <Avatar sx={{ mr: 1, m: -1  }}
            
            />
            <span className="nav_text"> Me</span>
          </li>
          <li className="line"></li>
          <li className="work">
            <AppsIcon /> Work
          </li>
        </ul>
      </div>
    </div>
    <Outlet/>
    <AccountDetails/>
    </div>

  );
}

export default Navbar;
