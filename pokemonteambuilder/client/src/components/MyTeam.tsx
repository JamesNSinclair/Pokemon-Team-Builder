import {Image, StyleSheet, View} from 'react-native';

import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {getPokemonSpritePath} from '../types/imageUrls';
import styles from '../styles/index';

interface IProps {
  pokeId: number;
  pokemonBackgroundColor: string;
  fullRow?: boolean;
  handlePressTeam?: () => void;
}

export const MyTeam = ({fullRow, pokeId, pokemonBackgroundColor}: IProps) => {
  const pokemonSprite =
    getPokemonSpritePath(pokeId) ||
    require('../../src/assets/images/pokemon-sprites/0.png');

  console.log('fullRow', pokeId);
  return (
    <TouchableWithoutFeedback
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
