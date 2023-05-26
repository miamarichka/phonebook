import React from 'react';
import { LogOutBtn, NavBarLogIn, NavBarLogOut, NavLinkStyled, NavWrapp, WelcomeText } from './NavBar.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/authOperations';
import { useAuth } from 'hooks/useAuth';

export const NavBar = () => {
    const { user, isLoggedIn } = useAuth();
    const dispatch = useDispatch();
    
    return (
        <NavWrapp>
            <NavLinkStyled to={'/'}>
                        Home
            </NavLinkStyled>
            {isLoggedIn
                ? (
                    <NavBarLogIn>
                        <NavLinkStyled to={'contacts'}>
                        Contacts
                        </NavLinkStyled>
                        <WelcomeText>Welcome, {user.name}</WelcomeText>
                        <LogOutBtn
                            onClick={() => dispatch(logout())}
                        >
                            Log Out
                        </LogOutBtn>
                    </NavBarLogIn>
                )
                : ( 
                    <NavBarLogOut>
                        <NavLinkStyled to={'register'}>
                        Registration
                        </NavLinkStyled>
                        <NavLinkStyled to={'login'}>
                            Login
                        </NavLinkStyled>
                    </NavBarLogOut>
                )}
        </NavWrapp>
    )
}