import {Pokemon} from '../../../../server/controllers/models/pokemon';
import {createSlice} from '@reduxjs/toolkit';

interface Team {
  id: number;
  name: string;
  last_updated: number;
  user_id: number;
  team: Pokemon[];
}

const initialState: Team[] = [];

const myTeamsSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    saveTeamData: (state, action) => {
      const {id, name, last_updated, user_id, team} = action.payload;

      // Find the index of the Pokemon with the same position
      const teamToUpdateIndex = state.findIndex(team => team.id === id);

      if (teamToUpdateIndex !== -1) {
        // Replace the old Pokemon object with the new one
        state[teamToUpdateIndex] = {
          id: id,
          name: name,
          last_updated: last_updated,
          user_id: user_id,
          team: team,
        };
      } else {
        // Add the new Pokemon object to the state if the position does not exist
        state.push({
          id: id,
          name: name,
          last_updated: last_updated,
          user_id: user_id,
          team: team,
        });
      }
    },
    deleteTeamData: (state, action) => {
      const {id} = action.payload;
      const teamToDeleteIndex = state.findIndex(team => team.id === id);
      if (teamToDeleteIndex !== -1) {
        state.splice(teamToDeleteIndex, 1);
      }
    },
  },
});

export const {deleteTeamData, saveTeamData} = myTeamsSlice.actions;

export default myTeamsSlice.reducer;
