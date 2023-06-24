import React, { useState, useEffect } from "react";
import {
  Typography,
  Stack,
  IconButton,
  Avatar,
  Box,
  Menu,
  MenuItem,
  LinearProgress,
} from "@mui/material";
import { Navigate, useNavigate, Outlet } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomTable from "../tables/CustomTable";
import { getAllSeekers } from "../../../api/admin/adminApis";
import { setCurrentSeekerDetail } from "../../../features/seekers/seekerSlice";
import { useDispatch } from "react-redux";

function AllSeekers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [rowParams, setRowParams] = useState({});
  const [loading, setLoading] = useState(false);
  const [seekersPayload, setSeekersPayload] = useState([]);

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  const fetchSeekers = () => {
    getAllSeekers().then((res) => {
      if (res.status === 200) {
        setSeekersPayload(res.data);
        console.log(seekersPayload);
      }
    });
  };

  useEffect(() => {
    fetchSeekers();
  }, []);

  const handleMenuItemClick = (prop) => {
    if (prop === "view") {
      navigate("details");
      dispatch(
        setCurrentSeekerDetail({
          currentSeekerDetail: rowParams,
        })
      );
      handleCloseMenu();
    } else if (prop === "verify") {
      navigate("details");
    } else if (prop === "delete") {
      navigate();
    } else handleCloseMenu();
  };

  const handleEmployerActionsClick = (params) => (event) => {
    setRowParams(params.row);
    setAnchorElNav(event.currentTarget);
  };

  const SeekerActions = () => {
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
              <VisibilityOutlinedIcon
                sx={{
                  color: "primary.main",
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              View
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("edit")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <VisibilityOutlinedIcon
                sx={{
                  color: "primary.main",
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Edit
            </Box>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("verify")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <VisibilityOutlinedIcon
                sx={{
                  color: "primary.main",
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Verify
            </Box>
          </MenuItem>
        </Menu>
      </>
    );
  };

  const columns = [
    {
      field: "full_name",
      headerName: "Full Name",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 120,
    },
    {
      field: "date_of_birth",
      headerName: "D.O.B",
      width: 150,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
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
      <Stack direction="row" justifyContent="center" alignItems="flex-start" sx={{ p: 12 }}>
        <Typography variant="h6" sx={{ fontWeight: "800" }}>
          These are All the Seekers on the platform
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
        <SeekerActions />
        {loading && <LinearProgress />}
        {!loading && (
          <CustomTable
            columns={columns}
            rows={seekersPayload}
            disableColumnMenu
            disableColumnSelector
            pageSize={10}
            density="comfortable"
          />
        )}
      </Box>
    </>
  );
}

export default AllSeekers;
