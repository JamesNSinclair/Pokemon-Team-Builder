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
  saveBtnContainer: {
    backgroundColor: 'cyan',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
    shadowColor: 'beige',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'white',
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
  saveBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: 'rgba(41, 50, 60, 0.9)',
  },
});

export default button;
