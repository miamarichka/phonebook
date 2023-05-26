import { useAuth } from "hooks/useAuth";
import React from "react";
import { LogOutWrapText, SpanName, TextLogout, TitleLogOut, TitleLogged } from "./HomePage.styled";


const HomePage = () => {
    const { isLoggedIn, user } = useAuth();
    return (
        isLoggedIn ? (
            <TitleLogged>Here is your personal Phone Book, 
                <SpanName>{user.name}</SpanName>
            </TitleLogged>
        ) : (
                <LogOutWrapText>
                    <TitleLogOut>Welcome to Phone Book</TitleLogOut>
                    <TextLogout>Register or Log In to get access to contacts</TextLogout>
                </LogOutWrapText>    
        )
    )
}

export default HomePage;