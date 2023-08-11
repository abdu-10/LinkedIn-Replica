import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import PostAddIcon from "@mui/icons-material/PostAdd";

const JobCard = () => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        mx: "auto",
        my: 5,
        borderRadius: "20px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        width: "250px",
        height: "280px",
        padding: "1.5rem",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardContent>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            bgcolor: "transparent",
            color: "#333",
            fontWeight: 500,
            fontSize: "1rem",
            mb: 2,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            "& .MuiButton-label": {
              width: "100%",
              justifyContent: "flex-start",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "1.5rem",
              mr: 0.5,
            },
            "&:hover": {
              color: "#000",
            },
          }}
          onClick={() => navigate("/employer/myjobs")}
        >
          <WorkIcon sx={{ fontSize: "2rem" }} />
          My Jobs
        </Button>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            bgcolor: "transparent",
            color: "#333",
            fontWeight: 500,
            fontSize: "1rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
            "& .MuiButton-label": {
              width: "100%",
              justifyContent: "flex-start",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "1.5rem",
              mr: 0.5,
            },
            "&:hover": {
              color: "#000",
            },
          }}
          onClick={() => navigate("/employer/job-post")}
        >
          <PostAddIcon sx={{ fontSize: "2rem" }} />
          Post New Job
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
