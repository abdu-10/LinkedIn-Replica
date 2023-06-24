import React, { useState, useEffect } from "react";
import { Typography, Stack, IconButton, Box, Menu, MenuItem, LinearProgress } from "@mui/material";
import { Navigate, useNavigate, Outlet } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomTable from "../tables/CustomTable";
import { getAllEmployers } from "../../../api/admin/adminApis";
import { setCurrentEmployerDetail } from "../../../features/employers/employerSlice";
import { useDispatch } from "react-redux";

function AllEmployers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [rowParams, setRowParams] = useState({});
  const [loading, setLoading] = useState(false);
  const [employersPayload, setEmployersPayload] = useState([]);

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  const fetchEmployers = () => {
    getAllEmployers().then((res) => {
      if (res.status === 200) {
        setEmployersPayload(res.data);
      }
    });
  };

  useEffect(() => {
    fetchEmployers();
  }, []);

  const handleMenuItemClick = (prop) => {
    if (prop === "view") {
      navigate("details");
      dispatch(
        setCurrentEmployerDetail({
          currentEmployerDetail: rowParams,
        })
      );
      handleCloseMenu();
    } else if (prop === "verify") {
      navigate("details");
    } else if (prop === "delete") {
      navigate();
    } else {
      handleCloseMenu();
    }
  };

  const handleEmployerActionsClick = (params) => (event) => {
    setRowParams(params.row);
    setAnchorElNav(event.currentTarget);
  };

  const EmployerActions = () => {
    return (
      <>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={() => handleMenuItemClick("view")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <VisibilityOutlinedIcon sx={{ color: "primary.main", mr: 1, fontSize: "medium" }} />
              View
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("edit")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <VisibilityOutlinedIcon sx={{ color: "primary.main", mr: 1, fontSize: "medium" }} />
              Edit
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("verify")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <VisibilityOutlinedIcon sx={{ color: "primary.main", mr: 1, fontSize: "medium" }} />
              Verify
            </Box>
          </MenuItem>
        </Menu>
      </>
    );
  };

  const columns = [
    {
      field: "company_name",
      headerName: "Name of Company",
      width: 250,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 120,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <IconButton onClick={handleEmployerActionsClick(params)}>
            <MoreVertIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <>
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ p: 12 }}>
        <Typography variant="h6" sx={{ fontWeight: "800" }}>
          These are all the Employers on the platform
        </Typography>
      </Stack>
      <Box
        sx={{
          mb:20,
          mx: 9,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <EmployerActions />
        {loading && <LinearProgress />}
        {!loading && (
          <CustomTable
            columns={columns}
            rows={employersPayload}
            disableColumnMenu
            disableColumnSelector
            pageSize={10}
            density="comfortable"
          />
        )}
      </Box>
      <Outlet />
    </>
  );
}

export default AllEmployers;
