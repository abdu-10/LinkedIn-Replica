import React, { useState } from "react";
import { createjob } from "../../api/employer/employerApis";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentEmployerDetail } from "../../features/employers/employerSlice";
import CustomSnackbar from "../../components/common/utils/CustomSnackbar";
import ContinueJobPost from "./RolePost";
const JobPosting = () => {
  const navigate = useNavigate();
  const loggedInEmployer = useSelector(selectCurrentEmployerDetail);
  const employer_id = loggedInEmployer.id
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    workplaceType: "",
    location: "",
    jobType: "",

    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });

  const {
   jobTitle,
   companyName,
   workplaceType,
   location,
   jobType,

    snackbarMessage,
    openSnackbar,
    snackbarSeverity,
  } = formData;

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  }; console.log(formData)

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setFormData({ ...formData, openSnackbar: false });
  };


  const handleJobSubmit = (e) => {
    e.preventDefault();

    createjob(
      jobTitle,
      companyName,
      workplaceType,
      location,
      jobType,
      employer_id
     
    )
      .then((response) => {
        if (response.status === 201) {
          // Job posted successfully, handle success case
          console.log("posted successfully");
          // Reset form values
          setFormData({
           ...formData,

           snackbarMessage: "Account Updated Succesfully",
            openSnackbar: true,
            snackbarSeverity: "success",
          });
          setTimeout(() => {
            navigate("/employer/desc");
          }, 3000);
         
        
      
        } else {
          console.log("Job posting failed.");
        }
      })
      .catch((error) => {
        // log error and display error snackbar
        console.log(error);
        setFormData({
          ...formData,
          snackbarMessage: error.message,
          openSnackbar: true,
          snackbarSeverity: "error",
        });
      });
  };

  return (
    <>
    <CustomSnackbar
                openSnackbar={openSnackbar}
                handleClose={closeSnackbar}
                snackbarMessage={snackbarMessage}
                snackbarSeverity={snackbarSeverity}
            />
    <div className="container  mx-auto mt-12 px-4 py-4">
      <h2 className="text-2xl font-bold text-center mb-4">Post Job Now</h2>
      <form onSubmit={(e) => handleJobSubmit(e)} className="max-w-sm mx-auto bg-white rounded-lg shadow-md px-6 py-4">
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-gray-800 text-sm font-semibold mb-1">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
            value={jobTitle}
            onChange={handleChange("jobTitle")}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-gray-800 text-sm font-semibold mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
            value={companyName}
            onChange={handleChange("companyName")}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="workplaceType" className="block text-gray-800 text-sm font-semibold mb-1">
            Workplace Type
          </label>
          <select
            id="workplaceType"
            name="workplaceType"
            className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
            value={workplaceType}
            onChange={handleChange("workplaceType")}
            required
          >
            <option value="office">On-site</option>
            <option value="Office">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-800 text-sm font-semibold mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
            value={location}
            onChange={handleChange("location")}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobType" className="block text-gray-800 text-sm font-semibold mb-1">
            Job Type
          </label>
          <select
            id="jobType"
            name="jobType"
            className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
            value={jobType}
            onChange={handleChange("jobType")}
            required
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Part-time">Contract</option>
            <option value="Contract">Temporary</option>
            <option value="Contract">Other</option>
            <option value="Contract">Volunteer</option>
            <option value="Contract">Internship</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    
    
    </>
  );
};

export default JobPosting;
