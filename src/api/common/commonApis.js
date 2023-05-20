import { apis } from "../axios";

// create a user account
export const createUserAccount = async (
    username,
    password,
    password_confirmation,
    role,
) => {
    return await apis.post(`/users`, {
        username,
        password,
        password_confirmation,
        role,
    })
}

// generate an access token
export const generateToken = async (
    username,
    password,
) => {
    return await apis.post(`/generate-token/`, {
        username,
        password,
    })
}
