import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Avatar,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

export default function CommentCard({ comment }) {
  // SAMPLA PAYLOAD
  let sample = {
    comment_code: "036g-uaj9-mqkg",
    content: "How are you today!",
    post_code: "enci-syqh-g8jo",
    user_code: "desz-e43h-yomo",
    user: {
      user_code: "desz-e43h-yomo",
      username: "salim",
      role: "SEEKER",
    },
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    return color;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }
  console.log(sample);

  return (
    <>
      <Card sx={{ my: 0.5 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              {...stringAvatar(comment.user.username)}
              aria-label="recipe"
            />
          }
          title={comment.user.username}
          subheader={comment.user.role}
        />
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginBottom: 0.5 }}
          >
            <Typography sx={{ fontWeight: "medium" }}>
              {comment.content}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
