import React, { useState, useEffect } from "react";
import { selectLoggedInUserRef } from "../../../features/users/userSlice";
import { useSelector } from "react-redux";
import {
    Chip,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Avatar,
    Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { getAllPostComments, commentOnPost } from "../../../api/common/commonApis";


function RenderComments({ postCode }) {
  const [text, setText] = useState("");
  const [postComments, setPostComments] = useState([]);
  const [commentData, setCommentData] = useState({
    content: "",

    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });

  const {
    content,

    snackbarMessage,
    openSnackbar,
    snackbarSeverity,
  } = commentData;

  const user_code = useSelector(selectLoggedInUserRef);

  const fetchComments = () => {
    getAllPostComments(postCode).then((res) => {
      if (res.status === 200) {
        setPostComments(res.data);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let post_code = postCode
    if (commentData){
        commentOnPost(commentData.content, post_code, user_code).then((res) => {
            if (res.status === 201){
                setCommentData({...commentData, content: ""});
                // todo snackar message
                // todo: rerender page
                fetchComments();
            }
        })
    }    
  };
  const handleChange = (prop) => (event) => {
    setCommentData({ ...commentData, [prop]: event.target.value });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

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
        children: `${name.split(' ')[0][0]}`,
    };
} 

  return (
    <div className="border border-white flex-1 h-220 bg-white rounded-2xl">
      <div className="p-4">
        {/* <img
          src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
          alt="profile_image"
          className="w-10 h-10 rounded-full mr-4"
        /> */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            className="flex-1 py-2 px-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={content}
            autoComplete="off"
            onChange={handleChange("content")}
            name="content"
            placeholder="Comment on post"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors focus:outline-none"
          >
            Post Comment
          </button>
        </form>
      </div>
      <div className="p-4">
        {/* {"Most Recent Comments"} */}
        {postComments.map((comment) => {
          return (
            <Card
              sx={{
                my: 1,
              }}
            >
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
                  sx={{ mb: 1 }}
                >
                  <Typography sx={{ fontWeight: "medium" }}>
                    {comment.content}
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default RenderComments;
