import { createSlice } from "@reduxjs/toolkit";
import { AUTH_SLICE_NAME } from "../../constants/redux";
import { User } from "../../models/User";

export type Auth_State = {
  userId: string;
  token: string;
};

export const initialState: Auth_State = {
  userId: "",
  token: "",
};

const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    resetAuth: (state) => {
      state.userId = "";
      state.token = "";
    },
  },
});

export const { setUserId, setToken, resetAuth } = authSlice.actions;
export default authSlice;
