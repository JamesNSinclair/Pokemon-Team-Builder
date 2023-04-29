import {Image, ScrollView, Text, Touchable, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {TeamPicker} from './TeamPicker';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

interface Pokemon {
  dex_number: number;
  id: number;
  name: string;
  type_1: string;
  type_2: string | null;
}

export const TeamBuilder = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const navigation = useNavigation();
  useEffect(() => {
    // Make an API call to fetch the options
    axios
      .get('http://localhost:3000/pokemon')
      .then(res => {
        setPokemon(res.data.rows);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    pokemon && (
      <ScrollView style={{marginTop: 15}}>
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
      </ScrollView>
    )
  );
};
