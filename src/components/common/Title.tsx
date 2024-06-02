import React from 'react';
import styled from 'styled-components';
import { ColorKey, HeadingSize } from '../../style/theme';


interface Props {
    children: React.ReactNode;
    size: HeadingSize;
    color?: ColorKey;
}

const Title = ({children,size}: Props) => {
    return (
        <div>
            <TitleStyle size={size}>{children}</TitleStyle>
        </div>
    );
};
const TitleStyle = styled.h1<Omit<Props, "children">>`
font-size: ${({theme, size}) => theme.heading[size].fontSize};
color: ${({theme, color}) => (color ? theme.color[color]: theme.color.primary)}`

export default Title;