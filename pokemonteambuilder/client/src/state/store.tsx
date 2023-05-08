// src/redux/store.js
import {configureStore} from '@reduxjs/toolkit';
import manageTeamsReducer from './slices/manageTeamsSlice';
import teamReducer from './slices/teamSlice';

const store = configureStore({
  reducer: {
    team: teamReducer,
    manageTeams: manageTeamsReducer,
  },
});

export default store;
