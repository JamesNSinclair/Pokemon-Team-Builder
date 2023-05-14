import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';

import {LoginPanel} from '../components/LoginPanel';
import React from 'react';
import {TeamBuilder} from '../components/TeamBuilder';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from '../styles/index';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export const LoginScreenBase = () => {
  const userTeam = useSelector((state: any) => state.team);
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../assets/images/milotic-background.png')}
      style={styles.builderBase.loginBackground}>
      <SafeAreaView style={{height: '100%', justifyContent: 'space-between'}}>
        <Image
          style={{height: 140, width: 370, marginTop: 25}}
          source={require('../assets/images/pokemon-logo.png')}
        />
        <LoginPanel />
      </SafeAreaView>
    </ImageBackground>
  );
};
