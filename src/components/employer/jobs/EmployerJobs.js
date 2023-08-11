import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEmployerJobs } from "../../../api/employer/employerApis";
import { selectCurrentEmployerDetail } from "../../../features/employers/employerSlice";
import { useSelector } from "react-redux";
import JobCard from "./JobCard";

function EmployerJobs() {
  const [employerJobs, setEmployerJobs] = useState([]);
  const profile = useSelector(selectCurrentEmployerDetail);
  const employer_id = profile.id;

  useEffect(() => {
    // Fetch employer's jobs 
    getEmployerJobs(employer_id)
      .then((response) => {
        if (response.status === 200) {
          setEmployerJobs(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching employer jobs:", error);
      });
  }, []);

  return (
    <div className="bg-white pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap">
          {/* Job Card Component */}
          <div className="w-full  sm:w-1/3">
            <JobCard className="relative" />
          </div>

          {/* Job Listings */}
          <div className="w-full sm:w-2/3">
            <h1 className="text-3xl font-bold text-gray-900">
              Your Posted Jobs
            </h1>
            <p className="text-sm font-semibold text-gray-600">
              Manage your current job listings
            </p>
            {employerJobs.length > 0 ? (
              employerJobs.map((job) => (
                <div
                  key={job.id}
                  className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0"
                >
                  <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <img
                        src={job.avatar_url}
                        className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                        alt={`${job.company_name} Logo`}
                      />
                      <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                        <p className="text-lg font-bold text-gray-800 truncate">
                          <Link
                            to="/employer/jobs/applicants"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            {job.job_title}
                          </Link>
                        </p>
                        <p className="text-gray-600 text-md">
                          {job.company_name}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end sm:mt-0">
                      <Link
                        to={`/employer/jobs/${job.id}/applicants`}
                        className="text-blue-500 hover:underline"
                      >
                        View Applicants
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-5">
                <p className="text-gray-600">
                  You have no posted jobs. Click below to post a new job.
                </p>
                <Link
                  to="/employer/job-post"
                  className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={{
                    // Add additional styles here to make the button stand out and look professional
                    // For example:
                    fontWeight: "bold",
                    borderRadius: "8px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Post New Job
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerJobs;
