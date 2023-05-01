import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

interface IProps {
  typeValue: number;
  typeName: string;
}

export const TypeEvaluation = ({typeValue, typeName}: IProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={
          typeValue !== 1 && (typeValue > 1 ? styles.strong : styles.weak)
        }>
        {typeValue}
      </Text>
      <Text style={{fontSize: 16}}>{typeName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: '25%',
    paddingTop: 25,
    fontWeight: '600',
  },
  strong: {
    color: 'green',
    fontWeight: '600',
  },
  weak: {
    color: 'red',
    fontWeight: '600',
  },
});
