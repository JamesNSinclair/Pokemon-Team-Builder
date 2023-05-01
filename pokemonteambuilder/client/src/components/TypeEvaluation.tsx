import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import React from 'react';
import {updatePokemonBackgrounds} from '../state/slices/teamSlice';
import {useDispatch} from 'react-redux';

interface IProps {
  typeValue: number;
  typeName: string;
}

export const TypeEvaluation = ({typeValue, typeName}: IProps) => {
  const dispatch = useDispatch();
  const handlePress = () => {
    console.log('this is number 1=========');
    dispatch(updatePokemonBackgrounds(typeName));
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Text
          style={
            typeValue !== 1 && (typeValue > 1 ? styles.strong : styles.weak)
          }>
          {typeValue}
        </Text>
        <Text style={{fontSize: 16}}>{typeName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: '25%',
    paddingTop: 25,
    fontWeight: '600',
  },
  strong: {
    color: 'red',
    fontWeight: '600',
  },
  weak: {
    color: 'green',
    fontWeight: '600',
  },
});
