import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';

const RegistrationPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Username
                <input type="text" name="name" />
            </label>
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
                Register
            </button>
        </form>
    )
}

export default RegistrationPage;