import React, { useState } from "react";
import { createUserAccount } from "../../api/common/commonApis";
import CustomSnackbar from "../common/utils/CustomSnackbar.js";

function CreateAdmin() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    password_confirmation: "",

    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });

  const {
    username,
    password,
    password_confirmation,

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
    let role;
    createUserAccount(username, password, password_confirmation, role="ADMIN")
      .then((res) => {
        if (res.status === 201) {
          setValues({
            ...values,
            username: "",
            password: "",
            password_confirmation: "",
            role: "",
            snackbarMessage: "Account Created Successfully",
            openSnackbar: true,
            snackbarSeverity: "success",
          });
        } else {
          setValues({
            username: "",
            password: "",
            password_confirmation: "",
            role: "",
            snackbarMessage: "Something Went Wrong, please retry",
            openSnackbar: true,
            snackbarSeverity: "error",
          });
        }
      })
      .catch((err) => {
        setValues({
          username: "",
          password: "",
          password_confirmation: "",
          role: "",
          snackbarMessage: "Something Went Wrong, please retry",
          openSnackbar: true,
          snackbarSeverity: "error",
        });
      });
  };

  return (
    <div>
      <CustomSnackbar
        openSnackbar={openSnackbar}
        handleClose={closeSnackbar}
        snackbarMessage={snackbarMessage}
        snackbarSeverity={snackbarSeverity}
      />
      <div class="min-h-screen mt-20 flex flex-col items-center justify-center bg-gray-100">
        <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
            Create Admin Account
          </div>
          <div class="relative mt-10 h-px bg-gray-300"></div>
          <div class="mt-10">
            <form onSubmit={handleSubmit}>
              <div class="flex flex-col mb-6">
                <label
                  for="username"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  User Name:
                </label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM16 19v2H8v-2M12 3a2 2 0 100 4 2 2 0 000-4z" />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="username"
                    type="text"
                    name="username"
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter user name"
                    value={username}
                    onChange={handleChange("username")}
                  />
                </div>
              </div>

              <div class="flex flex-col mb-6">
                <label
                  for="password"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange("password")}
                  />
                </div>
              </div>

              <div class="flex flex-col mb-6">
                <label
                  for="password_confirmation"
                  class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password Confirmation:
                </label>
                <div class="relative">
                  <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Confirm Password"
                    value={password_confirmation}
                    onChange={handleChange("password_confirmation")}
                  />
                </div>
              </div>
              
              <div class="flex w-full">
                <button
                  type="submit"
                  class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span class="mr-2 uppercase">Create Account</span>
                  <span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div class="flex justify-center items-center mt-6"></div>
        </div>
      </div>
    </div>
  );
}

export default CreateAdmin;
