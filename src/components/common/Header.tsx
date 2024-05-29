import React from 'react';
import styled from 'styled-components';
const Header = () => {
    return (
        <h1>Book Store</h1>
    );
};
const HeaderStyle = styled.header`
    background-color: ${(props) => props.theme.colors.background};
    h1{
        color: ${(props) => props.theme.colors.primary};
    }
`
export default Header;
