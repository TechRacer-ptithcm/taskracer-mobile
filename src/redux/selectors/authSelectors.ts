import { RootState } from "../store";

const userSelector = (state: RootState) => state.auth.user;
const tokenSelector = (state: RootState) => state.auth.token;
export { userSelector, tokenSelector };
