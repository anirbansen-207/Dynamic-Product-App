// Code to manage the authentication state using Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;

    },
    logout: (state) => {
      state.isLoggedIn = false;

    },
  },
});

export const{login,logout}=authSlice.actions
export default authSlice.reducer