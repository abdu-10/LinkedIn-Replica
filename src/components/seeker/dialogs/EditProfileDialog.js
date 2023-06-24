import React, { useState, useEffect } from "react";
import { Dialog } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCurrentSeekerDetail} from "../../../features/seekers/seekerSlice";
import { updateSeekerProfile } from "../../../api/seeker/seekerApis";
import CustomSnackbar from "../../common/utils/CustomSnackbar";
// apis
import { apis } from "../../../api/axios";


const EditProfileDialog = ({ openEditProfileDialog, closeEditProfileDialog }) => {
    // get details from state
    const currentSeekerDetails = useSelector(selectCurrentSeekerDetail);
    const seeker_code = currentSeekerDetails.id
  const [avatar, setAvatar] = useState(null);

    const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);    
  };

    
    const [values, setValues] = useState({
        full_name: "",
        email: "",
        username: "",
        location: "",
        gender: "",
        date_of_birth: "",
        phone_number: "",
        preferred_job: "",
        availability: "",
        minimum_salary: 0,
        password: "",
        password_confirmation: "",

        snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
    });
    const {
        full_name,
        email,
        username,
        location,
        gender,
        date_of_birth,
        phone_number,
        preferred_job,
        availability,
        minimum_salary,
        password,
        password_confirmation,

        snackbarMessage,
    openSnackbar,
    snackbarSeverity,
    } = values;
    // A function that updates local state with redux state
    const populateProfile = () => {
        setValues(currentSeekerDetails)
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
    {phone_number && formData.append('phone_number', phone_number)}
    {location && formData.append('location', location)}
    {gender && formData.append('gender', gender)}
    {date_of_birth && formData.append('date_of_birth', date_of_birth)}
    {preferred_job && formData.append('preferred_job', preferred_job)}
    {availability && formData.append('availability', availability)}
     {minimum_salary && formData.append('minimum_salary', minimum_salary)}
     
    console.log(formData)
    try {
      await apis.patch(`/seekers/${seeker_code}`, formData, {
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
                <label
                  for="gender"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Gender
                </label>
                <input
                  id="gender"
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                />
                <label
                  for="preferred_job"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Preferred Job
                </label>
                <input
                  id="preferred_job"
                  type="text"
                  name="preferred_job"
                  value={preferred_job}
                  onChange={handleChange}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                />
                <label
                  for="minimum_salary"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Minimum Salary
                </label>
                <input
                  id="minimum_salary"
                  type="text"
                  name="minimum_salary"
                  value={minimum_salary}
                  onChange={handleChange}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                />
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
                <label
                  for="date_of_birth"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  D.O.B
                </label>
                <input
                  id="date_of_birth"
                  type="text"
                  name="date_of_birth"
                  value={date_of_birth}
                  onChange={handleChange}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                />
                <label
                  for="availability"
                  className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                >
                  Availability
                </label>
                <input
                  id="availability"
                  type="text"
                  name="availability"
                  value={availability}
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

export default EditProfileDialog;