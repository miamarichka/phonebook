import { useAuth } from "hooks/useAuth"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component:Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefresing } = useAuth();

    const shouldRedirect = !isLoggedIn && !isRefresing;

    return  shouldRedirect ? <Navigate to={redirectTo} /> : <Component/>;
}