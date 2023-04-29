import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

interface IProps {
  type: string;
}

export const TypeEvaluation = ({type}: IProps) => {
  return (
    <View style={styles.container}>
      <Text>x3</Text>
      <Text style={{fontSize: 16}}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: '25%',
    paddingTop: 25,
  },
});
