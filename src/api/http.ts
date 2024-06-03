import axios, {AxiosRequestConfig} from "axios";
import { response } from "express";
import { getToken, removeToken } from "../store/authStore";
import { useNavigate } from "react-router-dom";
const BASE_URL = "http://localhost:9999";
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        timeout: DEFAULT_TIMEOUT,
        headers:{
            "content-type": "application/json",
            Authorization: getToken() ? getToken() : "",
        },
        withCredentials: true,
        ...config,
    });
    const navigate = useNavigate();
    axiosInstance.interceptors.response.use(
        (response) => {
        return response;
        },
        (error) => {
            
            //로그인 만료 처리
            if (error.response.status === 401) {
                removeToken();
                window.location.href = "/login";
                navigate('/')
            }
            return Promise.reject(error);
        })
    return axiosInstance
}

export const httpClient = createClient();