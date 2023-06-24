import React, { useState, useEffect } from "react";
import "./Maincontent.css";
import CloseIcon from "@mui/icons-material/Close";
import Picker from "emoji-picker-react";
import { createPost } from "../../../api/common/commonApis";
import CustomSnackbar from "../utils/CustomSnackbar";
import { selectLoggedInUserRef } from "../../../features/users/userSlice";
import { useSelector } from "react-redux";
// apis
import { apis } from "../../../api/axios";

function CreatePost({ formx, setForm }) {
  const [text, setText] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [image, setImage] = useState(null); //preview selected image
  const [imagePost, setImagePost] = useState(""); //carry the actual image and save in storage bucket
  const [imageName, setImageName] = useState("");
  const user_id = useSelector(selectLoggedInUserRef);
  console.log(user_id)

  const [media, setMedia] = useState(null);

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
    {
      media && formData.append("media", media);
    }
    {
      title && formData.append("title", title);
    }
    {
      description && formData.append("description", description);
    }
    {
      user_id && formData.append("user_id", user_id);
    }
    {
      likes && formData.append("likes", likes);
    }
    console.log(formData);
    try {
      await apis.post(`/posts`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setValues({
        ...values,
        snackbarMessage: "Posted Succesfully",
        openSnackbar: true,
        snackbarSeverity: "success",
      });
      setTimeout(() => {
        closeForm();
      }, 2000);
    } catch (err) {
      // TODO: DISPLAY ERROR MESSAGES ON APPROPRIATE FIELD
      setValues({
        ...values,
        snackbarMessage: "Something Went Wrong, please retry",
        openSnackbar: true,
        snackbarSeverity: "error",
      });
    }
  };
  //  show emoji in textbox
  const onEmojiClick = (event, emojiObject) => {
    setText((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  // close form
  const closeForm = () => {
    setForm(false);
    setImage("");
    setImagePost("");
  };

  // delete selected image
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
        <div className="flex flex-row h-screen wrapper fixed top-0 left-0 right-0 z-50  w-[100%] justify-start ">
          <div className="max-h-screen container bg-white w-[40%] mt-[40px] m-auto p-[10px] rounded-[8px] relative">
            <div className="head flex items-center space-x-96 ">
              <div className="text-[23px]">
                <p>New Post</p>
              </div>
              <div
                className="hover:rounded-full hover:bg-gray-300 p-1 cursor-pointer"
                onClick={() => closeForm()}
              >
                <CloseIcon />
              </div>
            </div>
            <hr className="mt-3 mb-3 " />
            <div className="flex">
              <div>
                <img
                  className="rounded-full w-[60px]"
                  src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                  alt="profile_image"
                />
              </div>
              <div className="ml-5">
                <p className="text-18 font-bold">Abdu</p>
              </div>
            </div>
            {/* form  */}

            <div className="mt-[20px]">
              <form onSubmit={handleSubmit}>
                <label
                  for="title"
                  class="block mb-2 text-lg font-medium text-gray-900"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  className="w-[99%] p-3 outline-none border-none"
                  value={title}
                  onChange={handleChange("title")}
                  placeholder="Post Title here"
                />
                <label
                  for="description"
                  class="block mb-2 text-lg font-medium text-gray-900"
                >
                  Description
                </label>
                <textarea
                  rows="2"
                  id="description"
                  type="text"
                  name="description"
                  className="w-[99%] p-3 outline-none border-none"
                  value={description}
                  onChange={handleChange("description")}
                  placeholder="what do you want to talk about ?"
                />
                <label
                  for="media"
                  class="block mb-2 text-lg font-medium text-gray-900"
                >
                  Media
                </label>
                <input
                  id="media"
                  type="file"
                  name="media"
                  className="w-[99%] p-3 outline-none border-none"
                  // value={media}
                  onChange={handleMediaChange}
                  placeholder="Enter image url"
                />

                {/* display emoji image so that the user clickes on it to display the emoji picker */}
                <img
                  className="emoji-icon cursor-pointer w-[20px] ml-3 "
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

                {/* display selected image */}
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
                      className="w-[98%] p-3 h-[250px]"
                    />
                    <h2>{imageName}</h2>
                  </div>
                ) : (
                  ""
                )}

                {/* navigations below the form */}
                <div className="mt-[20px] flex text-gray-600 ml-2 cursor-pointer items-center">
                  <div className=" space-x-3 border-r-2"></div>

                  <div className=" ml-96">
                    <button
                      onClick={handleSubmit}
                      className=" bg-gray-400 text-white cursor-pointer w-[80px] rounded-[15px]  p-2 text-[14px] font-bold"
                    >
                      post
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* <Maincontent form = {form} setForm = {setForm}/> */}
    </>
  );
}

export default CreatePost;
