import { httpClient } from "./http";
import { SignupProps } from "../pages/Signup";

export const signup = async(userData: SignupProps) => {
    const response = await httpClient.post("/users/join", userData)
;
return response.data;
}

export const resetRequest = async(data: SignupProps) => {
    const response = await httpClient.post("/users/reset", data);
    return response.data;
}


export const resetpassword = async(data: SignupProps) => {
    const response = await httpClient.put("/users/reset", data);
    return response.data;
}