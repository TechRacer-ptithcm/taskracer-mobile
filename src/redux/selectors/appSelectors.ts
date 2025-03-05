import { RootState } from "../store";

const focusTimeSelector = (state: RootState) => state.app.focusTime;
const breakTimeSelector = (state: RootState) => state.app.breakTime;
export { focusTimeSelector, breakTimeSelector };
