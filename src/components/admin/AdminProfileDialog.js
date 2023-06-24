import React, { useState, useEffect } from "react";
import { Dialog } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCurrentAdminDetail } from "../../features/admins/adminSlice";
import CustomSnackbar from "../common/utils/CustomSnackbar"
// apis
import { apis } from "../../api/axios/index";


const AdminProfileDialog = ({ openEditProfileDialog, closeEditProfileDialog }) => {
    // get details from state
    const currentAdminDetails = useSelector(selectCurrentAdminDetail);
    const admin_code = currentAdminDetails.id
  const [avatar, setAvatar] = useState(null);

    const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);    
  };

    
    const [values, setValues] = useState({
        full_name: "",
        email: "",
        password: "",
        password_confirmation: "",

        snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
    });
    const {
        full_name,
        email,
        password,
        password_confirmation,

        snackbarMessage,
    openSnackbar,
    snackbarSeverity,
    } = values;
    // A function that updates local state with redux state
    const populateProfile = () => {
        setValues(currentAdminDetails)
    }
    // run populate on component mount
    useEffect(() => {
        populateProfile();
    }, [])
    
    
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
    {full_name && formData.append('full_name', full_name)}
    {email && formData.append('email', email)}
    console.log(formData)
    try {
      await apis.patch(`/admins/${admin_code}`, formData, {
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
                  for="first_name"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Full Name
                </label>
                <input
                  id="full_name"
                  type="text"
                  name="full_name"
                  value={full_name}
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
               
              </div>
              <div className="md:w-1/2 px-3">
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
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                />
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

}

export default AdminProfileDialog;