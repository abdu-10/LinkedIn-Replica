import React, { useState } from "react";
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
import { Navigate, useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomTable from "../tables/CustomTable";
import UsersNav from "../Navs/UsersNav";
function UsersTable() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [rowParams, setRowParams] = useState({});
  const [loading, setLoading] = useState(false);

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (prop) => {
    if (prop === "view") {
      navigate("/employer/details");
      handleCloseMenu();
    } else if (prop === "verify") {
      navigate("/employer/details");
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
        {" "}
        {/* <EmployerDetails
        />{" "} */}
        {/* <DeleteAccount
          openDeleteAccount={openDeleteAccount}
          closeDeleteModal={closeDeleteModal}
          rider_code={rowParams.code}
          // deactivationStatus={deactivationStatus}
          // fetchStays={fetchRiders}
        /> */}
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
          <MenuItem onClick={() => handleMenuItemClick("verify")}>
            <Box display="flex" alignItems="center" textAlign="center">
              <VisibilityOutlinedIcon
                sx={{
                  color: `primary.main`,
                  mr: 1,
                  fontSize: "medium",
                }}
              />
              Verify
            </Box>
          </MenuItem>
        </Menu>{" "}
      </>
    );
  };

  const rows = [
    {
      code: "eueueuehklll",
      full_name: "Steve",
      email: "steve@gmail.com",
      user_name: "stevo10"
    },
    {
      code: "eueueuehnkii",
      full_name: "Abdu",
      email: "abdu@gmail.com",
      user_name: "abdu10"
      
    },
  ];

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

    // {
    //   field: "actions",
    //   type: "actions",
    //   headerName: "Actions",
    //   width: 80,
    //   renderCell: (params) => {
    //     return (
    //       // on click on the viw, user is able to see the rider deatils in depth
    //       <div onClick={handleRiderActionClick(params)}>
    //       <Box display="flex" alignItems="center" textAlign="center" >
    //           <VisibilityOutlinedIcon
    //             sx={{
    //               color: `primary.main`,
    //               mr: 1,
    //               fontSize: "medium",
    //             }}
    //           />
    //         </Box>
    //       </div>
    //     );
    //   },
    // },
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
        {!loading && <CustomTable columns={columns} rows={rows} />}
      </Box>
    </>
  );
}

export default UsersTable;
