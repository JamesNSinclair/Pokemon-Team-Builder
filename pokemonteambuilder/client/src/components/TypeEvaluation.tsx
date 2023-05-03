import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import React from 'react';
import styles from '../styles/index';
import {updatePokemonBackgrounds} from '../state/slices/teamSlice';
import {useDispatch} from 'react-redux';

interface IProps {
  typeValue: number;
  typeName: string;
}

export const TypeEvaluation = ({typeValue, typeName}: IProps) => {
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(updatePokemonBackgrounds(typeName));
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.typeEvaluation.container}>
        <Text
          style={
            typeValue !== 1
              ? typeValue > 1
                ? styles.typeEvaluation.strong
                : styles.typeEvaluation.weak
              : null
          }>
          {typeValue}
        </Text>
        <Text style={styles.typeEvaluation.typeName}>{typeName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
