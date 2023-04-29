import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {TeamReview} from '../components/TeamReview';
import {useNavigation} from '@react-navigation/native';

export const TeamReviewBase = () => {
  const navigation = useNavigation();
  const handleProceedBtn = () => {
    navigation.navigate('TeamBuilder');
  };
  return (
    <ImageBackground
      source={require('../assets/images/water-starter-background.png')}
      style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            width: '100%',
            marginTop: 20,
            alignItems: 'flex-start',
          }}>
          <TouchableWithoutFeedback onPress={handleProceedBtn}>
            <Image
              source={require('../assets/images/back-arrow.png')}
              style={{
                height: 35,
                width: 35,
                opacity: 0.9,
              }}
            />
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          <Text style={{paddingTop: 25, fontSize: 30, fontWeight: '600'}}>
            Team Match Ups:
          </Text>
          <TeamReview />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 40,
    flex: 1,
    resizeMode: 'cover',
  },
});
