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
        <Text
          style={{
            paddingTop: 60,
            fontSize: 30,
            fontWeight: '600',
            textAlign: 'center',
          }}>
          Pokemon Team Builder
        </Text>
        <TeamBuilder />
        <View
          style={{
            width: '100%',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <TouchableWithoutFeedback onPress={handleProceedBtn}>
            <Image
              source={require('../assets/images/go-arrow.png')}
              style={{
                height: 90,
                width: 90,
                opacity: 0.6,
              }}
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
});
