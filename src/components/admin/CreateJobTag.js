import React, { useState } from "react";
import { configJob } from "../../api/admin/adminApis";
import CustomSnackbar from "../common/utils/CustomSnackbar";
import JobsNav from "./Navs/Jobs.Nav";

function CreateJobs() {
  const [values, setValues] = useState({
    group_name: "",

    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });
  const {
    group_name,

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    configJob(group_name)
      .then((res) => {
        if (res.status === 201) {
          setValues({
            group_name: "",

            snackbarMessage: "Job Tag Created Succesfully",
            openSnackbar: true,
            snackbarSeverity: "success",
          });
          setTimeout(() => {}, 3000);
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        // TODO: DISPLAY ERROR MESSAGES ON APPROPRIATE FIELD
        setValues({
          group_name: "",

          snackbarMessage: err.message,
          openSnackbar: true,
          snackbarSeverity: "error",
        });
      });
  };

  return (
    <>
      <JobsNav />
      <CustomSnackbar
        openSnackbar={openSnackbar}
        handleClose={closeSnackbar}
        snackbarMessage={snackbarMessage}
        snackbarSeverity={snackbarSeverity}
      />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
            Job Configuration
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="mb-4">
              <label
                htmlFor="group_name"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Job Tag
              </label>
              <input
                type="text"
                id="group_name"
                className="w-full px-3 py-2 rounded border-blue-500 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter job tag"
                value={group_name}
                onChange={handleChange("group_name")}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateJobs;
