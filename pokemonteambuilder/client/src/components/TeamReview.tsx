import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {TypeEvaluation} from './TypeEvaluation';
import pokemonTypes from '../types/pokemonTypes';

export const TeamReview = () => {
  return (
    <View style={styles.container}>
      {pokemonTypes.map((type, i) => {
        return <TypeEvaluation key={i} type={type} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',

    alignItems: 'center',
  },
});
