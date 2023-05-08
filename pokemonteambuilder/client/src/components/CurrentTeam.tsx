import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {MyTeam} from './MyTeam';
import React from 'react';
import moment from 'moment';
import {saveTeamData} from '../state/slices/manageTeamsSlice';
import styles from '../styles/index';

interface IProps {
  currentTeamName: string;
  setCurrentTeamName: React.Dispatch<React.SetStateAction<string>>;
  userTeam: UserTeam[];
}

interface UserTeam {
  id: number;
  name: string;
  position: number;
}
interface Pokemon {
  id: number;
  name: string;
  position: number;
}

export const CurrentTeam = ({
  userTeam,
  currentTeamName,
  setCurrentTeamName,
}: IProps) => {
  const dispatch = useDispatch();
  const handleSaveBtn = () => {
    const now = moment().toISOString();
    const currentTeam = userTeam.map(({id, name, position}: UserTeam) => ({
      id,
      name,
      position,
    }));

    const newTeam = {
      name: currentTeamName,
      last_updated: now,
      user_id: 1,
      team: currentTeam,
    };
    dispatch(saveTeamData(newTeam));
  };
  return (
    <>
      <View style={styles.savedTeamsBase.currentTeamContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.savedTeamsBase.subtitle}>Current Team:</Text>
          <Text style={styles.savedTeamsBase.teamName}>{currentTeamName}</Text>
          <Image
            style={{height: 12, width: 12, left: 5, top: 3}}
            source={require('../assets/images/icons/edit-icon.png')}
          />
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
