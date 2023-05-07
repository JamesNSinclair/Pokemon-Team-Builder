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

import LinearGradient from 'react-native-linear-gradient';
import {MergedTypeEffectiveness} from './TeamReviewBase';
import {MyTeam} from '../components/MyTeam';
import {Pokemon} from '../../../server/controllers/models/pokemon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {saveTeamData} from '../state/slices/myTeams';
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
  const [teamEffectiveness, setTeamEffectiveness] = useState<
    MergedTypeEffectiveness[]
  >([]);
  const userTeam = useSelector((state: any) => state.team);
  const myTeams = useSelector((state: any) => state.myTeams);
  const handleSaveBtn = () => {
    const newTeam = userTeam.map(({id, name, position}) => ({
      id,
      name,
      position,
    }));
    console.log('newTeam', newTeam);
    dispatch(saveTeamData({}));
  };

  return (
    <View style={{flex: 1, height: '100%'}}>
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
        <Text style={styles.savedTeamsBase.header}>My Teams:</Text>
        <View style={styles.savedTeamsBase.currentTeamContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.savedTeamsBase.subtitle}>Current Team:</Text>
            <Text style={styles.savedTeamsBase.teamName}>
              {currentTeamName}
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleSaveBtn}
            style={styles.buttons.saveBtnContainer}>
            <Text style={styles.buttons.saveBtnText}>save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.savedTeamsBase.teamContainer}>
          {userTeam.map((p: Pokemon) => {
            return (
              <MyTeam
                pokemonBackgroundColor={p.pokemonBackgroundColor}
                pokeId={p.id}
                fullRow
              />
            );
          })}
        </View>
        {myTeams && myTeams.length > 0 && (
          <>
            <Text style={styles.savedTeamsBase.subtitle}>My Saved Teams:</Text>
            {myTeams.map(team => {
              return (
                <View key={team.id} style={styles.savedTeamsBase.teamContainer}>
                  {team.map((p: Pokemon) => {
                    return (
                      <MyTeam
                        key={p.id}
                        pokemonBackgroundColor={p.pokemonBackgroundColor}
                        pokeId={p.id}
                        fullRow
                      />
                    );
                  })}
                </View>
              );
            })}
          </>
        )}
      </SafeAreaView>
    </View>
  );
};
