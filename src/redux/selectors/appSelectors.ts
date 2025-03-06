import { RootState } from "../store";

const focusTimeSelector = (state: RootState) => state.app.focusTime;
const breakTimeSelector = (state: RootState) => state.app.breakTime;
const pomoModeSelector = (state: RootState) => state.app.pomoMode;
export { focusTimeSelector, breakTimeSelector, pomoModeSelector };
