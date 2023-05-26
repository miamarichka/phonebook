import { login, logout, refreshUser, register } from "./authOperations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefresing: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(register.pending, (state, action) => {
                return state
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state, action) => {
                return state
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = {name: null, email: null};
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
    })

});

export const authReducer = authSlice.reducer;