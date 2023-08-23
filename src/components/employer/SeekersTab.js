import React from "react";
import { Link } from "react-router-dom";

function SeekersTab() {
  return (
    <div className="mt-15 ml-5 w-1/3">
      <ul class="hidden text-sm font-medium text-center text-black divide-gray-200 rounded-lg shadow sm:flex dark:divide-blue-700 dark:text-blue-400">
        <li class="w-1/2">
          <Link
            to="/employer/seekers"
            class="inline-block w-full p-4 text-blue-700 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-blue-700 dark:text-white hover:bg-blue-200"
            aria-current="page"
          >
            All Seekers
          </Link>
        </li>
        <li class="w-1/2">
          <Link
            to="/employer/myseekers"
            class="inline-block w-full p-4 bg-white hover:text-black hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-white dark:hover:bg-blue-400 hover:bg-blue-200 rounded-r-lg"
          >
            My Seekers
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SeekersTab;
