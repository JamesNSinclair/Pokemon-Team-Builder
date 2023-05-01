// src/redux/slices/teamSlice.js
import {createSlice} from '@reduxjs/toolkit';

interface TypeEffectiveness {
  [key: string]: number;
}

interface Pokemon {
  name: string;
  id: number;
  position: number;
  typeEffectiveness: TypeEffectiveness;
}

const initialState: Pokemon[] = [];

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    updateTeamData: (state, action) => {
      const {id, position, name, typeEffectiveness} = action.payload;

      // Find the index of the Pokemon with the same position
      const pokemonToUpdateIndex = state.findIndex(
        pokemon => pokemon.position === position,
      );

      if (pokemonToUpdateIndex !== -1) {
        // Replace the old Pokemon object with the new one
        state[pokemonToUpdateIndex] = {
          id: id,
          name: name,
          position: position,
          typeEffectiveness: typeEffectiveness,
        };
      } else {
        // Add the new Pokemon object to the state if the position does not exist
        state.push({
          id: id,
          name: name,
          position: position,
          typeEffectiveness: typeEffectiveness,
        });
      }
    },
  },
});

export const {updateTeamData} = teamSlice.actions;

export default teamSlice.reducer;
