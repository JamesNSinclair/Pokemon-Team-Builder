import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import ModalSelector from 'react-native-modal-selector';
import {TeamPicker} from './TeamPicker';
import axios from 'axios';

interface Pokemon {
  dex_number: number;
  id: number;
  name: string;
  type_1: string;
  type_2: string | null;
}

export const JSONobject = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    // Make an API call to fetch the options
    axios
      .get('http://localhost:3000/pokemon')
      .then(res => {
        setPokemon(res.data.rows);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    console.log('this is the resdata', pokemon);
  }, [pokemon]);

  return (
    pokemon && (
      <View>
        <Text>Hello</Text>
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
      </View>
    )
  );
};
