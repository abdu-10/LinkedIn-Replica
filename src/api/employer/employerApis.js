import { apis } from "../axios";

// complete employer acc
export const completeEmployerAccount = async (
  company_name,
  phone_number,
  email,
  user_code
) => {
  return await apis.post(`/employers`, {
    company_name,
    phone_number,
    email,
    verified: false,
    user_code,
  });
};

export const getAllSeekers = async () => {
  return await apis.get(`/seekers`);
};

// configure skills
export const configSkills = async (group_name) => {
  return await apis.post(`/jobtags`, {
    group_name,
  });
};

// get configured skills
export const getSkills = async () => {
  return await apis.get(`/jobtags`);
};

export const deleteJob = async (job_code) => {
  return await apis.delete(`/jobs/${job_code}`);
};
// update employer profile
export const updateEmployerProfile = async (
  employer_code,
  company_name,
  email,
  phone_number,
  location,
  avatar,
  description
) => {
  return await apis.patch(`/employers/${employer_code}`, {
    company_name,
    email,
    phone_number,
    location,
    avatar,
    description,
  });
};
// export const getEmployerProfile = async (user_ref) => {
//   return await apis.get(`/employer/${user_ref}/profile`);
// };
export const getEmployerProfile = (user_ref) => {
  return apis.get(`/employer/${user_ref}/profile`);
};

// initial job post
export const postJob = async (
  job_title,
  company_name,
  workplace_type,
  location,
  job_type,
  employer_id
) => {
  return await apis.post(`/job_posts`, {
    job_title,
    company_name,
    workplace_type,
    location,
    job_type,
    employer_id,
  });
};

export const addJobDesc = async (description, skills, job_id) => {
  return await apis.patch(`/job_posts/${job_id}/desc&skill`, {
    description: description,
    skills: skills,
  });
};

export const addJobMetas = async (filter_payload, job_id) => {
  return await apis.patch(`/job_posts/${job_id}/cont&filters`, filter_payload);
};

export const requestJobeCode = async (job_id, user_ref, email) => {
  return await apis.post(`job_posts/${job_id}/${user_ref}`, {
    email,
  });
};

export const verifyJobListing = async (job_id, confirmation_code) => {
  return await apis.patch(`job_posts/${job_id}/verify`, {
    confirmation_code,
  });
};

export const getEmployerJobs = async (employer_id) => {
  return await apis.get(`/job_posts/employer/${employer_id}`);
};
