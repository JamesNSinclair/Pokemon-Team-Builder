import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import React from 'react';
import {TeamBuilder} from '../components/TeamBuilder';
import {useNavigation} from '@react-navigation/native';

export const TeamBuilderBase = () => {
  const navigation = useNavigation();
  const handleProceedBtn = () => {
    navigation.navigate('TeamReview');
  };
  return (
    <ImageBackground
      source={require('../assets/images/fire-starter-background.png')}
      style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Pokemon Team Builder</Text>
        <TeamBuilder />
        <View style={styles.proceedBtnContainer}>
          <TouchableWithoutFeedback onPress={handleProceedBtn}>
            <Image
              source={require('../assets/images/go-arrow.png')}
              style={styles.proceedBtnImage}
            />
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 35,
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    paddingTop: 60,
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  proceedBtnContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  proceedBtnImage: {
    height: 90,
    width: 90,
    opacity: 0.6,
  },
});
