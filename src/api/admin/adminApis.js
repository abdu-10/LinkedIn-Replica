import { apis } from "../axios";

// complete admin acc
export const completeAdminAccount = async (
    full_name,
    email,
    user_id,
) => {
    return await apis.post(`/admins`, {
        full_name,
        email,
        user_id,
    })
}

export const getAllAdmins = async () => {
    return await apis.get(`/admins`)
}

export const getIndividualAdmin = async (id) => {
    return await apis.get(`/admins/${id}`)
}

export const getAllEmployers = async () => {
    return await apis.get(`/employers`)
}

export const getIndividualEmployer = async (id) => {
    return await apis.get(`/employers/${id}`)
}

export const getAllSeekers = async () => {
    return await apis.get(`/seekers`)
}

export const verifyEmployer = async (id) => {
    return await apis.patch(`/employers/${id}/verify`, {
        verified: true
    })
}

export const verifySeeker = async (id) => {
    return await apis.patch(`/seekers/${id}/verify`, {
        verified: true
    })
}

export const deleteUser = async (user_id) => {
    return await apis.delete(`/user/${user_id}`)
}
export const getAdminProfile = async (id) => {
    return await apis.get(`/admin/${id}/profile`);
  };

  export const configJob = async (
    group_name,
  
) => {
    return await apis.post(`/jobtags`, {
        group_name,
    })
}
export const getAllJobTags = async () => {
    return await apis.get(`/jobtags`)
}
