import {Image, ScrollView, Text, Touchable, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {TeamPicker} from './TeamPicker';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import axios from 'axios';
import {fetchPokemonData} from '../services/api';
import {useNavigation} from '@react-navigation/native';

interface Pokemon {
  dex_number: number;
  id: number;
  name: string;
  type_1: string;
  type_2: string | null;
}

export const TeamBuilder = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const pokemonData = await fetchPokemonData();
        setPokemon(pokemonData);
      } catch (error) {
        console.error('Error fetching all Pokémon:', error);
      }
    };
    fetchPokemon();
  }, []);

  return (
    pokemon.length > 0 && (
      <ScrollView style={{marginTop: 15}}>
        <TeamPicker position={1} pokemon={pokemon} />
        <TeamPicker position={2} pokemon={pokemon} />
        <TeamPicker position={3} pokemon={pokemon} />
        <TeamPicker position={4} pokemon={pokemon} />
        <TeamPicker position={5} pokemon={pokemon} />
        <TeamPicker position={6} pokemon={pokemon} />
      </ScrollView>
    )
  );
};
