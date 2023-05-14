import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {CurrentTeam} from '../components/CurrentTeam';
import LinearGradient from 'react-native-linear-gradient';
import {MyTeam} from '../components/MyTeam';
import {Pokemon} from './TeamReviewBase';
import {PreviousTeam} from '../components/PreviousTeam';
import {Team} from '../state/slices/manageTeamsSlice';
import styles from '../styles';
import {updatePokemonBackgrounds} from '../state/slices/teamSlice';
import {useNavigation} from '@react-navigation/native';

const GradientBackground = () => {
  return (
    <LinearGradient
      colors={['#FDDDC8', '#379996', '#1C6D7C']}
      style={{
        flex: 1,
        height: '100%',
        position: 'absolute',
        width: '100%',
      }}
      start={{x: 1, y: 0.05}}
      end={{x: 1, y: 1}}
    />
  );
};

export const SavedTeamsBase = () => {
  const [currentTeamName, setCurrentTeamName] = useState('My Current Team');
  const [typeSelected, setTypeSelected] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleProceedBtn = () => {
    navigation.navigate('TeamBuilder');
    setTypeSelected(null);
    dispatch(updatePokemonBackgrounds(undefined));
  };

  const myTeams = useSelector((state: any) => state.manageTeams);
  const userTeam = useSelector((state: any) => state.team);
  return (
    <View style={styles.savedTeamsBase.baseContainer}>
      <GradientBackground />
      <SafeAreaView style={styles.savedTeamsBase.container}>
        <View style={[styles.reviewBase.topView]}>
          <TouchableWithoutFeedback onPress={handleProceedBtn}>
            <Image
              source={require('../assets/images/back-arrow.png')}
              style={styles.reviewBase.backArrow}
            />
          </TouchableWithoutFeedback>
        </View>
        {userTeam.length > 0 || myTeams.length > 0 ? (
          <Text style={styles.savedTeamsBase.header}>My Teams:</Text>
        ) : (
          <Text style={styles.savedTeamsBase.errorText}>
            You Currently Have No Teams Available
          </Text>
        )}
        {userTeam.length > 0 && (
          <CurrentTeam
            userTeam={userTeam}
            currentTeamName={currentTeamName}
            setCurrentTeamName={setCurrentTeamName}
          />
        )}
      </SafeAreaView>

      {myTeams && myTeams.length > 0 && (
        <>
          <Text style={styles.savedTeamsBase.pastTeamTitles}>
            My Saved Teams:
          </Text>

          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            style={styles.savedTeamsBase.scrollViewContainer}>
            {myTeams.map((t: Team, index: number) => {
              return (
                <View
                  style={[
                    styles.savedTeamsBase.previousTeamContainer,
                    {
                      backgroundColor:
                        index % 2 === 0
                          ? 'rgba(183, 201, 197, 0.3)'
                          : 'rgba(239, 233, 234, 0.15)',
                    },
                  ]}>
                  <PreviousTeam
                    key={index}
                    previousTeam={t}
                    index={index}
                    setCurrentTeamName={setCurrentTeamName}
                  />
                </View>
              );
            })}
          </ScrollView>
        </>
      )}
    </View>
  );
};
