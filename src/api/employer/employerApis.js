import { apis } from "../axios";

// complete employer acc
export const completeEmployerAccount = async (
    company_name,
    email,
    phone_number,  
    verified,
    user_code,
) => {
    return await apis.post(`/employers`, {
        company_name,
        email,
        phone_number,  
        verified,
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
export const UpdateEmployerProfile = async (
    employer_code,
    location,
    avatar,
    description,
) => {
    return await apis.patch(`/employers/${employer_code}`, {
        location,
        avatar,
        description,
    })
}

