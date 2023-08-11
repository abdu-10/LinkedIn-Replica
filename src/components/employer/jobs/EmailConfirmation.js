import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Avatar,
  Box,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { selectCurrentEmployerDetail } from "../../../features/employers/employerSlice";
import { selectCurrentJobDetail } from "../../../features/jobs/jobSlice";
import { setCurrentJobDetail } from "../../../features/jobs/jobSlice";
import { requestJobeCode } from "../../../api/employer/employerApis";
import CustomSnackbar from "../../common/utils/CustomSnackbar";
import { selectLoggedInUserRef } from "../../../features/users/userSlice";

const EmailConfirmation = () => {
  const [values, setValues] = useState({
    email: "",

    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });
  const profile = useSelector(selectCurrentEmployerDetail);
  const user_ref = useSelector(selectLoggedInUserRef);
  const job = useSelector(selectCurrentJobDetail);
  const job_id = job.id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    email,

    snackbarMessage,
    openSnackbar,
    snackbarSeverity,
  } = values;
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setValues({ ...values, openSnackbar: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return requestJobeCode(job_id, user_ref, email)
      .then((res) => {
        if (res.status === 200) {
          setValues({
            email: "",

            snackbarMessage: "Email Sent Succesfully",
            openSnackbar: true,
            snackbarSeverity: "success",
          });
          navigate("/employer/job-post/complete_posting");
        }
      })
      .catch((err) => {
        setValues({
          email: "",

          snackbarMessage: err.message,
          openSnackbar: true,
          snackbarSeverity: "error",
        });
      });
  };

  return (
    <>
      <CustomSnackbar
        openSnackbar={openSnackbar}
        handleClose={closeSnackbar}
        snackbarMessage={snackbarMessage}
        snackbarSeverity={snackbarSeverity}
      />
      <Dialog open maxWidth="xs" fullWidth>
        <DialogTitle sx={{ borderBottom: "1px solid #e0e0e0", mb: 1 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              Enter company email address
            </Typography>
            <IconButton edge="end">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" alignItems="left">
            <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
              <Avatar src={profile.avatar_url} sx={{ width: 80, height: 80 }} />
            </Box>
            <Box sx={{ textAlign: "left", mb: 2 }}>
              <Typography variant="subtitle2">
                To continue, let’s confirm you work with {profile.company_name}{" "}
                using your company email address. We’ll send a verification code
                to this email.
              </Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Email address
            </Typography>
            <TextField
              onChange={handleChange("email")}
              name="email"
              value={email}
              fullWidth
              placeholder="example@example.com"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Box sx={{ mb: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1px",
                }}
              >
                <FiberManualRecordIcon
                  sx={{
                    fontSize: 10,
                    mr: 1,
                    color: "black",
                    verticalAlign: "middle",
                  }}
                />
                <Typography
                  variant="body2"
                  color="textPrimary"
                  sx={{ flexGrow: 1 }}
                >
                  This email address will be added to your account
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1px",
                }}
              >
                <FiberManualRecordIcon
                  sx={{
                    fontSize: 10,
                    mr: 1,
                    color: "black",
                    verticalAlign: "middle",
                  }}
                />
                <Typography
                  variant="body2"
                  color="textPrimary"
                  sx={{ flexGrow: 1 }}
                >
                  Your organization will see your email address is confirmed
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FiberManualRecordIcon
                  sx={{
                    fontSize: 10,
                    mr: 1,
                    color: "black",
                    verticalAlign: "middle",
                  }}
                />
                <Typography
                  variant="body2"
                  color="textPrimary"
                  sx={{ flexGrow: 1 }}
                >
                  We’ll ask permission before sharing any other information with
                  your organization
                </Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: "right", mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Send Code
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmailConfirmation;
