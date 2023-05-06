import {StyleSheet} from 'react-native';

const button = StyleSheet.create({
  container: {
    backgroundColor: 'maroon',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 20,
    shadowColor: 'beige',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'PressStart2P-Regular',
    textShadowColor: 'grey',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
});

export default button;
