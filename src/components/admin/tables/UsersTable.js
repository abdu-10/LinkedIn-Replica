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
import { Navigate, useNavigate, Outlet  } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomTable from "../tables/CustomTable";
import { getAllAdmins } from "../../../api/admin/adminApis";
import { setCurrentAdminDetail } from "../../../features/admins/adminSlice";
import UsersNav from "../Navs/UsersNav";
function UsersTable() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [rowParams, setRowParams] = useState({});
  const [loading, setLoading] = useState(false);
  const [adminsPayload, setAdminsPayload] = useState([]);

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  const fetchAdmins = () => {
    getAllAdmins().then((res) => {
      if (res.status === 200) {
        setAdminsPayload(res.data);
        console.log(adminsPayload);
      }
    });
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleMenuItemClick = (prop) => {
    if (prop === "view") {
      navigate("details");
      handleCloseMenu();
    } else if (prop === "edit") {
      navigate("details");
    } else if (prop === "delete") {
      navigate();
    } else handleCloseMenu();
  };
  const handleEmployerActionsClick = (params) => (event) => {
    setRowParams(params.row);
    setAnchorElNav(event.currentTarget);
  };

  const AdminActions = () => {
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
                  color: `primary.main`,
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
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Edit
            </Box>
          </MenuItem>
        </Menu>{" "}
      </>
    );
  };

  const columns = [
    {
      field: "full_name",
      headerName: "Full Name",
      width: 250,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "user_name",
      headerName: "User Name",
      width: 150,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 80,
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
    <UsersNav/>
      <div class="flex-grow sm:text-left text-center mt-10 mb-10"></div>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ p: 7 }}
      >
        <Typography variant="h6" sx={{ fontWeight: "800" }}>
          These are All the Admins on the platform
        </Typography>
      </Stack>
      <Box
        sx={{
          mt: 5,
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "primary.lightest_gray",
            fontSize: 16,
          },
        }}
      >
        <AdminActions />
        {loading && <LinearProgress />}
        {!loading && <CustomTable columns={columns} rows={adminsPayload} />}
      </Box>
    </>
  );
}

export default UsersTable;
