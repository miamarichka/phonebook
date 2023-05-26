import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
display: block;
background-color: white;
font-size: 30px;
font-style: mixed;
line-height: 100%;
align: center;
vertical-align: top;
&.active{
    color: ${props => props.theme.colors.blue};
};
color: ${props => props.theme.colors.black};
 &:hover{
   color: lightblue;
   text-shadow: 0.5px 0.5px 0.5px black;
 }
`

export const NavBarLogOut = styled.nav`
display: flex;
gap: 30px;
`;

export const NavBarLogIn = styled.nav`
display: flex;
gap: 50px;
align-items: center;
`;

export const WelcomeText = styled.p`
font-size: 30px;
font-family: ui-monospace;
color:${props => props.theme.colors.black};
text-shadow: 0.5px 0.5px 0.5px yellow;
`;

export const LogOutBtn = styled.button`
  background-color:${props => props.theme.colors.blue};
  color: white;
  width: 200px;
  height: 40px;
  border: 1px white solid;
  font-family: ui-monospace;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  &:hover{
    background-color:${props => props.theme.colors.yellow};
    color:${props => props.theme.colors.black};
  }
`;

export const NavWrapp = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
font-family: math;
`