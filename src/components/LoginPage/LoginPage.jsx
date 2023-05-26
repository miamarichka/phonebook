import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/authOperations';

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(login({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Email
                <input type="email" name="email" />
            </label>
            <label htmlFor="">
                Password
                <input type="password" name="password" />
            </label>
            <button
                type="submit"
                className="login_btn"
            >
                Login
            </button>
        </form>
    )
}

export default LoginPage;