import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';

const store = configureStore({
  reducer: combineReducers({
    auth: authSlice.reducer,
  }),
});

// ReturnType here extract the type of the return value of store.getState function
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

