import React from "react";
import { Link } from "react-router-dom";

function Login() {
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
        {/* <div className="text-xl  text-gray-800 dark:text-black md:text-2xl">
          Make the most of your professional life
        </div> */}

        {/* <!-- Layout  --> */}
        <div class="bg-white w-96 shadow-xl rounded p-5">
          <h1 class="text-3xl font-medium">Sign In</h1>
          {/* <p class="text-sm">Stay updated on your professional world</p> */}
          <form class="space-y-5 mt-5">
            <input
              type="text"
              class="w-full h-12 border border-gray-800 rounded px-3"
              placeholder="Username"
            />
            <input
              type="password"
              class="w-full h-12 border border-gray-800 rounded px-3"
              placeholder="Password"
            />

            <div>
              <Link
                to="/signup"
                class="font-medium text-blue-700 hover:bg-blue-300 rounded-full p-2"
              >
                Forgot password?
              </Link>
            </div>

            <button class="text-center w-full bg-blue-700 rounded-full text-white py-3 font-medium">
              Sign In
            </button>
          </form>
        </div>

        {/* <!-- Footer --> */}
        <p>
          New To LinkedIn?{" "}
          <Link to="/signup" class="text-blue-700 font-medium">
            Join Now
          </Link>{" "}
        </p>
      </div>
    </>
  );
}

export default Login;
