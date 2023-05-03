import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';

import React from 'react';
import {TeamBuilder} from '../components/TeamBuilder';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from '../styles/index';
import {useNavigation} from '@react-navigation/native';

export const TeamBuilderBase = () => {
  const navigation = useNavigation();
  const handleProceedBtn = () => {
    navigation.navigate('TeamReview');
  };
  return (
    <ImageBackground
      source={require('../assets/images/fire-starter-background.png')}
      style={styles.builderBase.container}>
      <SafeAreaView>
        <Text style={styles.builderBase.title}>Pokemon Team Builder</Text>
        <TeamBuilder />
        <View style={styles.builderBase.proceedBtnContainer}>
          <TouchableWithoutFeedback onPress={handleProceedBtn}>
            <Image
              source={require('../assets/images/go-arrow.png')}
              style={styles.builderBase.proceedBtnImage}
            />
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
