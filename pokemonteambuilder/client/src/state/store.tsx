// src/redux/store.js
import {configureStore} from '@reduxjs/toolkit';
import teamReducer from './slices/teamSlice';

const store = configureStore({
  reducer: {
    team: teamReducer,
  },
});

export default store;
