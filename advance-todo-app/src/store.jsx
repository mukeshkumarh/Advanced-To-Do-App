import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/task/taskSlice';
import apiReducer from './features/api/apiSlice';
import authReducer from './features/auth/authSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    apiData: apiReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
