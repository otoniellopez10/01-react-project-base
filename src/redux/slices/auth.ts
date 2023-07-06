import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../../models";

export const AuthEmptyState: Auth = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: AuthEmptyState,
  reducers: {
    createAuth: (state, action) => action.payload,
    modifyAuth: (state, action) => ({ ...state, ...action.payload }),
    resetAuth: () => AuthEmptyState,
  },
});

export const { createAuth, modifyAuth, resetAuth } = authSlice.actions;

export default authSlice.reducer;
