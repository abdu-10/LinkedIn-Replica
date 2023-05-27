import React, { useState, useEffect } from "react";
import { Dialog } from "@mui/material";
import { UpdateSeekerProfile } from "../../api/seeker/seekerApis";
import { Password } from "@mui/icons-material";

function EditSeekerDetails() {
  // HARDCODED PROFILE CODE
  let seeker_code = "xe6w-cvls-kr88";
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    username: "",
    location: "",
    gender: "",
    date_of_birth: "",
    avatar: "",
    phone_number: "",
    preferred_job: "",
    availability: "",
    minimum_salary: 0,
    password: "",
    password_confirmation: "",
  });
  const {
    full_name,
    email,
    username,
    location,
    gender,
    date_of_birth,
    avatar,
    phone_number,
    preferred_job,
    availability,
    minimum_salary,
    password,
        password_confirmation,
  } = values;
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [key]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("update");
    return UpdateSeekerProfile(
      full_name,
    email,
    username,
    location,
    gender,
    date_of_birth,
    avatar,
    phone_number,
    preferred_job,
    availability,
    minimum_salary,
    password,
        password_confirmation,
      
    ).then((res) => {
      if (res.status == 200) {
        console.log("Account updated");
        UpdateSeekerProfile(seeker_code).then((res) => {
          setValues(res.data)
        })
      } else {
        console.log(res.data.message);
      }
    });
  }
  return (
    <>
    
    
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
                for="username"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                User Name
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={username}
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
    </>
  );
}

export default EditSeekerDetails;
