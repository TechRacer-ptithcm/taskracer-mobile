import { RootState } from '../store';

const loadingSelector = (state: RootState) => state.auth.loading;
const userSelector = (state: RootState) => state.auth.user;
const tokenSelector = (state: RootState) => state.auth.token;
export { loadingSelector, userSelector, tokenSelector };
