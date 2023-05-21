import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      {/* <!-- component --> */}
      <div class="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
        {/* <!-- linkedin logo --> */}
        <div class=" flex w-96 ">
          <img
            className="w-[150px]"
            src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
            alt="logo"
          />
        </div>

        {/* <!-- Layout  --> */}
        <div class="bg-white w-96 shadow-xl rounded p-5">
          <h1 class="text-3xl font-medium">Sign Up</h1>
          {/* <p class="text-sm">Stay updated on your professional world</p> */}
          <form class="space-y-5 mt-5">
            <input
              type="text"
              class="w-full h-12 border border-gray-800 rounded px-3"
              placeholder="Username"
            />
            <div class="w-full flex items-center  border border-gray-800 rounded px-3">
              <input
                type="password"
                class="w-4/5 h-12"
                placeholder="Password"
              />
              <span class="text-blue-700 hover:bg-blue-400 rounded-full px-3 ">
                show
              </span>
            </div>
            <div class="w-full flex items-center  border border-gray-800 rounded px-3">
              <input
                type="password"
                class="w-4/5 h-12"
                placeholder="Confirm Password"
              />
              <span class="text-blue-700 hover:bg-blue-400 md rounded-full px-3 ">
                show
              </span>
            </div>

            <label for="role" class="sr-only">
              Role
            </label>
            <select
              id="role"
              class="block mb-12 py-2.5 px-0 w-full text-md text-gray-600 bg-transparent border border-b-2 border-gray-600 dark:text-gray-600 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            >
              <option selected>Choose a Role</option>
              <option value="Sk">Seeker</option>
              <option value="EY">Employer</option>
            </select>

            <div>
              <Link
                to="/login"
                class="font-medium text-blue-700 hover:bg-blue-300 rounded-full p-2"
              >
                Forgot password?
              </Link>
            </div>

            <button class="text-center w-full bg-blue-700 rounded-full text-white py-3 font-medium">
              Sign Up
            </button>
          </form>
        </div>

        {/* <!-- Footer --> */}
        <p>
          Already on LinkedIn?{" "}
          <Link to="/login" class="text-blue-700 font-medium">
            Sign In
          </Link>{" "}
        </p>
      </div>
    </>
  );
}

export default SignUp;
