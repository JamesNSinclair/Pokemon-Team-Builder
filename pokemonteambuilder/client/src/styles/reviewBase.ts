import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 40,
    flex: 1,
    resizeMode: 'cover',
  },
  topView: {
    width: '100%',
    marginTop: 20,
    alignItems: 'flex-start',
  },
  backArrow: {
    height: 35,
    width: 35,
    opacity: 0.9,
  },
  matchUpsTitle: {
    paddingTop: 25,
    fontSize: 26,
    fontWeight: '600',
    color: 'rgba(41, 50, 60, 0.9)',
    fontFamily: 'PressStart2P-Regular',
  },
  matchUpsSubtitle: {
    paddingTop: 25,
    fontSize: 19,
    color: 'rgba(41, 50, 60, 0.9)',
    fontWeight: '400',
    fontFamily: 'PressStart2P-Regular',
  },
  teamContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    right: 25,
    paddingTop: 5,
  },
});
