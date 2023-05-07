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
        <Text style={styles.reviewBase.matchUpsSubtitle}>My Team:</Text>
        <View style={styles.reviewBase.teamContainer}>
          {userTeam.map((p: Pokemon) => {
            return (
              <MyTeam
                pokemonBackgroundColor={p.pokemonBackgroundColor}
                pokeId={p.id}
              />
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
};
