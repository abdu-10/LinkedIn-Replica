import React, { useState, useEffect } from "react";
import {
  Typography,
  Stack,
  IconButton,
  Box,
  Menu,
  MenuItem,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomTable from "../tables/CustomTable";
import { getAllAdmins } from "../../../api/admin/adminApis";
import { setCurrentAdminDetail } from "../../../features/admins/adminSlice";
import UsersNav from "../Navs/UsersNav";
function UsersTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      navigate("profile");
      dispatch(
        setCurrentAdminDetail({
          currentAdminDetail: rowParams,
        })
      );
      handleCloseMenu();
    } else if (prop === "edit") {
      navigate("profile");
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
      <UsersNav />

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ p: 4 }}
      >
        <Typography variant="h6" sx={{ fontWeight: "800" }}>
          These are All the Admins on the platform
        </Typography>
      </Stack>
      <Box
        sx={{
          mb: 50,
          mx: 9,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
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
