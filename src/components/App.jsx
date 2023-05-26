import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import { SharedLayout } from './SharedLayout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/authOperations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';

const ContactsPage = lazy(() => import('./Contacts/Contacts'));
const Registarion = lazy(() => import('./RegistrationPage/RegistrationPage'))
const Login = lazy(() => import('./LoginPage/LoginPage'))
const Home = lazy(()=> import('./HomePage/HomePage'))

export const App = () => {
  const dispatch = useDispatch();
  const { isRefresing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return (
    !isRefresing && (
       <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading ...</div>}>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
            <Route index element={<Home />} />
            <Route path='/register' element={<RestrictedRoute component={Registarion} redirectTo='/contacts'/>} />
            <Route path='/login' element={<RestrictedRoute component={Login} redirectTo='/contacts'/>} />
            <Route path='/contacts' element={<PrivateRoute component={ContactsPage} redirectTo='/login'/>} />
        </Route>
      </Routes>
        </Suspense>
        </ThemeProvider>
      )
    )
}