import { Notification } from 'components/Notification/Notification';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from 'redux/authOperations';

const RegistrationPage = () => {
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const userData = {
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        };

        setIsError(false);
            const serverResponce = dispatch(register(userData));
        if (serverResponce.token) {
            form.reset();
        } else {
            setIsError(true);
            toast.error(`User with email ${form.elements.email.value} already exist`);
        }
    };

    return (
      <form onSubmit={handleSubmit}>
        {isError && <Notification />}
        <label htmlFor="">
          Username
                <input
                    type="text"
                    name="name"
                    minLength={4}
                    maxLength={15}
                />
        </label>
        <label htmlFor="">
          Email
          <input type="email" name="email" />
        </label>
        <label htmlFor="">
          Password
          <input type="password" name="password" minLength={7} />
        </label>
        <button type="submit" className="login_btn">
          Register
        </button>
      </form>
    );
};

export default RegistrationPage;
