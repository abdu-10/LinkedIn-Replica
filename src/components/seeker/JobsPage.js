import React from "react";
import Navbar from "./Navbar";
import Footer from "../common/LandingPage/Footer";
import { Link } from "react-router-dom";

function JobsPage() {
  return (
    <>
      <Navbar />

      <div class="bg-white pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20">
        <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8">
            <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between">
              <div>
                <p class="text-xl font-bold text-gray-900">Jobs recommended for you</p>
                <p class="text-sm mt-1 mr-0 mb-0 ml-0 font-semi-bold text-gray-500">
                Based on your profile and search history
                </p>
              </div>
              <div class="mt-4 mr-0 mb-0 ml-0 sm:mt-0">
                <p class="sr-only">Search Position</p>
                <div class="relative">
                  <div class="flex items-center pt-0 pr-0 pb-0 pl-3 absolute inset-y-0 left-0 pointer-events-none">
                    <p>
                      <svg
                        class="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewbox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21
                    21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </p>
                  </div>
                  <input
                    placeholder="Search Positions "
                    type="search"
                    class="border block pt-2 pr-0 pb-2 pl-10 w-full py-2
                pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div class="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
              <div class="pt--10 pr-0 pb-10 pl-0">
                <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                  <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <div class="flex items-center flex-1 min-w-0">
                      <img
                        src="https://www.pngkey.com/png/full/984-9844126_slack-new-slack-logo-png.png"
                        class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                      />
                      <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                        <p class="text-lg font-bold text-gray-800 truncate">
                          <Link
                            to="/seeker/jobs/apply"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Engineering Manager
                          </Link>
                        </p>
                        <p class="text-gray-600 text-md">Slack</p>
                      </div>
                    </div>
                    <div class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                  <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <div class="flex items-center flex-1 min-w-0">
                      <img
                        src="https://www.growthmarketingpro.com/wp-content/uploads/2019/10/basecamp-logo.png"
                        class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                      />
                      <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                        <p class="text-lg font-bold text-gray-800 truncate">
                          <Link
                            to="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Senior Software Engineer
                          </Link>
                        </p>
                        <p class="text-gray-600 text-md">Basecamp</p>
                      </div>
                    </div>
                    <div
                      class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                  <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <div class="flex items-center flex-1 min-w-0">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
                        class="flex-shrink-0
                    object-cover rounded-full btn- w-10 h-10"
                      />
                      <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                        <p class="text-lg font-bold text-gray-800 truncate">
                          <Link
                            to="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Frontend Developer
                          </Link>
                        </p>
                        <p class="text-gray-600 text-md">Spotify</p>
                      </div>
                    </div>
                    <div
                      class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                  <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <div class="flex items-center flex-1 min-w-0">
                      <img
                        src="https://logowik.com/content/uploads/images/figma.jpg"
                        class="flex-shrink-0
                    object-cover rounded-full btn- w-10 h-10"
                      />
                      <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                        <p class="text-lg font-bold text-gray-800 truncate">
                          <Link
                            to="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Lead Software Engineer
                          </Link>
                        </p>
                        <p class="text-gray-600 text-md">Figma</p>
                      </div>
                    </div>
                    <div
                      class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                  <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <div class="flex items-center flex-1 min-w-0">
                      <img
                        src="https://i.pinimg.com/originals/96/02/08/9602083f42463bb813399310d72233c5.png"
                        class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                      />
                      <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                        <p class="text-lg font-bold text-gray-800 truncate">
                          <Link
                            to="#"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Software Engineer
                          </Link>
                        </p>
                        <p class="text-gray-600 text-md">Pinterest</p>
                      </div>
                    </div>
                    <div
                      class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JobsPage;
