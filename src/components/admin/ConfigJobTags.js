import React, { useEffect, useState } from "react";
import JobsNav from "./Navs/Jobs.Nav";
import { getAllJobTags } from "../../api/admin/adminApis";

function ConfigJobs() {
  const [jobTags, setJobTags] = useState([]);

  useEffect(() => {
    // Fetch all job tags from the API
    getAllJobTags()
      .then((response) => {
        setJobTags(response.data); // Set the job tags in the component state
      })
      .catch((error) => {
        console.log("Error fetching job tags:", error);
      });
  }, []);

  return (
    <>
      <JobsNav />
      <div className="bg-gray-100 mt-9 min-h-screen">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold text-center mb-6">Job Tags</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {jobTags.map((jobTag) => (
              <div
                key={jobTag.id}
                className="bg-white rounded-lg shadow-lg p-4"
              >
                <h2 className="text-xl font-bold mb-4">{jobTag.group_name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfigJobs;
