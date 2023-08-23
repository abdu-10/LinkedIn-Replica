import React, { useState, useEffect } from "react";
import SeekersTab from "./SeekersTab";
import { getAllSeekers } from "../../api/admin/adminApis";

function EmployerSpecific() {
  const [seekersPayload, setSeekersPayload] = useState([]);

  useEffect(() => {
    getAllSeekers().then((res) => {
      if (res.status === 200) {
        setSeekersPayload(res.data);
      }
    });
  }, []);

  return (
    <div className="mt-20">
      <SeekersTab />
      <div className="overflow-hidden rounded-lg border mt-20 border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Availability
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Gender
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Preferred Job
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {seekersPayload.map((seeker) => (
              <tr key={seeker.id} className="hover:bg-gray-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src={seeker.avatar}
                      alt=""
                    />
                    <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                      {seeker.full_name}
                    </div>
                    <div className="text-gray-400">{seeker.email}</div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                    {seeker.availability}
                  </span>
                </td>
                <td className="px-6 py-4">{seeker.gender}</td>
                <td className="px-6 py-4">{seeker.preferredJob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployerSpecific;
