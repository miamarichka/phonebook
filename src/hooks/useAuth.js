import { useSelector } from "react-redux";
import {
    selectIsLoggedIn,
    selectIsRefresing,
    selectUser
} from "redux/selectors";

export const useAuth = () => {
    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        isRefresing: useSelector(selectIsRefresing),
        user: useSelector(selectUser),
    }
}