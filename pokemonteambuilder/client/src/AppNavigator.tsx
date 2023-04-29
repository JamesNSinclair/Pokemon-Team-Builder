import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {TeamBuilderBase} from './pages/TeamBuilderBase';
import {TeamReviewBase} from './pages/TeamReviewBase';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TeamBuilder">
        <Stack.Screen
          name="TeamBuilder"
          component={TeamBuilderBase}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TeamReview"
          component={TeamReviewBase}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
