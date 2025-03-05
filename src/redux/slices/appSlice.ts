import { createSlice } from "@reduxjs/toolkit";
import { AUTH_SLICE_NAME } from "../../constants/redux";

export type Auth_State = {
  focusTime: [number, number, number, number];
  breakTime: [number, number, number, number];
};

export const initialState: Auth_State = {
  focusTime: [1, 0, 0, 0],
  breakTime: [0, 0, 0, 0],
};

const appSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    setFocusTime: (state, action) => {
      state.focusTime = action.payload;
    },
    setBreakTime: (state, action) => {
      state.breakTime = action.payload;
    },
  },
});

export const { setFocusTime, setBreakTime } = appSlice.actions;
export default appSlice;
