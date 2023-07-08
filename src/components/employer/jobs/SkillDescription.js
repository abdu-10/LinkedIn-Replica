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
import { useSelector } from "react-redux";
import { selectCurrentEmployerDetail } from "../../../features/employers/employerSlice";
import { addJobDesc } from "../../../api/employer/employerApis";

class SkillDescription extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
  };


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
                <SkillSelector />
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
                  // onClick={handleSubmit}
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

export default SkillDescription;
