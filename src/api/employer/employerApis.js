import { apis } from "../axios";

// complete employer acc
export const completeEmployerAccount = async (
    company_name,
    phone_number,
    email,
    user_code,
) => {
    return await apis.post(`/employers`, {
        company_name,        
        phone_number,
        email, 
        verified: false,
        user_code,
    })
}

export const getAllSeekers = async () => {
    return await apis.get(`/seekers`)
}

// configure job type
export const ConfigJobType = async (
    group_name,
) => {
    return await apis.post(`/jobtags`, {
        group_name,
    })
}


// configure job type
export const PostJob = async (
    job_name,
    job_description,
    employer_code,
     jobtag_code,
) => {
    return await apis.post(`/jobs`, {
       job_name,
   job_description,
   employer_code,
    jobtag_code,
    })
}

export const deleteJob = async (job_code) => {
    return await apis.delete(`/jobs/${job_code}`)
}
// update employer profile
export const updateEmployerProfile = async (
    employer_code,
    company_name,
    email,
    phone_number,
    location,
    avatar,
    description,
) => {
    return await apis.patch(`/employers/${employer_code}`, {
        company_name,
        email,
        phone_number,
        location,
        avatar,
        description,
    })
}
export const getEmployerProfile = async (user_ref) => {
    return await apis.get(`/employer/${user_ref}/profile`);
  };
