// src/services/api.ts or src/services/pokemonAPI.ts
import axios from 'axios';

export const fetchPokemonData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/pokemon');
    return response.data.rows;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};

export const fetchPokemonTypeEffectiveness = async (name: String) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/type-effectiveness',
      {name},
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};
