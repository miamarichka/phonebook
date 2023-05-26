import { NavBar } from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color: ${props => props.theme.colors.white};
width: ${props => props.theme.container.width};,
padding-left: ${props => props.theme.container.paddingLeft};
padding-right: ${props => props.theme.container.paddingRight};
margin: ${props => props.theme.container.margin};
`;

export const SharedLayout = () => {
    return (
        <Container>
            <NavBar />
            <div>
              <Outlet />
             </div>
        </Container>
    )
}