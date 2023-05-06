import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {MyTeam} from './MyTeam';
import {TypeEvaluation} from './TypeEvaluation';
import pokemonTypes from '../types/pokemonTypes';
import styles from '../styles';
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
  typeSelected: number;
  setTypeSelected: React.Dispatch<React.SetStateAction<number>>;
}

export const TeamReview = ({
  typeSelected,
  setTypeSelected,
  teamEffectiveness,
}: IProps) => {
  return (
    <View style={styles.teamReview.container}>
      {teamEffectiveness.map((type, i) => {
        return (
          <TypeEvaluation
            key={i}
            typeName={type.typeName}
            typeValue={type.typeValue}
            index={i}
            underlined={typeSelected === i}
            setTypeSelected={setTypeSelected}
          />
        );
      })}
    </View>
  );
};
