import React, { useState,useEffect } from "react";
import "./Maincontent.css";
import CloseIcon from "@mui/icons-material/Close";
import Picker from "emoji-picker-react";
import CustomSnackbar from "../utils/CustomSnackbar";
import { selectLoggedInUserRef,selectCurrentUserRole } from "../../../features/users/userSlice";
import { useSelector } from "react-redux";
// apis
import { apis } from "../../../api/axios";
import { selectCurrentEmployerDetail } from "../../../features/employers/employerSlice";
import { selectCurrentSeekerDetail } from "../../../features/seekers/seekerSlice";


function CreatePost({ formx, setForm }) {
  const [text, setText] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePost, setImagePost] = useState("");
  const [imageName, setImageName] = useState("");
  const user_id = useSelector(selectLoggedInUserRef);
  const profile1 = useSelector(selectCurrentEmployerDetail);
  const profile2 = useSelector(selectCurrentSeekerDetail);
const user_role = useSelector(selectCurrentUserRole);

  const [media, setMedia] = useState(null);
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

  const handleMediaChange = (event) => {
    setMedia(event.target.files[0]);
  };

  const [values, setValues] = useState({
    title: "",
    description: "",
    user_id: "",
    likes: 0,
    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });

  const {
    title,
    description,
    likes,
    snackbarMessage,
    openSnackbar,
    snackbarSeverity,
  } = values;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setValues({ ...values, openSnackbar: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    media && formData.append("media", media);
    title && formData.append("title", title);
    description && formData.append("description", description);
    user_id && formData.append("user_id", user_id);
    likes && formData.append("likes", likes);

    try {
      await apis.post(`/posts`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setValues({
        ...values,
        snackbarMessage: "Posted Successfully",
        openSnackbar: true,
        snackbarSeverity: "success",
      });
      setTimeout(() => {
        closeForm();
      }, 2000);
    } catch (err) {
      setValues({
        ...values,
        snackbarMessage: "Something Went Wrong, Please Retry",
        openSnackbar: true,
        snackbarSeverity: "error",
      });
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    setText((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const closeForm = () => {
    setForm(false);
    setImage("");
    setImagePost("");
  };

  const deleteImage = () => {
    setImage("");
    setImagePost("");
  };

  return (
    <>
      <CustomSnackbar
        openSnackbar={openSnackbar}
        handleClose={closeSnackbar}
        snackbarMessage={snackbarMessage}
        snackbarSeverity={snackbarSeverity}
      />
      {formx && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-3/4 max-w-lg bg-white rounded-lg p-6 relative shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="text-2xl font-bold">New Post</div>
              <div
                className="hover:bg-gray-200 p-2 rounded-full cursor-pointer"
                onClick={() => closeForm()}
              >
                <CloseIcon />
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex items-center mb-6">
              <div>
                <img
                  className="rounded-full w-16"
                  src={profile.avatar_url}
                  alt="profile_image"
                />
              </div>
              <div className="ml-4">
                <p className="text-lg font-bold">{profile.company_name || profile.full_name}</p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="title" className="block mb-2 text-lg font-medium text-gray-900">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  className="w-full p-3 border rounded-md outline-none focus:border-blue-500"
                  value={title}
                  onChange={handleChange("title")}
                  placeholder="Post Title here"
                />
                <label htmlFor="description" className="block mb-2 text-lg font-medium text-gray-900">
                  Description
                </label>
                <textarea
                  rows="2"
                  id="description"
                  type="text"
                  name="description"
                  className="w-full p-3 border rounded-md outline-none focus:border-blue-500"
                  value={description}
                  onChange={handleChange("description")}
                  placeholder="What do you want to talk about?"
                />
                <label htmlFor="media" className="block mb-2 text-lg font-medium text-gray-900">
                  Media
                </label>
                <input
                  id="media"
                  type="file"
                  name="media"
                  className="w-full p-3 border rounded-md outline-none focus:border-blue-500"
                  onChange={handleMediaChange}
                  placeholder="Enter image URL"
                />

                <img
                  className="emoji-icon cursor-pointer w-6 ml-3"
                  src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                  onClick={() => setShowPicker((val) => !val)}
                  alt=""
                />
                {showPicker && (
                  <Picker
                    pickerStyle={{ width: "80%" }}
                    onEmojiClick={onEmojiClick}
                  />
                )}

                {image ? (
                  <div className="p-3">
                    <div
                      className="rounded-full bg-gray-200 hover:bg-gray-300 p-1 cursor-pointer float-right"
                      onClick={() => deleteImage()}
                    >
                      <CloseIcon />
                    </div>
                    <img
                      src={image}
                      alt="selected_image"
                      className="w-full p-3 h-48 object-cover rounded-md"
                    />
                    <h2>{imageName}</h2>
                  </div>
                ) : null}

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded-md text-lg font-bold"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreatePost;
