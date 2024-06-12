import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styled from 'styled-components';

const Loading = () => {
    return (
        <LoadingStyle>
            <FaSpinner />
        </LoadingStyle>
    );
};


const LoadingStyle = styled.div`
    padding: 40px 0;
    text-align: center;


    @keyframes rotate {
        100%{
            transform: rotate(360deg);
        }
    }
    svg{
        width: 70px;
        height: 70px;
        fill: #ccc;
        animation: rotate 2.5s linear infinite;
    }
`
export default Loading;