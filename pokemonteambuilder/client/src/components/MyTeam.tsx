import {Image, StyleSheet, View} from 'react-native';

import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {getPokemonSpritePath} from '../types/imageUrls';
import styles from '../styles/index';

interface IProps {
  pokeId: number;
  pokemonBackgroundColor: string;
  fullRow?: boolean;
}

export const MyTeam = ({fullRow, pokeId, pokemonBackgroundColor}: IProps) => {
  const pokemonSprite = getPokemonSpritePath(pokeId);
  const handlePress = () => {};
  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
      style={[
        styles.myTeam.container,
        {backgroundColor: pokemonBackgroundColor},
        fullRow && styles.myTeam.fullRow,
      ]}>
      {/* @ts-ignore: <error-code>  */}
      <Image
        source={pokemonSprite}
        style={fullRow && styles.myTeam.fullRowSprites}
      />
    </TouchableWithoutFeedback>
  );
};
