import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentSeekerDetail } from "../../features/seekers/seekerSlice";
import { verifySeeker } from "../../api/admin/adminApis";
import EditProfileDialog from "./dialogs/EditProfileDialog";
import { Button } from "@mui/material";
import { Edit } from "@mui/icons-material";
function SeekerDetails() {
  const currentSeekerDetail = useSelector(selectCurrentSeekerDetail);
  const seeker_code = currentSeekerDetail.seeker_code;
  const [openPatchDialog, setOpenPatchDialog] = useState(false);
  const handleVerify = () => {
    return verifySeeker(seeker_code);
  };
  const closePatchDialog = () => {
    setOpenPatchDialog(false);
  };
  return (
    <>
      <EditProfileDialog
        openEditProfileDialog={openPatchDialog}
        closeEditProfileDialog={closePatchDialog}
      />
      <body>
        <div class="h-full bg-gray-200 p-8">
          <div class="bg-white rounded-lg shadow-xl pb-8">
            <div class="w-full h-[250px]">
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
                class="w-full h-full rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div class="flex flex-col items-center -mt-20">
              <img
                src={currentSeekerDetail.avatar}
                class="w-40 border-4 border-white rounded-full"
              />
              <div class="flex items-center space-x-2 mt-2">
                <p class="text-2xl">{currentSeekerDetail.full_name}</p>
                <span class="bg-blue-500 rounded-full p-1" title="Verified">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-gray-100 h-2.5 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
              </div>
              <p class="text-gray-700">{currentSeekerDetail.preffered_job}</p>
              <p class="text-sm text-gray-500">
                {currentSeekerDetail.location}
              </p>
            </div>
            <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
              <div class="flex items-center space-x-4 mt-2">
                {currentSeekerDetail.verified === false ? (
                  <button
                    onClick={handleVerify}
                    class="flex items-center bg-green-600 hover:bg-green-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                    </svg>
                    <span>Verify</span>
                  </button>
                ) : (
                  <button class="flex items-center bg-red-600 hover:bg-red-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Unverify</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div class="w-full flex flex-col 2xl:w-1/3">
              <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 class="text-xl text-gray-900 font-bold">Personal Info</h4>
                <ul class="mt-2 text-gray-700">
                  <li class="flex border-y py-2">
                    <span class="font-bold w-24">Full name:</span>
                    <span class="text-gray-700">
                      {currentSeekerDetail.full_name}
                    </span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Email:</span>
                    <span class="text-gray-700">
                      {currentSeekerDetail.email}
                    </span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Location:</span>
                    <span class="text-gray-700">
                      {currentSeekerDetail.location}
                    </span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Gender:</span>
                    <span class="text-gray-700">
                      {currentSeekerDetail.gender}
                    </span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Date Of Birth:</span>
                    <span class="text-gray-700">
                      {currentSeekerDetail.date_of_birth}
                    </span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Phone Number:</span>
                    <span class="text-gray-700">
                      {currentSeekerDetail.phone_number}
                    </span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Preffered Job:</span>
                    <span class="text-gray-700">
                      {currentSeekerDetail.preferred_job}
                    </span>
                  </li>
                  <li class="flex items-center border-b py-2 space-x-2">
                    <span class="font-bold w-24">Availability:</span>
                    <span class="text-gray-700">
                      {currentSeekerDetail.availability}
                    </span>
                  </li>
                  <li class="flex items-center border-b py-2 space-x-2">
                    <span class="font-bold w-24">Minimum Salary:</span>
                    <span class="text-gray-700">
                      {currentSeekerDetail.minimum_salary}
                    </span>
                  </li>
                  <li class="flex border-b py-2">
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={() => setOpenPatchDialog(true)}
                    >
                      {<Edit />}Edit
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default SeekerDetails;
