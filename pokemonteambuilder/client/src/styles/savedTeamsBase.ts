import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 40,
    flex: 1,
    resizeMode: 'cover',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  header: {
    paddingTop: 25,
    fontSize: 19,
    color: 'rgba(41, 50, 60, 0.9)',
    fontWeight: '400',
    fontFamily: 'PressStart2P-Regular',
  },
  subtitle: {
    fontSize: 15,
    color: 'rgba(41, 50, 60, 0.9)',
    fontWeight: '900',
  },
  teamName: {
    paddingLeft: 5,
    fontSize: 15,
    color: 'rgba(41, 50, 60, 0.9)',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  currentTeamContainer: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  teamNameInput: {
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
    marginRight: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 5,
  },
  errorText: {
    paddingTop: 35,
    fontFamily: 'PressStart2P-Regular',
    fontSize: 32,
    textAlign: 'center',
  },
});
