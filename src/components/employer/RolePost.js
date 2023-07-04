import React, { useState, useEffect } from "react";
import { add_Desc_skill } from "../../api/employer/employerApis";
import { getAllJobTags } from "../../api/admin/adminApis";
import CustomSnackbar from "../common/utils/CustomSnackbar";

const ContinueJobPost = () => {
  const [values, setValues] = useState({
    description: "",
    skills: [],
    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });

  const {
    description,
    skills,
    snackbarMessage,
    openSnackbar,
    snackbarSeverity,
  } = values;

  const [jobTags, setJobTags] = useState([]);

  useEffect(() => {
    getAllJobTags()
      .then((response) => {
        if (response.status === 200) {
          setJobTags(response.data);
        } else {
          console.log(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

  const handleSubmit = (e) => {
    e.preventDefault();

    add_Desc_skill(description, skills)
      .then((response) => {
        if (response.status === 200) {
          console.log("Description and skills updated successfully");

          setValues({
            ...values,
            snackbarMessage: "Account Updated Successfully",
            openSnackbar: true,
            snackbarSeverity: "success",
          });
          setTimeout(() => {
            // closeEditProfileDialog();
          }, 3000);
        } else {
          console.log(response.data.message);
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
  };

  return (
    <>
      <CustomSnackbar
        openSnackbar={openSnackbar}
        handleClose={closeSnackbar}
        snackbarMessage={snackbarMessage}
        snackbarSeverity={snackbarSeverity}
      />
      <div className="flex mt-20 items-center justify-center h-30 bg-gray-100">
        <div className="w-2/3 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Tell us about the role
          </h2>
          <div>
            <h3 className="text-xl font-bold mb-4">Description</h3>
            <textarea
              className="w-full h-96 border border-gray-300 rounded px-4 py-2 resize-none"
              name="description"
              value={description}
              onChange={handleChange}
              placeholder="Enter job description..."
            />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="flex items-center">
              <select
                className="w-full border border-gray-300 rounded-l px-4 py-2"
                name="skills"
                value={skills}
                onChange={handleChange}
              >
                <option value="">Select a job tag...</option>
                {jobTags.map((tag) => (
                  <option value={tag.id} key={tag.id}>
                    {tag.group_name}
                  </option>
                ))}
              </select>
              <button className="bg-blue-500 text-white px-4 py-3 flex-none">
                Add Skill
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContinueJobPost;
