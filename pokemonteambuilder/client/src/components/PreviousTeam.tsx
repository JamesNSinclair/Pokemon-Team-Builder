import {Team, deleteTeamData} from '../state/slices/manageTeamsSlice';
import {Text, View} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import {MyTeam} from './MyTeam';
import {Pokemon} from '../pages/TeamReviewBase';
import React from 'react';
import {loadPokemonTeam} from '../state/slices/teamSlice';
import styles from '../styles';
import {useDispatch} from 'react-redux';

interface PreviousTeamProps {
  previousTeam: Team;
  index: number;
  setCurrentTeamName: React.Dispatch<React.SetStateAction<string>>;
}

export const PreviousTeam = ({
  previousTeam,
  index,
  setCurrentTeamName,
}: PreviousTeamProps) => {
  const dispatch = useDispatch();

  const handleLoadBtn = () => {
    setCurrentTeamName(previousTeam.name);
    dispatch(loadPokemonTeam(previousTeam.team));
  };
  const handleDeleteBtn = () => {
    dispatch(deleteTeamData(previousTeam));
  };
  return (
    <>
      <View style={styles.savedTeamsBase.previousTeamBaseContainer}>
        <Text style={styles.savedTeamsBase.previousTeamName}>
          {previousTeam.name}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableWithoutFeedback
            style={styles.savedTeamsBase.previousTeamLoadBtn}
            onPress={handleLoadBtn}>
            <Text>Load</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={styles.savedTeamsBase.previousTeamDeleteBtn}
            onPress={handleDeleteBtn}>
            <Text style={[styles.savedTeamsBase.previousTeamDeleteText]}>
              Delete
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View key={index} style={[styles.savedTeamsBase.pastTeamsContainer]}>
        {previousTeam.team.map((p: Pokemon) => {
          return (
            <MyTeam
              key={p.id}
              pokemonBackgroundColor={'rgba(0,0,0,0)'}
              pokeId={p.id}
              fullRow
            />
          );
        })}
      </View>
    </>
  );
};
