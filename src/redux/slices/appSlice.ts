import { createSlice } from "@reduxjs/toolkit";
import { AUTH_SLICE_NAME } from "../../constants/redux";
import { PomoNormalMode } from "../../constants/strings";

export type App_State = {
  focusTime: [number, number, number, number];
  breakTime: [number, number, number, number];
  pomoMode: string;
};

export const initialState: App_State = {
  focusTime: [1, 0, 0, 0],
  breakTime: [0, 0, 0, 0],
  pomoMode: PomoNormalMode,
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
    setPomoMode: (state, action) => {
      state.pomoMode = action.payload;
    },
  },
});

export const { setFocusTime, setBreakTime, setPomoMode } = appSlice.actions;
export default appSlice;
