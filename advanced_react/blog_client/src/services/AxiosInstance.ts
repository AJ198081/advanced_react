import axios from "axios";

export const AxiosInstance = axios.create({
        baseURL: "http://localhost:8090",
        timeout: 10000,
        headers: {
            "Accept": "application/json",
        }
    });