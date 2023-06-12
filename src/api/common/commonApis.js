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
    user_code,
    
) => {
    return await apis.post(`/posts`, {
        title,
        media,
        description,
        user_code,
        likes: 0,
    })
}

export const getPosts = async () => {
    return await apis.get(`/posts`)
}

export const getUserPost = async (user_code) => {
    return await apis.get(`/posts/users/${user_code}`)
}

export const getIndividualPost = async (post_code) => {
    return await apis.get(`/posts/${post_code}`)
}

export const deletePost = async (post_code) => {
    return await apis.delete(`/posts/${post_code}`)
}

// Comment on post
export const commentOnPost = async (
    content,
    post_code,
    user_code,
) => {
    return await apis.post(`/comments`, {
        content,
        post_code,
        user_code,
    })
}

export const getAllPostComments = async (post_code) => {
    return await apis.get(`/comments/post/${post_code}`)
}

export const deleteComment = async (comment_code) => {
    return await apis.delete(`/comments/${comment_code}`)
}





