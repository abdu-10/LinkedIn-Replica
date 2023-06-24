import React, { useState, useEffect } from "react";
import { Dialog } from "@mui/material";

import { useSelector } from "react-redux";
import { selectCurrentEmployerDetail } from "../../../features/employers/employerSlice";
import CustomSnackbar from "../../common/utils/CustomSnackbar";

// apis
import { apis } from "../../../api/axios";
import { updateEmployerProfile } from "../../../api/employer/employerApis";

const EditEmployerProfileDialog = ({
  openEditProfileDialog,
  closeEditProfileDialog,
}) => {
  const currentEmployerDetails = useSelector(selectCurrentEmployerDetail);
  const employer_code = currentEmployerDetails.id;  
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);    
  };
  const [values, setValues] = useState({
    company_name: "",
    email: "",
    phone_number: "",
    location: "",
    description: "",
    password: "",
    password_confirmation: "",

    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });
  const {
    company_name,
    email,
    phone_number,
    location,
    description,
    password,
    password_confirmation,

    snackbarMessage,
    openSnackbar,
    snackbarSeverity,
  } = values;

  // A function that updates local state with redux state
  const populateProfile = () => {
    setValues(currentEmployerDetails);
  };
  // run populate on component mount
  useEffect(() => {
    populateProfile();
  }, []);

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [key]: value,
    });
  }
  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setValues({ ...values, openSnackbar: false });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    {avatar && (formData.append('avatar', avatar))}
    {company_name && formData.append('company_name', company_name)}
    {email && formData.append('email', email)}
    {phone_number && formData.append('phone_number', phone_number)}
    {location && formData.append('location', location)}
    {description && formData.append('description', description)}
    console.log(formData)
    try {
      await apis.patch(`/employers/${employer_code}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      setValues({
        ...values,
        snackbarMessage: "Profile Updated Succesfully",
        openSnackbar: true,
        snackbarSeverity: "success",
      });
      setTimeout(() => {
        closeEditProfileDialog();
      }, 2000);
    }catch(err) {
      // log error and display error snackbar
      console.log(err);
      setValues({
        ...values,
        snackbarMessage: err.message,
        openSnackbar: true,
        snackbarSeverity: "error",
      });
    };
  }
  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={openEditProfileDialog}
      onClose={closeEditProfileDialog}
    >
      <CustomSnackbar
        openSnackbar={openSnackbar}
        handleClose={closeSnackbar}
        snackbarMessage={snackbarMessage}
        snackbarSeverity={snackbarSeverity}
      />
      <div className="bg-white shadow-md rounded mt-20 px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
          <form onSubmit={handleSubmit} className="flex">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                for="company_name"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Company Name
              </label>
              <input
                id="company_name"
                type="text"
                name="company_name"
                value={company_name}
                onChange={handleChange}
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              />
              <label
                for="email"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              />

              <label
                for="description"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                // type="text"
                name="description"
                value={description}
                onChange={handleChange}
                class="w-full font-serif  p-4 text-black bg-stone-50 outline-none rounded-md"
              ></textarea>
            </div>
            <div className="md:w-1/2 px-3">
              <label
                for="phone_number"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Phone Number
              </label>
              <input
                id="phone_number"
                type="text"
                name="phone_number"
                value={phone_number}
                onChange={handleChange}
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              />
              <label
                for="location"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Location
              </label>
              <input
                id="location"
                type="text"
                name="location"
                value={location}
                onChange={handleChange}
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              />
            {/* TODO: ACCEPT IMAGE UPLOADS */}
              <label
                for="avatar"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Avatar
              </label>
              <input
                id="avatar"
                type="file"
                name="avatar"
                // value={avatar}
                onChange={handleAvatarChange}
                class="w-full font-serif  p-4 text-black bg-stone-50 outline-none rounded-md"
              ></input>
            </div>
            <div className="md:col-span-5 text-right">
              <div className="inline-flex items-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bottom mt-96">
                  Update Account Details
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default EditEmployerProfileDialog;
