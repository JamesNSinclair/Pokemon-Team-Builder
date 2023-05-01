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
    setTeamEffectiveness(result);
  }, [userTeam]);
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
