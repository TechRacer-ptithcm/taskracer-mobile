import { RootState } from "../store";

const focusTimeSelector = (state: RootState) => state.app.focusTime;
const breakTimeSelector = (state: RootState) => state.app.breakTime;
const pomoModeSelector = (state: RootState) => state.app.pomoMode;
const loadingSelector = (state: RootState) => state.app.loading;
export {
  focusTimeSelector,
  breakTimeSelector,
  pomoModeSelector,
  loadingSelector,
};
