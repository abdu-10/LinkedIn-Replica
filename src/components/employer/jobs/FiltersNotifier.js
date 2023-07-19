import React, { useState } from "react";
import { styled } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Stack,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

import { addJobMetas } from "../../../api/employer/employerApis";

const StyledCheckbox = styled(Checkbox)({
  color: "#1976d2",
});

const FiltersNotifier = () => {
  const [qualificationSetting, setQualificationSetting] = useState(false);
  const [screenerQuestions, setScreenerQuestions] = useState([
    { question: "", response: "" },
  ]);
  const [notifier, setNotifier] = useState({
    notifier_type: "email",
    detail: "",
  });

  const handleCheckboxChange = (event) => {
    setQualificationSetting(event.target.checked);
  };

  const handleAddScreenerQuestions = () => {
    const values = [...screenerQuestions];
    values.push({
      question: "",
      response: "",
    });
    setScreenerQuestions(values);
  };

  const handleRemoveScreenerQuestions = (index) => {
    const values = [...screenerQuestions];
    values.splice(index, 1);
    setScreenerQuestions(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...screenerQuestions];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setScreenerQuestions(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(screenerQuestions, qualificationSetting);
  };

  return (
    <Box sx={{ pt: 5 }}>
      <ValidatorForm autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid xs={2}></Grid>
          <Grid xs={8}>
            {" "}
            <Card>
              <CardContent>
                <Grid xs={12} md={6}>
                  <Box>
                    {" "}
                    <Typography sx={{ fontWeight: "500" }}>
                      Receive applicants
                    </Typography>{" "}
                    <Select
                      fullWidth
                      value={notifier_type}
                      onChange={handleChange("notifier_type")}
                    >
                      <MenuItem value="email">By email</MenuItem>
                      <MenuItem value="website">
                        At an external website
                      </MenuItem>
                    </Select>
                  </Box>
                </Grid>
                <Grid xs={12} md={6}>
                  {notifier_type === "email" ? (
                    <Box>
                      {" "}
                      <Typography sx={{ fontWeight: "500" }}>
                        Email address*
                      </Typography>
                      <TextValidator
                        fullWidth
                        onChange={handleChange("detail")}
                        name="detail"
                        value={detail}
                        validators={["required"]}
                        errorMessages={["This Field is Required"]}
                      />
                    </Box>
                  ) : (
                    <Box>
                      {" "}
                      <Typography sx={{ fontWeight: "500" }}>
                        Website address*
                      </Typography>
                      <TextValidator
                        fullWidth
                        onChange={handleChange("detail")}
                        name="detail"
                        value={detail}
                        validators={["required"]}
                        errorMessages={["This Field is Required"]}
                      />
                    </Box>
                  )}
                </Grid>
              </CardContent>
              <CardContent>
                {screenerQuestions.length > 0 &&
                  screenerQuestions.map((field, index) => {
                    return (
                      <>
                        <Grid container spacing={5}>
                          <Grid xs={2}></Grid>
                          <Grid
                            key={index}
                            container
                            xs={8}
                            mt={6}
                            // component="fieldset"
                            // sx={{
                            //   border: "solid 3px #295FAB",
                            //   borderRadius: "15px",
                            //   padding: (theme) => theme.spacing(2),
                            // }}
                          >
                            {/* <legend>
                              <Typography
                                sx={{ fontWeight: "600", color: "#295FAB" }}
                              >
                                Contact Detail
                              </Typography>
                            </legend> */}

                            <Grid xs={12} md={12}>
                              <Box>
                                {" "}
                                <Typography>Type Question</Typography>
                                <TextValidator
                                  placeholder=""
                                  fullWidth
                                  value={field.question}
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                  type="text"
                                  name="question"
                                  // validators={["required"]}
                                  // errorMessages={["This Field is Required"]}
                                />
                              </Box>{" "}
                            </Grid>
                            <Grid xs={12} md={6}>
                              <Box>
                                <Typography>Desired Respoonse</Typography>
                                <Select
                                  fullWidth
                                  placeholder="1"
                                  value={field.contact_type}
                                  onChange={(event) =>
                                    handleInputChange(index, event)
                                  }
                                  type="number"
                                  name="contact_type"
                                >
                                  <MenuItem value="1">One</MenuItem>
                                  <MenuItem value="2">Two</MenuItem>
                                  <MenuItem value="3">Three</MenuItem>
                                  <MenuItem value="4">Four</MenuItem>
                                </Select>
                              </Box>
                              <Box sx={{ mt: 4 }}>
                                <Button
                                  sx={{
                                    color: "error.main",
                                    borderColor: "error.main",
                                  }}
                                  variant="outlined"
                                  onClick={() =>
                                    handleRemoveScreenerQuestions(index)
                                  }
                                >
                                  Remove Question
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </CardContent>
              <CardContent>
                <StyledCheckbox
                  checked={qualificationSetting}
                  onChange={handleCheckboxChange}
                />
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
                    // onClick={handleSubmit}
                    disableElevation
                  >
                    Continue
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      </ValidatorForm>
    </Box>
  );
};

export default FiltersNotifier;
