import {createSlice} from '@reduxjs/toolkit';

interface Pokemon {
  id: number;
  name: string;
  position: number;
}
interface Team {
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
      console.log('hello');
      const {id, name, last_updated, user_id, team} = action.payload;
      console.log('hello 2');
      // Find the index of the Pokemon with the same position
      const teamToUpdateIndex = state.findIndex(team => team.name === name);

      if (teamToUpdateIndex !== -1) {
        // Replace the old Pokemon object with the new one
        state[teamToUpdateIndex] = {
          name: name,
          last_updated: last_updated,
          user_id: user_id,
          team: team,
        };
      } else {
        // Add the new Pokemon object to the state if the position does not exist
        state.push({
          name: name,
          last_updated: last_updated,
          user_id: user_id,
          team: team,
        });
      }
      console.log('state', state)
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

export const {deleteTeamData, saveTeamData} = manageTeamsSlice.actions;

export default manageTeamsSlice.reducer;
