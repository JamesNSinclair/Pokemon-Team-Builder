import {Image, StyleSheet, View} from 'react-native';

import React from 'react';
import {getPokemonSpritePath} from '../types/imageUrls';
import styles from '../styles/index';

interface IProps {
  pokeId: number;
  pokemonBackgroundColor: string;
}

export const MyTeam = ({pokeId, pokemonBackgroundColor}: IProps) => {
  console.log('pokemonBackgroundColor', pokemonBackgroundColor);
  const pokemonSprite = getPokemonSpritePath(pokeId);

  return (
    <View
      style={[
        styles.myTeam.container,
        {backgroundColor: pokemonBackgroundColor},
      ]}>
      {/* @ts-ignore: <error-code>  */}
      <Image source={pokemonSprite} />
    </View>
  );
};
