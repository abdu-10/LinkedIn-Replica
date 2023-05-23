import { apis } from "../axios";

// complete seeker acc
export const completeSeekerAccount = async (
  full_name,
  email,
  verified,
  user_code
) => {
  return await apis.post(`/seekers`, {
    full_name,
    email,
    verified,
    user_code,
  });
};

export const getJobTags = async () => {
  return await apis.get(`/jobtags`);
};

export const getAllJobs = async () => {
  return await apis.get(`/jobs`);
};

export const getJobPerPreference = async (jobtag_code) => {
  return await apis.get(`jobs/search/${jobtag_code}`);
};

// update seeker profile
export const UpdateSeekerProfile = async (
  seeker_code,
  location,
  gender,
  date_of_birth,
  avatar,
  phone_number,
  preferred_job,
  availability,
  minimum_salary
) => {
  return await apis.patch(`/seekers/${seeker_code}`, {
    location,
    gender,
    date_of_birth,
    avatar,
    phone_number,
    preferred_job,
    availability,
    minimum_salary,
  });
};
