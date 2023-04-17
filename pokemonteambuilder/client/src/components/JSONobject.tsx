import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import axios from 'axios';

export const JSONobject = () => {
  const [pokemon, setPokemon] = React.useState({});
  console.log('this is the hello');
  axios.get('http://localhost:3000/pokemon').then(res => {
    console.log('this is the resdata', res.data);
    return setPokemon(res.data);
  });
  return (
    <View>
      <Text>{JSON.stringify(pokemon)}</Text>
    </View>
  );
};
