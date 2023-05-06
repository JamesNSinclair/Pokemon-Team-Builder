import React, {useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import styles from '../styles/index';
import {updatePokemonBackgrounds} from '../state/slices/teamSlice';
import {useDispatch} from 'react-redux';

interface IProps {
  typeValue: number;
  typeName: string;
  index: number;
  setTypeSelected: React.Dispatch<React.SetStateAction<number>>;
  underlined: boolean;
}

export const TypeEvaluation = ({
  typeValue,
  typeName,
  index,
  underlined,
  setTypeSelected,
}: IProps) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(updatePokemonBackgrounds(typeName));
    setTypeSelected(index);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.typeEvaluation.container}>
        <Text
          style={[
            typeValue !== 1
              ? typeValue > 1
                ? styles.typeEvaluation.strong
                : styles.typeEvaluation.weak
              : null,
            underlined && styles.typeEvaluation.underlined,
          ]}>
          {typeValue}
        </Text>
        <Text
          style={[
            styles.typeEvaluation.typeName,
            underlined && styles.typeEvaluation.underlined,
          ]}>
          {typeName}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
