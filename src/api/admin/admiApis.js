import { apis } from "../axios";

// complete admin acc
export const completeAdminAccount = async (
    full_name,
    email,
    user_code,
) => {
    return await apis.post(`/admins`, {
        full_name,
        email,
        user_code,
    })
}

export const getAllAdmins = async () => {
    return await apis.get(`/admins`)
}

export const getIndividualAdmin = async (admin_code) => {
    return await apis.get(`/admins/${admin_code}`)
}

export const getAllEmployers = async () => {
    return await apis.get(`/employers`)
}

export const getIndividualEmployer = async (employer_code) => {
    return await apis.get(`/employers/${employer_code}`)
}

export const getAllSeekers = async () => {
    return await apis.get(`/seekers`)
}

export const verifyEmployer = async (employer_code) => {
    return await apis.patch(`/employers/${employer_code}/verify`, {
        verified: true
    })
}

export const verifySeeker = async (seeker_code) => {
    return await apis.patch(`/seekers/${seeker_code}/verify`, {
        verified: true
    })
}

export const deleteUser = async (user_code) => {
    return await apis.delete(`/user/${user_code}`)
}