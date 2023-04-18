import ModalSelector from 'react-native-modal-selector';
import React from 'react';
import {View} from 'react-native';

interface Pokemon {
  dex_number: number;
  id: number;
  name: string;
  type_1: string;
  type_2: string | null;
}

export const TeamPicker = (pokemon: {pokemon: Pokemon[]}) => {
  return (
    <View>
      <ModalSelector
        data={pokemon.pokemon}
        keyExtractor={item => item.id}
        labelExtractor={item => item.name}
      />
    </View>
  );
};
