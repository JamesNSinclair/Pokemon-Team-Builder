// App.tsx
import {AppNavigator} from './client/src/AppNavigator';
import {Provider} from 'react-redux';
import React from 'react';
import {StyleSheet} from 'react-native';
import store from './client/src/state/store'; // Replace with the path to your store configuration file

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default App;
