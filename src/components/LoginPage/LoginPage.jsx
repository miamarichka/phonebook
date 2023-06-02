import { Notification } from 'components/Notification/Notification';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from 'redux/authOperations';

const LoginPage = () => {
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(login({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        setIsError(false);
        const serverResponce = dispatch(login({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        console.log(serverResponce)
        if (serverResponce.token) {
             console.log(serverResponce.token);
            form.reset();
        } else {
            setIsError(true);
            toast.error('Wrong password');
        }
    }

    return (
      <form onSubmit={handleSubmit}>
        {isError && <Notification />}
        <label htmlFor="">
          Email
          <input type="email" name="email" />
        </label>
        <label htmlFor="">
          Password
          <input type="password" name="password" minLength={7} />
        </label>
        <button type="submit" className="login_btn">
          Login
        </button>
      </form>
    );
}

export default LoginPage;