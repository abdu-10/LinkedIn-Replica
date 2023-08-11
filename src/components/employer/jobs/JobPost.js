import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Box,
  Card,
  Button,
  CardContent,
  Typography,
  MenuItem,
  CardActions,
  Select,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";
import { selectCurrentEmployerDetail } from "../../../features/employers/employerSlice";
import { setCurrentJobDetail } from "../../../features/jobs/jobSlice";
import { postJob } from "../../../api/employer/employerApis";
import CustomSnackbar from "../../common/utils/CustomSnackbar";
export default function JobPost() {
  const employer = useSelector(selectCurrentEmployerDetail);
  const employer_id = employer.id;
  const comp_name = employer.company_name;
  const [values, setValues] = useState({
    job_title: "",
    company_name: comp_name,
    workplace_type: "",
    location: "",
    job_type: "",

    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    job_title,
    company_name,
    workplace_type,
    location,
    job_type,

    snackbarMessage,
    openSnackbar,
    snackbarSeverity,
  } = values;

  // handle input details
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setValues({ ...values, openSnackbar: false });
  };

  //   create initial job object
  const handleSubmit = (event) => {
    event.preventDefault();
    return postJob(
      job_title,
      company_name,
      workplace_type,
      location,
      job_type,
      employer_id
    )
      .then((res) => {
        if (res.status === 201) {
          setValues({
            job_title: "",
            company_name: comp_name,
            workplace_type: "",
            location: "",
            job_type: "",

            snackbarMessage: "Job Created Succesfully",
            openSnackbar: true,
            snackbarSeverity: "success",
          });

          dispatch(setCurrentJobDetail({ currentJobDetail: res.data }));
          navigate("desc&skill");
        }
      })
      .catch((err) => {
        setValues({
          job_title: "",
          company_name: comp_name,
          workplace_type: "",
          location: "",
          job_type: "",

          snackbarMessage: err.message,
          openSnackbar: true,
          snackbarSeverity: "error",
        });
      });
    // utilize the error block to render the error message in a snackBar
  };

  return (
    <>
    <CustomSnackbar
        openSnackbar={openSnackbar}
        handleClose={closeSnackbar}
        snackbarMessage={snackbarMessage}
        snackbarSeverity={snackbarSeverity}
      />
    <Grid container spacing={2}>
      <Grid xs={4}  sx={{
        mt: 12,
        mr:5,
        
      }}>
        <JobCard/>
      </Grid>
      <Grid xs={4} sx={{ m: 3 }}>
        {" "}
        <Box>
          {" "}
          <Card
            sx={{
              mt: 6,
            }}
          >
            <CardContent>
              <ValidatorForm
                autoComplete="off"
                onSubmit={(e) => handleSubmit(e)}
              >
                <Box>
                  {" "}
                  <Typography sx={{ fontWeight: "500" }}>Job Title</Typography>
                  <TextValidator
                    fullWidth
                    onChange={handleChange("job_title")}
                    name="job_title"
                    value={job_title}
                    validators={["required"]}
                    errorMessages={["This Field is Required"]}
                  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  {" "}
                  <Typography sx={{ fontWeight: "500" }}>Company</Typography>
                  <TextValidator
                    fullWidth
                    onChange={handleChange("company_name")}
                    name="company_name"
                    value={company_name}
                    validators={["required"]}
                    errorMessages={["This Field is Required"]}
                  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  {" "}
                  <Typography sx={{ fontWeight: "500" }}>
                    Workplace Type
                  </Typography>{" "}
                  <Select
                    fullWidth
                    value={workplace_type}
                    onChange={handleChange("workplace_type")}
                  >
                    <MenuItem value="onsite">
                      On-Site: Employees come to work in person
                    </MenuItem>
                    <MenuItem value="hybrid">
                      Hybrid: Employees work On-site and Off-site
                    </MenuItem>
                    <MenuItem value="remote">
                      Remote: Employees work Off-site
                    </MenuItem>
                  </Select>
                </Box>
                <Box sx={{ mt: 2 }}>
                  {" "}
                  <Typography sx={{ fontWeight: "500" }}>Location</Typography>
                  <TextValidator
                    fullWidth
                    onChange={handleChange("location")}
                    name="location"
                    value={location}
                    validators={["required"]}
                    errorMessages={["This Field is Required"]}
                  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  {" "}
                  <Typography sx={{ fontWeight: "500" }}>
                    Job Type
                  </Typography>{" "}
                  <Select
                    fullWidth
                    value={job_type}
                    onChange={handleChange("job_type")}
                  >
                    <MenuItem value="full">Full-Time</MenuItem>
                    <MenuItem value="contact">Contract</MenuItem>
                    <MenuItem value="volunteer">Volunteer</MenuItem>
                    <MenuItem value="part">Part-Time</MenuItem>
                    <MenuItem value="intern">Internship</MenuItem>
                  </Select>
                </Box>
              </ValidatorForm>
            </CardContent>
            <CardActions>
              <Box sx={{ mt: 2 }}>
                <Button
                  sx={{
                    color: "white",
                    bgcolor: "green",
                    fontSize: "1rem",
                  }}
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                  disableElevation
                >
                  Create Job
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Grid>
      <Grid xs={4}></Grid>
    </Grid>
    </>
  );
}
