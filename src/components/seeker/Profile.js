import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import EditProfileDialog from "./dialogs/EditProfileDialog";
import { setCurrentSeekerDetail } from "../../features/seekers/seekerSlice";
import { useSelector, useDispatch } from "react-redux";

import { selectLoggedInUserRef } from "../../features/users/userSlice";
import { getSeekerProfile } from "../../api/seeker/seekerApis";

function Profile() {
 
  let seeker_code = useSelector(selectLoggedInUserRef);
  const [seekerDetails, setSeekerDetails] = useState({});
  // const navigate = useNavigate()
  const dispatch = useDispatch();
  const [openEditProfileDialog, setOpenEditProfileDialog] = useState(false);

  const closeEditProfileDialog = () => {
    setOpenEditProfileDialog(false);
  };
  const populateProfile = () => {
    return getSeekerProfile(seeker_code).then((res) => {
      if (res.status === 200) {
        setSeekerDetails(res.data);
        dispatch(setCurrentSeekerDetail({ currentSeekerDetail: res.data }));
      } else {
        console.log(`err`);
      }
    });
  };

  useEffect(() => {
    populateProfile();
  }, []);

  // const populateProfile = () => {
  //   // return getSeekerProfile(seeker_code).then ((res) => {
  //   //   if (res.status === 200){
  //   //   setSeekerDetails(res.data)
  //   //   } else{
  //   //     console.log(`err`)
  //   //   }
  //   // })
  // }

  // useEffect(()=>{
  //   populateProfile();
  // }, [])
  
//   const currentSeekerDetails = useSelector(selectCurrentSeekerDetail);
  
  
  return (
    <>
      <Navbar />
      <EditProfileDialog
        openEditProfileDialog={openEditProfileDialog}
        closeEditProfileDialog={closeEditProfileDialog}
      />
      <div class=" mx-auto mt-50 my-5 p-5 ">
        <div class="md:flex no-wrap md:-mx-2 mt-9 ">
          {/* <!-- Left Side --> */}
          <div class="w-full md:w-3/12 md:mx-2">
            {/* <!-- Profile Card --> */}
            <div class="bg-white p-3 border-t-4 border-green-400">
              <div class="image overflow-hidden">
                <img
                  class="h-auto w-full mx-auto"
                  src={seekerDetails.avatar_url}
                  alt=""
                />
              </div>
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                {seekerDetails.full_name}
              </h1>
              <h3 class="text-gray-600 font-lg text-semibold leading-6">
                Owner at His Company Inc.
              </h3>
              <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {seekerDetails.description}
              </p>
              <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li class="flex items-center py-3">
                  <span>Status</span>
                  <span class="ml-auto">
                    <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li class="flex items-center py-3">
                  <span>Member since</span>
                  <span class="ml-auto">Nov 07, 2016</span>
                </li>
              </ul>
            </div>
            {/* <!-- End of profile card --> */}
            <div class="my-4"></div>
          
          </div>
          {/* <!-- Right Side --> */}
          <div class="w-full md:w-9/12 mx-2">
            {/* <!-- Profile tab -->
                <!-- About Section --> */}
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Full Name</div>
                    <div class="px-4 py-2">{seekerDetails.full_name}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Gender</div>
                    <div class="px-4 py-2">{seekerDetails.gender}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Phone Number</div>
                    <div class="px-4 py-2">{seekerDetails.phone_number}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Location</div>
                    <div class="px-4 py-2">{seekerDetails.location}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Preffered Job</div>
                    <div class="px-4 py-2">{seekerDetails.preferred_job}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Availablility</div>
                    <div class="px-4 py-2">{seekerDetails.availability}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email.</div>
                    <div class="px-4 py-2">
                      <a class="text-blue-800" href="mailto:jane@example.com">
                        {seekerDetails.email}
                      </a>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Birthday</div>
                    <div class="px-4 py-2">Feb 06, 1998</div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpenEditProfileDialog(true)}
                class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
              >
                Edit Profile
              </button>
            </div>
            {/* <!-- End of about section --> */}

            <div class="my-4"></div>

            
            {/* <!-- End of profile tab --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
