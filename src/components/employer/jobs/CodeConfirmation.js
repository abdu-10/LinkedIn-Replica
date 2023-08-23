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
  Box,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MdEmail } from "react-icons/md";
import CustomSnackbar from "../../common/utils/CustomSnackbar";
import { verifyJobListing } from "../../../api/employer/employerApis";
import { selectCurrentEmployerDetail } from "../../../features/employers/employerSlice";
import { setCurrentJobDetail } from "../../../features/jobs/jobSlice";
import { selectCurrentJobDetail } from "../../../features/jobs/jobSlice";

const CodeConfirmation = () => {
  const [values, setValues] = useState({
    confirmation_code: ["", "", "", "", "", ""],
    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });

  const { confirmation_code, snackbarMessage, openSnackbar, snackbarSeverity } = values;

  const profile = useSelector(selectCurrentEmployerDetail);
  const employer_id = profile.id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const job = useSelector(selectCurrentJobDetail);
  const job_id = job.id;

  const handleChange = (event, index) => {
    const { value } = event.target;
    const newConfirmationCode = [...confirmation_code];
    newConfirmationCode[index] = value;
    setValues({ ...values, confirmation_code: newConfirmationCode });
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setValues({ ...values, openSnackbar: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const code = confirmation_code.join(""); // Concatenate the values of each input box into one string
    return verifyJobListing(job_id, code)
      .then((res) => {
        if (res.status === 200) {
          setValues({
            confirmation_code: ["", "", "", "", "", ""],
            snackbarMessage: "Job posted Successfully",
            openSnackbar: true,
            snackbarSeverity: "success",
          });
          dispatch(setCurrentJobDetail({ currentJobDetail: res.data }));
          navigate("/employer");
        }
      })
      .catch((err) => {
        setValues({
          confirmation_code: ["", "", "", "", "", ""],
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
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Enter code</Typography>
            <IconButton edge="end">
              <CloseIcon />
            </IconButton>
          </Box>
          <hr className="my-2 border-t border-gray-300" />
        </DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <MdEmail className="text-4xl text-blue-500 mb-4" />
            <Typography variant="subtitle1" sx={{ fontWeight: "normal" }}>
              We've sent a verification code
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: "normal" }}>
              6-digit verification code
            </Typography>
            <div className="flex justify-center items-center space-x-2 mt-4">
              {[...Array(6)].map((_, index) => (
                <input
                  onChange={(event) => handleChange(event, index)}
                  name={`confirmation_code_${index}`}
                  value={confirmation_code[index] || ""}
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-10 h-12 border border-gray-300 text-center text-2xl focus:outline-none"
                />
              ))}
            </div>
            <Typography variant="subtitle1" className="mt-2 text-blue-500">
              Resend code
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>
              Confirm
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CodeConfirmation;
