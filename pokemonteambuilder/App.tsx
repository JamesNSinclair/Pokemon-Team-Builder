import {AppNavigator} from './client/src/AppNavigator';
import React from 'react';
import {StyleSheet} from 'react-native';

function App(): JSX.Element {
  return <AppNavigator />;
  //Need broken/error page incase app navigator does not work
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default App;
