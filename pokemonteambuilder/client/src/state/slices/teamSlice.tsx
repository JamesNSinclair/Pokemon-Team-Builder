import {createSlice} from '@reduxjs/toolkit';
interface TypeEffectiveness {
  [key: string]: number;
}
interface Pokemon {
  name: string;
  id: number;
  position: number;
  typeEffectiveness: TypeEffectiveness;
  pokemonBackgroundColor: string;
}

const initialState: Pokemon[] = [];

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    updateTeamData: (state, action) => {
      const {id, position, name, typeEffectiveness, pokemonBackgroundColor} =
        action.payload;

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
          pokemonBackgroundColor: pokemonBackgroundColor,
        };
      } else {
        // Add the new Pokemon object to the state if the position does not exist
        state.push({
          id: id,
          name: name,
          position: position,
          typeEffectiveness: typeEffectiveness,
          pokemonBackgroundColor: pokemonBackgroundColor,
        });
      }
    },
    updatePokemonBackgrounds: (state, action) => {
      const type = action.payload;
      state.forEach(pokemon => {
        const typeEffectiveness = pokemon.typeEffectiveness[type];
        if (typeEffectiveness === undefined) {
          pokemon.pokemonBackgroundColor = 'rgba(255, 255, 255, 0.8)';
        }
        if (typeEffectiveness < 1) {
          pokemon.pokemonBackgroundColor = 'rgba(139, 199, 154, 0.9)';
        } else if (typeEffectiveness > 1) {
          pokemon.pokemonBackgroundColor = 'rgba(233, 151, 180, 0.9)';
        } else {
          pokemon.pokemonBackgroundColor = 'rgba(255, 255, 255, 0.8)';
        }
      });
    },
  },
});

export const {updateTeamData, updatePokemonBackgrounds} = teamSlice.actions;

export default teamSlice.reducer;
