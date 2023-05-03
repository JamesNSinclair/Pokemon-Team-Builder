// App.tsx
import {AppNavigator} from './client/src/AppNavigator';
import {Provider} from 'react-redux';
import React from 'react';
import {StyleSheet} from 'react-native';
import store from './client/src/state/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
