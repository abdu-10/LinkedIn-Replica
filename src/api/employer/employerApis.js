import { apis } from "../axios";

// complete employer acc
export const completeEmployerAccount = async (
    company_name,
    phone_number,
    email,
    user_id,
) => {
    return await apis.post(`/employers`, {
        company_name,        
        phone_number,
        email, 
        verified: false,
        user_id,
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
    employer_id,
     jobtag_id,
) => {
    return await apis.post(`/jobs`, {
       job_name,
   job_description,
   employer_id,
    jobtag_id,
    })
}

export const deleteJob = async (job_id) => {
    return await apis.delete(`/jobs/${job_id}`)
}
// update employer profile
export const updateEmployerProfile = async (
    employer_code, formData
) => {
    return await apis.patch(`/employers/${employer_code}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
export const getEmployerProfile = async (id) => {
    return await apis.get(`/employer/${id}/profile`);
  };

  export const createjob = async (
    job_title,
    company_name,
    workplace_type,
    location,
    job_type,
    employer_id,
) => {
    return await apis.post(`/job_posts`, {
        job_title,
        company_name,
        workplace_type,
        location,
        job_type,
        employer_id,
    })
}
export const add_Desc_skill = async (
    job_post_id,
    description,
    skills,
    ) => {
    return await apis.patch(`/job_posts/${job_post_id}/desc&skill`, {
        description,
        skills,
    })
}

export const add_Cont_filter = async (
    job_post_id,
    notifier,
    screener_questions,
    qualification_setting,
    ) => {
    return await apis.patch(`/job_posts/${job_post_id}/cont&filters`, {
        notifier,
    screener_questions,
    qualification_setting,
    })
}

export const verifyEmail = async (
    user_ref,
    job_post_id,
   email,
) => {
    return await apis.post(`/job_posts/${job_post_id}/${user_ref}/`, {
       email,
    })
}

export const activateJobPost = async (
    job_post_id,
    confirmation_code
    ) => {
    return await apis.patch(`/job_posts/${job_post_id}/verify`, {
        confirmation_code
    })
}







