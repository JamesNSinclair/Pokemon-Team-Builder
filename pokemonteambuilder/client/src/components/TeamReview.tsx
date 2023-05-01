import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {TypeEvaluation} from './TypeEvaluation';
import pokemonTypes from '../types/pokemonTypes';
import {useSelector} from 'react-redux';

interface TypeEffectiveness {
  [key: string]: number;
}

interface Pokemon {
  name: string;
  position: number;
  typeEffectiveness: TypeEffectiveness;
}

export interface MergedTypeEffectiveness {
  typeName: string;
  typeValue: number;
}

export const TeamReview = () => {
  const [teamEffectiveness, setTeamEffectiveness] = useState<
    MergedTypeEffectiveness[]
  >([]);
  const userTeam = useSelector((state: any) => state.team);
  useEffect(() => {
    let result: MergedTypeEffectiveness[] = [];
    userTeam.forEach((pokemon: Pokemon) => {
      Object.entries(pokemon.typeEffectiveness).forEach(
        ([typeName, typeValue]: [string, number]) => {
          const existingType = result.find(t => t.typeName === typeName);
          if (!existingType) {
            result.push({typeName, typeValue});
          } else {
            existingType.typeValue *= typeValue;
          }
        },
      );
    });
    console.log('this is it here =========', result);
    setTeamEffectiveness(result);
  }, [userTeam]);
  console.log('this is it teamEffectiveness =========', teamEffectiveness);
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
  },
});
