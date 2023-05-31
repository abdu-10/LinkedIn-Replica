import React, { useState, useEffect } from "react";
import { Dialog } from "@mui/material";
import { updateEmployerProfile } from "../../../api/employer/employerApis";
import { useSelector } from "react-redux";
import { selectCurrentEmployerDetail } from "../../../features/employers/employerSlice";
import CustomSnackbar from "../../common/utils/CustomSnackbar";

const EditEmployerProfileDialog = ({
  openEditProfileDialog,
  closeEditProfileDialog,
}) => {
  const currentEmployerDetails = useSelector(selectCurrentEmployerDetail);
  const employer_code = currentEmployerDetails.employer_code;
  console.log(employer_code);
  const [values, setValues] = useState({
    company_name: "",
    email: "",
    phone_number: "",
    location: "",
    avatar: "",
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
    avatar,
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
  function handleSubmit(e) {
    e.preventDefault();
    return updateEmployerProfile(
      employer_code,
      company_name,
      email,
      phone_number,
      location,
      avatar,
      description,
      password,
      password_confirmation
    ).then((res) => {
      if (res.status == 200) {
        console.log("Account updated");
        setValues({
          ...values,
          snackbarMessage: "Account Updated Succesfully",
          openSnackbar: true,
          snackbarSeverity: "success",
        });
        setTimeout(() => {
          closeEditProfileDialog();
        }, 3000);
      } else {
       console.log(res.data.message);
      }
    })
    .catch((err) => {
        // log error and display error snackbar
        console.log(err);
        setValues({
          ...values,
          snackbarMessage: err.message,
          openSnackbar: true,
          snackbarSeverity: "error",
        });
      });
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
                for="avatar"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Avatar
              </label>
              <input
                id="avatar"
                type="text"
                name="avatar"
                value={avatar}
                onChange={handleChange}
                class="w-full font-serif  p-4 text-black bg-stone-50 outline-none rounded-md"
              ></input>
              <label
                for="description"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Description
              </label>
              <input
                id="description"
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                class="w-full font-serif  p-4 text-black bg-stone-50 outline-none rounded-md"
              ></input>
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

              <div className="md:col-span-2">
                <label for="password">Enter Preferred Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={password}
                  onChange={handleChange}
                  placeholder=""
                />
              </div>
              <div className="md:col-span-2">
                <label for="password_confirmation">Enter Password Again</label>
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={password_confirmation}
                  onChange={handleChange}
                  placeholder=""
                />
              </div>
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
