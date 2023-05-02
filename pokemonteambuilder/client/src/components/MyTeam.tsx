import {Image, StyleSheet, View} from 'react-native';

import React from 'react';
import {getPokemonSpritePath} from '../types/imageUrls';

interface IProps {
  pokeId: number;
  pokemonBackgroundColor: string;
}

export const MyTeam = ({pokeId, pokemonBackgroundColor}: IProps) => {
  console.log('pokemonBackgroundColor', pokemonBackgroundColor);
  const pokemonSprite = getPokemonSpritePath(pokeId);

  return (
    <View style={[styles.container, {backgroundColor: pokemonBackgroundColor}]}>
      {/* @ts-ignore: <error-code>  */}
      <Image source={pokemonSprite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 50,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    marginTop: 15,
    marginLeft: 20,
  },
});
