import React, { useState, useEffect } from "react";
import "./adminnav.css";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";
import { Outlet, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, Box, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import HailIcon from "@mui/icons-material/Hail";
import Groups2Icon from "@mui/icons-material/Groups2";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import { getAdminProfile } from "../../../api/admin/adminApis";
import { selectLoggedInUserRef } from "../../../features/users/userSlice";
import { setCurrentAdminDetail } from "../../../features/admins/adminSlice";
import { useSelector, useDispatch } from "react-redux";
function AdminNav() {
  let admin_code = useSelector(selectLoggedInUserRef);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchMenu, setAnchMenu] = useState(null);
  const [adminDetails, setAdminDetails] = useState({});

  const handleAccountActionsClick = () => (event) => {
    // setSelectedOption(params);
    console.log("clicked");
    setAnchMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchMenu(null);
  };
  const handleMenuItemClick = (prop) => {
    handleCloseMenu();
    if (prop === "view") {
      navigate("/admin/profile");
    } else if (prop === "edit") {
      navigate("/admin/profile");
    } else if (prop === "logout") {
      navigate("/");
      handleCloseMenu();
    } else handleCloseMenu();
  };

  const populateProfile = () => {
    return getAdminProfile(admin_code).then((res) => {
      if (res.status === 200) {
        setAdminDetails(res.data);
        dispatch(setCurrentAdminDetail({ currentAdminDetail: res.data }));
      } else {
        console.log(`err`);
      }
    });
  };

  useEffect(() => {
    populateProfile();
  }, []);

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
      <div className="Navbar fixed top-0 left-0 right-0">
        <div className="logo_section">
          <img
            className="cursor-pointer"
            src="https://www.seekpng.com/png/full/8-84419_linkedin-logo-png-icon-linkedin-logo-png.png"
            alt="logo"
          />

          {/* <SearchIcon className = 'spair_search'/> */}
          <div className="search_bar">
            <SearchIcon className="search_icon" />
            <input placeholder="search"></input>
          </div>
        </div>
        <div className="nav_section">
          <ul>
            <li className="active" onClick={() => navigate("/admin")}>
              {/* <NavLink to="/seeker"> */}
              <HomeIcon />
              <span className="nav_text">Home</span> {/* </NavLink> */}
            </li>

            <li onClick={() => navigate("/admin/employers")}>
              <Groups2Icon />
              <span className="nav_text">All Employers</span>
            </li>
            <li onClick={() => navigate("/admin/seekers")}>
              <GroupIcon />
              <span className="nav_text">All Seekers</span>
            </li>
            <li onClick={() => navigate("/admin/users")}>
              <Diversity3Icon />
              <span className="nav_text"> All Admins</span>
            </li>
            <li onClick={() => navigate("/admin/job-tags")}>
              <HailIcon />
              <span className="nav_text">Job Tags</span>
            </li>
            <li onClick={() => navigate("/admin/all-posts")}>
              <BrowseGalleryIcon />
              <span className=" text-white pl-1 pr-1 rounded-full -mt-[20px] ml-[16px]">
                4
              </span>
              <span className="nav_text">All Posts</span>
            </li>
            <li onClick={handleAccountActionsClick()}>
              {" "}
              <Avatar src={adminDetails.avatar_url} sx={{ mr: 1, m: -1 }} />
              <span className="nav_text"> {adminDetails.full_name}</span>
            </li>
            <li className="line"></li>
          </ul>
        </div>
      </div>
      <Outlet />
      <AccountDetails />
    </div>
  );
}

export default AdminNav;
