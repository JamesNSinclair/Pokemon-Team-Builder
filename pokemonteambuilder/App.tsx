import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import {TeamBuilder} from './client/src/components/TeamBuilder';
import fireStarterBackground from './client/src/assets/images/fire-starter-background.png';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ImageBackground source={fireStarterBackground} style={styles.container}>
      <SafeAreaView>
        <TeamBuilder />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default App;
