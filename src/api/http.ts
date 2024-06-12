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
   
    axiosInstance.interceptors.response.use(
        (response) => {
        return response;
        },
        (error) => {
            
            //로그인 만료 처리
            if (error.response.status === 401) {
                const navigate = useNavigate();
                removeToken();
                window.location.href = "/login";
                navigate('/')
            }
            return Promise.reject(error);
        })
    return axiosInstance
}

export const httpClient = createClient();


type RequestMethod = "get"|"put"|"post"|"delete";
export const requestHandler = async <T>(method: RequestMethod, url: string, payload?:T) => {
    let response;

    switch(method){
        case "post":
            response = await httpClient.post(url, payload);
            break;
        case "get":
            response = await httpClient.get(url);
            break;
        case "put":
            response = await httpClient.put(url, payload);
            break;
        case "delete":
            response = await httpClient.delete(url);
            break;
    }
}