import {Pokemon} from '../../pages/TeamReviewBase';
import {createSlice} from '@reduxjs/toolkit';
export interface Team {
  name: string;
  last_updated: number;
  user_id: number;
  team: Pokemon[];
}

const initialState: Team[] = [];

const manageTeamsSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    saveTeamData: (state, action) => {
      const {id, name, last_updated, user_id, team} = action.payload;
      const teamToUpdateIndex = state.findIndex(team => team.name === name);
      if (teamToUpdateIndex !== -1) {
        state[teamToUpdateIndex] = {
          name: name,
          last_updated: last_updated,
          user_id: user_id,
          team: team,
        };
      } else {
        state.push({
          name: name,
          last_updated: last_updated,
          user_id: user_id,
          team: team,
        });
      }
    },
    deleteTeamData: (state, action) => {
      const {name} = action.payload;
      const updatedState = state.filter(team => team.name !== name);
      return updatedState;
    },
  },
});

export const {deleteTeamData, saveTeamData} = manageTeamsSlice.actions;

export default manageTeamsSlice.reducer;
