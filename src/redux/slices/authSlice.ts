import { createSlice } from '@reduxjs/toolkit';
import { AUTH_SLICE_NAME } from '../../constants/redux';

export type Auth_State = {
    loading: boolean,
    user: any,
    token: string,
};

export const initialState: Auth_State = {
    loading: false,
    user: undefined,
    token: '',
};

const authSlice = createSlice({
    name: AUTH_SLICE_NAME,
    initialState,
    reducers: {
        toggleLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        resetAuth: (state) => {
            state.user = undefined;
            state.token = '';
            state.loading = false;
        },
    },
});

export const { toggleLoading, setUser, setToken, resetAuth } = authSlice.actions;
export default authSlice;
