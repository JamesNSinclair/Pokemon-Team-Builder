import {Image, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {TeamPicker} from './TeamPicker';
import axios from 'axios';

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

  useEffect(() => {
    // Make an API call to fetch the options
    axios
      .get('http://localhost:3000/pokemon')
      .then(res => {
        console.log('this is the resdata', res.data.rows);
        setPokemon(res.data.rows);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    console.log('this is the resdata', pokemon);
  }, [pokemon]);

  return (
    pokemon && (
      <ScrollView
        style={{height: '100%', marginTop: 70, paddingHorizontal: 20}}>
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
        <TeamPicker pokemon={pokemon} />
        <View
          style={{
            width: '100%',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/images/go-arrow.png')}
            style={{
              height: 90,
              width: 90,
              opacity: 0.6,
            }}
          />
        </View>
      </ScrollView>
    )
  );
};
