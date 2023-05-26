import styled from 'styled-components'

export const TitleLogged = styled.h1`
text-align: center;
`;

export const SpanName = styled.span`
color: ${props => props.theme.colors.yellow};
text-shadow: 0.5px 0.5px 0.5px  ${props => props.theme.colors.blue};
margin-left: 10px;
`;

export const TitleLogOut = styled.h1`
text-align: center;
`;

export const TextLogout = styled.p`
text-align: center;
color: ${props => props.theme.colors.blue};
font-size: 26px;
`;

export const LogOutWrapText = styled.div`
padding: 40px;
`;