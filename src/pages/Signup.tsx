import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import InputText from '../components/common/InputText';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";
import { signup } from '../api/auth.api';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../hooks/useAlert';

export interface SignupProps {
    email: string;
    password: string;
}

const Signup = () => {
    const navigate = useNavigate();
    const showAlert = useAlert();

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");


    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     console.log(email, password)
    // }
    const {register, handleSubmit, formState: {errors},} = useForm<SignupProps>();

    const onsubmit = (data: SignupProps) => {
        signup(data).then((res) => {
            showAlert('회원가입이 완료되었습니다.');
            navigate("/login");
        })
    }
    return (
        <>
            <Title size="large">회원가입</Title>
            <SignupStyle>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <fieldset>
                        <InputText placeholder='이메일' inputType='email' {...register("email", {required: true})} />
                        {errors.email && <p className='error-text'>이메일을 입력해주세요.</p> }
                    </fieldset>
                    <fieldset>
                        <InputText placeholder='비밀번호' inputType='password' {...register("password", {required: true})}/>
                        {errors.password && <p className='error-text'>비밀번호를 입력해주세요.</p> }
                    </fieldset>
                    <fieldset>
                        <Button size="medium" type="submit"scheme="primary">
                            회원가입
                        </Button>
                    </fieldset>
                    <div className='info'>
                        <Link to="/reset">비밀번호 초기화</Link>
                    </div>
                </form>
            </SignupStyle>
        </>
    );
};

export const SignupStyle = styled.div`
    fieldset{
        border:0;
        padding: 0 0 8px 0;
        .error-text{
            color: red;
        }
    }
    input{
        width: 100%;
    }
    button{
        width: 100%;
    }
    .info{
        text-align: center;
        padding: 16px 0 0 0;
    }
`;

export default Signup;