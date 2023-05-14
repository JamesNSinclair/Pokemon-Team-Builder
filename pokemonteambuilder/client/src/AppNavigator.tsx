import {LoginScreenBase} from './pages/LoginScreenBase';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SavedTeamsBase} from './pages/SavedTeamsBase';
import {TeamBuilderBase} from './pages/TeamBuilderBase';
import {TeamReviewBase} from './pages/TeamReviewBase';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
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
        <Stack.Screen
          name="SavedTeams"
          component={SavedTeamsBase}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreenBase}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
