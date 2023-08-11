import React, { useState } from "react";
import { styled } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
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
import { useNavigate } from "react-router-dom";

import { addJobMetas } from "../../../api/employer/employerApis";
import { selectCurrentJobDetail, setCurrentJobDetail } from "../../../features/jobs/jobSlice";
import { useDispatch, useSelector } from "react-redux";

const StyledCheckbox = styled(Checkbox)({
  color: "#1976d2",
});

const FiltersNotifier = () => {
  const dispatch = useDispatch();
  const job = useSelector(selectCurrentJobDetail);
  const job_id = job.id;
  const navigate = useNavigate();
  const [qualificationSetting, setQualificationSetting] = useState(false); //anticipates value for filter
  const [screenerQuestions, setScreenerQuestions] = useState([
    { question: "", response: "" },
  ]); //forms a basis of the questions structure

  const [notifier, setNotifier] = useState({
    notifier_type: "email",
    detail: "",
  }); // shall pick the preferred contact or application mode

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNotifier((prevNotifier) => ({
      ...prevNotifier,
      [name]: value,
    }));
  };

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
    const { name, value } = event.target;
    values[index][name] = value;

    setScreenerQuestions(values);
    console.log(screenerQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (notifier.detail !== "") {
      const filter_payload = {
        notifier: notifier,
        screener_questions: screenerQuestions,
        qualification_setting: qualificationSetting,
      };

      addJobMetas(filter_payload, job_id).then((r) => {
        if (r.status === 200){
          dispatch(setCurrentJobDetail({ currentJobDetail: r.data }));
          navigate("/employer/job-post/job_verification");
        }
      })
    }

  };

  const handleAddCustomQuestion = () => {
    handleAddScreenerQuestions();
  };

  return (
    <Box sx={{ pt: 5 }}>
      <ValidatorForm autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid xs={2}></Grid>
          <Grid xs={8}>
            <Card>
              <CardContent>
                <Typography sx={{ fontWeight: "900", mb: 4 }}>
                  Receive qualified applicants
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography sx={{ fontWeight: "500" }}>
                        Receive applicants
                      </Typography>
                      <Select
                        fullWidth
                        value={notifier.notifier_type}
                        onChange={handleChange}
                        name="notifier_type"
                      >
                        <MenuItem value="email">By email</MenuItem>
                        <MenuItem value="website">
                          At an external website
                        </MenuItem>
                      </Select>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {notifier.notifier_type === "email" ? (
                      <Box>
                        <Typography sx={{ fontWeight: "500" }}>
                          Email address*
                        </Typography>
                        <TextValidator
                          fullWidth
                          onChange={handleChange}
                          name="detail"
                          value={notifier.detail}
                          validators={["required", "isEmail"]}
                          errorMessages={[
                            "This Field is Required",
                            "Invalid email",
                          ]}
                        />
                      </Box>
                    ) : (
                      <Box>
                        <Typography sx={{ fontWeight: "500" }}>
                          Website address*
                        </Typography>
                        <TextValidator
                          fullWidth
                          onChange={handleChange}
                          name="detail"
                          value={notifier.detail}
                          validators={["required", "isUrl"]}
                          errorMessages={[
                            "This Field is Required",
                            "Invalid URL",
                          ]}
                        />
                      </Box>
                    )}
                  </Grid>
                </Grid>
              </CardContent>
              {notifier.notifier_type === "email" && (
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{ mb: 1 }}
                  >
                    Screening questions
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                  >
                    We recommend adding 3 or more questions. Applicants must
                    answer each question.
                  </Typography>
                  {screenerQuestions.map((field, index) => (
                    <Grid container spacing={2} key={index}>
                      <Grid item xs={12}>
                        <Box>
                          <Typography sx={{ fontWeight: "600" }}>
                            Write a custom screening question
                          </Typography>
                          <TextValidator
                            placeholder=""
                            multiline
                            fullWidth
                            rows={3}
                            value={field.question}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                            type="text"
                            name="question"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box>
                          <Typography>Desired Response Type</Typography>
                          <Select
                            fullWidth
                            value={field.response_type}
                            onChange={(event) =>
                              handleInputChange(index, event)
                            }
                            name="response_type"
                          >
                            <MenuItem value="numeric">Numeric</MenuItem>
                            <MenuItem value="boolean">Yes/No</MenuItem>
                          </Select>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box>
                          <Typography>Desired Response</Typography>
                          {field.response_type === "numeric" ? (
                            <TextValidator
                              fullWidth
                              type="number"
                              onChange={(event) =>
                                handleInputChange(index, event)
                              }
                              name="response"
                              value={field.response}
                              validators={["required"]}
                              errorMessages={["This Field is Required"]}
                            />
                          ) : (
                            <Select
                              fullWidth
                              onChange={(event) =>
                                handleInputChange(index, event)
                              }
                              name="response"
                              value={field.response}
                            >
                              <MenuItem value="true">Yes</MenuItem>
                              <MenuItem value="false">No</MenuItem>
                            </Select>
                          )}
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Button
                            variant="outlined"
                            onClick={() => handleRemoveScreenerQuestions(index)}
                          >
                            X
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  ))}
                  <Button variant="outlined" onClick={handleAddCustomQuestion}>
                    Add Custom Question
                  </Button>
                </CardContent>
              )}
              <CardActions>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: "500", mr: 1 }}>
                    Filter out and send rejections to applicants who don’t meet
                    any must-have qualifications
                  </Typography>
                  <StyledCheckbox
                    sx={{ mt: 1 }}
                    checked={qualificationSetting}
                    onChange={handleCheckboxChange}
                  />
                </Box>
              </CardActions>
              <CardActions>
                <Box sx={{ ml: "auto", mt: 2 }}>
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
