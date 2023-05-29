import { apis } from "../axios";

// complete seeker acc
export const completeSeekerAccount = async (
  full_name, phone_number, email, gender, user_code,
) => {
  return await apis.post(`/seekers`, {
    full_name, phone_number, email, gender, user_code, verified: false
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
export const updateSeekerProfile = async (
  seeker_code,
  full_name,
  email,
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
    full_name,
    email,
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

export const getSeekerProfile = async (user_ref) => {
  return await apis.get(`/seeker/${user_ref}/profile`);
};
