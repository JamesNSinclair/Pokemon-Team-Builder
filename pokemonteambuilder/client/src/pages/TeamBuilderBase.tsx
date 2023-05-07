import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';

import React from 'react';
import {TeamBuilder} from '../components/TeamBuilder';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from '../styles/index';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export const TeamBuilderBase = () => {
  const userTeam = useSelector((state: any) => state.team);
  const navigation = useNavigation();
  const handleProceedBtn = () => {
    navigation.navigate('TeamReview');
  };
  const handleLoadSaveTeamBtn = () => {
    navigation.navigate('SavedTeams');
  };
  return (
    <ImageBackground
      source={require('../assets/images/fire-starter-background.png')}
      style={styles.builderBase.container}>
      <SafeAreaView>
        <Text style={styles.builderBase.title}>Pokemon Team Builder</Text>
        <TeamBuilder />
        <TouchableWithoutFeedback onPress={handleLoadSaveTeamBtn}>
          <Text style={styles.builderBase.subButtonText}>
            Load Team/Save Team
          </Text>
        </TouchableWithoutFeedback>
        {userTeam.length > 0 && (
          <TouchableWithoutFeedback
            style={styles.buttons.container}
            onPress={handleProceedBtn}>
            <Text style={styles.buttons.text}>Proceed</Text>
          </TouchableWithoutFeedback>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};
