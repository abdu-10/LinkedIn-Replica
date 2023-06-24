import React, { useState, useEffect } from "react";
import EmployerNav from "../employer/EmployerNav";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EditEmployerProfileDialog from "./dialogs/EditEmployerProfileDialog";
import { setCurrentEmployerDetail } from "../../features/employers/employerSlice";
import { getEmployerProfile } from "../../api/employer/employerApis";
import { selectLoggedInUserRef } from "../../features/users/userSlice";
function EmployerProfile() {
  let employer_code = useSelector(selectLoggedInUserRef)
  const [employerDetails, setEmployerDetails] = useState({})
  // const navigate = useNavigate()
  // console.log(employerDetails)

  const dispatch = useDispatch()
    const [openEditProfileDialog, setOpenEditProfileDialog] = useState(false)

    const closeEditProfileDialog = () => {
        setOpenEditProfileDialog(false)
    }
    const populateProfile = () => {
      return getEmployerProfile(employer_code).then ((res) => {
        if (res.status === 200){
        setEmployerDetails(res.data)
        dispatch(
          setCurrentEmployerDetail({ currentEmployerDetail: res.data })
        );
        } else{
          console.log(`err`)
        }
      })
    }
  
    useEffect(()=>{
      populateProfile();
    }, [])
  return (
    <>
      <EmployerNav />
      <EditEmployerProfileDialog
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
                  src={employerDetails.avatar_url}
                  alt=""
                />
              </div>
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                {employerDetails.company_name}
              </h1>
              <h3 class="text-gray-600 font-lg text-semibold leading-6">
                A technology company that builds innovative solutions for
                regulated industries.
              </h3>
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
                <span class="tracking-wide">Company Info</span>
              </div>
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Company Name</div>
                    <div class="px-4 py-2">{employerDetails.company_name}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Location</div>
                    <div class="px-4 py-2">{employerDetails.location}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Phone Number</div>
                    <div class="px-4 py-2">{employerDetails.phone_number}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email</div>
                    <div class="px-4 py-2">{employerDetails.email}</div>
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

            {/* <!-- Experience and education --> */}
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="">
                <div>
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 mb-3">
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide">About</span>
                  </div>
                  <p>{employerDetails.description}</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployerProfile;
