import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import { motion, useAnimation } from "framer-motion";
import RenderComments from "../../RenderComments";
import { selectCurrentUserRole } from "../../../../../features/users/userSlice";
import { selectCurrentEmployerDetail } from "../../../../../features/employers/employerSlice";
import { selectCurrentSeekerDetail } from "../../../../../features/seekers/seekerSlice";
function PostCard({ postData }) {
  const [openCommentCard, setOpenCommentCard] = useState(false);
  const [likes, setLikes] = useState(postData.likes);
  const controls = useAnimation();
  const profile1 = useSelector(selectCurrentEmployerDetail);
  const profile2 = useSelector(selectCurrentSeekerDetail);
const user_role = useSelector(selectCurrentUserRole);

// Define a state variable to hold the current profile data
const [profile, setProfile] = useState({});

 // Function to display the appropriate profile based on user role
 const displayProfile = () => {
  if (user_role === "SEEKER") {
    setProfile(profile2);
  } else {
    setProfile(profile1);
  }
};

useEffect(() => {
  displayProfile();
}, []);

  const handleLike = () => {
    // Increment the likes locally
    setLikes(likes + 1);

    // Trigger the like animation
    controls.start({ scale: [1, 1.2, 0.9, 1.1, 1], color: "blue" });
  };
  console.log(likes);

  // A function that inverts the variable open comment card
  const renderCommentCard = () => {
    setOpenCommentCard(!openCommentCard);
  };

  return (
    <>
      <div className="mb-2">
        <div className="border border-white flex-1 bg-white rounded-2xl mt-8 p-6">
          <div className="flex">
            <div className="w-10 h-10 rounded-full mr-10">
              <img
                src={profile.avatar_url}
                alt="profile_image"
              />
            </div>
            <div>
              <h3 className="text-base font-sans">{postData.user.username}</h3>
              <p className="text-xs text-gray-400 mt-[-8px]">
                {postData.user.role}
              </p>
            </div>
          </div>
          <div className="font-medium mb-1">
            <p>{postData.title}</p>
          </div>
          <div className="font-light mb-3">
            <p>{postData.description}</p>
          </div>

          <div className="w-full object-contain">
            {postData.media_url && (
              <>
                {postData.media_url.includes(".mp4") ? (
                  <video
                    src={postData.media_url}
                    className="max-w-full h-[950px]"
                    alt="post"
                    controls
                  />
                ) : (
                  <img
                    src={postData.media_url}
                    className="max-w-full h-[450px]"
                    alt="post"
                  />
                )}
              </>
            )}
          </div>

          <div className="flex items-center justify-between mt-2 mb-5 pl-5">
            <motion.button
              className="flex items-center text-gray-400 rounded-5 px-3 py-1 cursor-pointer"
              onClick={handleLike}
              whileTap={{ scale: 0.9 }} // Add scaling effect when the button is tapped
              initial={{ scale: 1 }} // Set the initial scale to 1
              animate={controls} // Pass the animation controls to the button
              transition={{
                type: "spring",
                duration: 0.5,
                bounce: 0.5,
              }} // Add spring animation with bounce effect
            >
              <ThumbUpOffAltIcon className="mr-1" />
              <span className="text-xs">{likes}</span>
            </motion.button>
            <button
              className="flex items-center text-gray-400 rounded-5 px-3 py-1 cursor-pointer focus:outline-none"
              onClick={renderCommentCard}
            >
              <MessageRoundedIcon className="mr-1" />
              <span className="text-xs">Comment</span>
            </button>
          </div>
          {openCommentCard && <RenderComments postCode={postData.post_code} />}
        </div>
      </div>
    </>
  );
}

export default PostCard;
