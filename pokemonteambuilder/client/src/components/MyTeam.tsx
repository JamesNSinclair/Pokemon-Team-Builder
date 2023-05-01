import {Image} from 'react-native';
import React from 'react';

interface IProps {
  pokeId: number;
}

export const MyTeam = ({pokeId}: IProps) => {
  const pokemonSprite = require(`../../assets/images/pokemon-sprites/${pokeId}.png`);
  console.log('pokemonName', pokeId);
  return <Image source={pokemonSprite} />;
};
