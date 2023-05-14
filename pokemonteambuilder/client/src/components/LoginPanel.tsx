import {Text, TouchableWithoutFeedback, View} from 'react-native';

import {TextInput} from 'react-native-gesture-handler';
import styles from '../styles';

export const LoginPanel = () => {
  return (
    <View style={{marginBottom: 80}}>
      <Text>Login</Text>
      <TextInput style={[styles.teamPicker.input, {marginBottom: 15}]} />
      <Text>Password</Text>
      <TextInput style={[styles.teamPicker.input, {marginBottom: 20}]} />
      <TouchableWithoutFeedback style={styles.buttons.container}>
        <Text style={styles.buttons.text}>Proceed</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};
