import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <div>
            
        </div>
    );
};

const FooterStyle = styled.footer`
    width: 100%;
    margin: 0 auto;
    max-width: ${({theme}) => theme.layout.width.large};
    border-top: 1px solid ${({theme}) => theme.color.background};
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    .logo{
        img{
            width: 140px;
        }
    }

    .copyright{
        p{
            font-size: 0.75rem;
            color: ${({theme}) => theme.color.text};
        }
    }
`
export default Footer;