import axios from "axios";
import { store } from "../../store/store"

function getLocalAccessToken() {
    const state = store.getState();
    const accessToken = state.user.accessToken
    return accessToken;
}

const apis = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {
        "Content-Type": "application/json",
    },
})

// interceptor to include token in request
apis.interceptors.request.use(
    (config) => {
        const token = getLocalAccessToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export { apis };