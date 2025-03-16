import { createSlice } from "@reduxjs/toolkit";
import { AUTH_SLICE_NAME } from "../../constants/redux";

export type Auth_State = {
  user: any;
  token: string;
};

export const initialState: Auth_State = {
  user: undefined,
  token: "",
};

const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    resetAuth: (state) => {
      state.user = undefined;
      state.token = "";
    },
  },
});

export const { setUser, setToken, resetAuth } = authSlice.actions;
export default authSlice;
