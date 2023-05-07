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
    color: 'maroon',
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
  subButtonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#5A5A5A',
    paddingTop: 15,
    fontFamily: 'PressStart2P-Regular',
    fontweight: '100',
    textShadowColor: 'white',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
});
