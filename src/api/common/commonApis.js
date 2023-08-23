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

// create a Post
export const createPost = async (
    title,
    media,
    description,
    user_id,
    
) => {
    return await apis.post(`/posts`, {
        title,
        media,
        description,
        user_id,
        likes: 0,
    })
}

export const getPosts = async () => {
    return await apis.get(`/posts`)
}

export const getUserPost = async (user_id) => {
    return await apis.get(`/posts/users/${user_id}`)
}

export const getIndividualPost = async (id) => {
    return await apis.get(`/posts/${id}`)
}

export const deletePost = async (id) => {
    return await apis.delete(`/posts/${id}`)
}

// Comment on post
export const commentOnPost = async (
    content,
    post_id,
    user_id,
) => {
    return await apis.post(`/comments`, {
        content,
        post_id,
        user_id,
    })
}

export const getAllPostComments = async (post_id) => {
    return await apis.get(`/comments/post/${post_id}`)
}

export const deleteComment = async (id) => {
    return await apis.delete(`/comments/${id}`)
}





