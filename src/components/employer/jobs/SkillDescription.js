import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import SkillSelector from "./SkillSelector";
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
import { connect, useSelector } from "react-redux";
import {
  selectCurrentEmployerDetail,
  setCurrentEmployerDetail,
} from "../../../features/employers/employerSlice";
import { addJobDesc } from "../../../api/employer/employerApis";
import {
  selectCurrentJobDetail,
  setCurrentJobDetail,
} from "../../../features/jobs/jobSlice";
// import { Connect } from "react-redux";
import { withRouter } from "../../common/utils/withRouter";

class SkillDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      editorState: EditorState.createEmpty(),
    };
  }

  handleEditorStateChange = (editorState) => {
    this.setState({ editorState });
  };

  render() {
    const { editorState } = this.state;
    const contentLength = editorState
      .getCurrentContent()
      .getPlainText("").length;
    const charactersRemaining = 10000 - contentLength;
    const toolbarOptions = {
      options: ["inline", "list"],
      inline: {
        options: ["bold", "italic", "underline"],
      },
      list: {
        options: ["unordered", "ordered"],
      },
    };

    const editorContainerStyle = {
      border: "1px solid #ccc",
      borderRadius: "4px",
      position: "relative",
    };

    const charactersRemainingStyle = {
      position: "absolute",
      bottom: "5px",
      right: "5px",
    };
    let skills = [];

    const readSkills = (skillsArrays) => {
      skills = skillsArrays;
    };

    const jobDetails = this.props.currentJobDetail;

    const handleSubmit = (event) => {
      event.preventDefault();
      
      const description = editorState.getCurrentContent().getPlainText();
      addJobDesc(description, skills, jobDetails.id).then((res) => {
        if (res.status === 200) {
          // dispatch
          this.props.setCurrentJobDetail(res.data);
          // navigate
          this.props.navigate("/employer/job-post/cont&filters");
        }
      });
    };

    return (
      <Grid container spacing={2}>
        <Grid xs={3}></Grid>
        <Grid xs={6} sx={{ mt: 5 }}>
          {" "}
          <Box>
            <Card
              sx={{
                mt: 5,
              }}
            >
              <CardContent
                sx={{
                  mb: -2,
                }}
              >
                <Typography sx={{ fontWeight: "700" }}>Description*</Typography>
              </CardContent>
              <CardContent>
                <Box style={editorContainerStyle}>
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={this.handleEditorStateChange}
                    toolbar={toolbarOptions}
                    editorStyle={{ height: "40vh", maxHeight: "30vh" }}
                    maxLength={10000}
                  />
                  <div style={charactersRemainingStyle}>
                    {charactersRemaining}/10000
                  </div>
                </Box>
              </CardContent>
              <CardContent
                sx={{
                  mb: -2,
                }}
              >
                <Typography sx={{ fontWeight: "700" }}>Skills*</Typography>
                <Typography>
                  Add skill keywords to make your job more visible to the right
                  candidates.
                </Typography>
              </CardContent>
              <CardContent>
                <SkillSelector func={readSkills} />
              </CardContent>
              <CardActions>
                <Box sx={{ mt: 1 }}>
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
                    Submit details
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid xs={3}></Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentJobDetail: selectCurrentJobDetail(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentJobDetail: (detail) => dispatch(setCurrentJobDetail({currentJobDetail: detail})),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SkillDescription));
