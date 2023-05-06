import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    color: '#B30000',
    fontFamily: 'PressStart2P-Regular',
    textShadowColor: 'beige',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  proceedBtnContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  proceedBtnImage: {
    height: 110,
    width: 110,
    marginTop: 5,
    opacity: 0.8,
  },
});
