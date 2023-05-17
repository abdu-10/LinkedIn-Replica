import React from "react";
import "./post.css";
import { useNavigate } from "react-router-dom";

function Post() {
  const navigate = useNavigate()
  return (
    <div className="Post">
      <div className="Post-wrapper">
        <h2>Post your job for millions of people to see</h2>
        <button onClick={()=> navigate("/seeker")}>Post a job</button>
      </div>
    </div>
  );
}

export default Post;
