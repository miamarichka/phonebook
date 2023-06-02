import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post('/users/signup', credentials);
            setAuthHeader(responce.data.token);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const responce = await axios.post('/users/login', credentials);
            setAuthHeader(responce.data.token);
            return responce.data;
             
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
         }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
         }
    }
)

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const {token} = thunkAPI.getState().auth;
        if (!token) return thunkAPI.rejectWithValue("No valid token");
        setAuthHeader(token);
        try {
            const res = await axios.get('/users/current')
            return res.data;
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
         }
    }
)