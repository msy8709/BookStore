import { useAuthStore } from "@/store/authStore"
import {SignupProps} from "@/pages/Login";
import { login, resetPassword, resetRequest, signup } from "@/api/auth.api";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const useAuth = () => {
    const {storeLogin, storeLogout, isloggedIn} = useAuthStore();

    const {showAlert} = useAlert();
    const navigate = useNavigate();
    const userLogin = (data: SignupProps) => {
        login(data).then((res) => {
            storeLogin(res.token);
            showAlert('로그인이 완료되었습니다.');
            navigate("/");
        },
        (error) => {
            showAlert("로그인이 실패했습니다.")
        }
        )   
    };


    const userSignup = (data: SignupProps) => {
        signup(data).then((res) => {
            showAlert("회원가입이 완료되었습니다.");
            navigate("/login")
        })
    }

    const userResetPassword = (data: SignupProps) => {
        resetPassword(data).then(() => {
            showAlert("비밀번호가 초기화되었습니다.");
            navigate("/login")
        })
    }

    const [resetRequested, setResetRequested] = useState(false);
    const userResetRequest = (data:SignupProps) => {
        resetRequest(data).then(() => {
            setResetRequested(true);
        })
    }


    return {userLogin, userSignup, userResetPassword, userResetRequest,resetRequested}
}


