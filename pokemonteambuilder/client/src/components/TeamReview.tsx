import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {MyTeam} from './MyTeam';
import {TypeEvaluation} from './TypeEvaluation';
import pokemonTypes from '../types/pokemonTypes';
import {useSelector} from 'react-redux';

interface TypeEffectiveness {
  [key: string]: number;
}

interface Pokemon {
  id: number;
  name: string;
  position: number;
  typeEffectiveness: TypeEffectiveness;
}

export interface MergedTypeEffectiveness {
  typeName: string;
  typeValue: number;
}

interface IProps {
  teamEffectiveness: MergedTypeEffectiveness[];
}

export const TeamReview = ({teamEffectiveness}: IProps) => {
  return (
    <View style={styles.container}>
      {teamEffectiveness.map((type, i) => {
        return (
          <TypeEvaluation
            key={i}
            typeName={type.typeName}
            typeValue={type.typeValue}
          />
        );
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
    overflow: 'visible',
  },
});
