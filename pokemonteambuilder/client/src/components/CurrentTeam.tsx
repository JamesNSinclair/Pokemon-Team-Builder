import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {MyTeam} from './MyTeam';
import {Pokemon} from '../pages/TeamReviewBase';
import moment from 'moment';
import {saveTeamData} from '../state/slices/manageTeamsSlice';
import styles from '../styles/index';

interface IProps {
  currentTeamName: string;
  setCurrentTeamName: React.Dispatch<React.SetStateAction<string>>;
  userTeam: Pokemon[];
}

export const CurrentTeam = ({
  userTeam,
  currentTeamName,
  setCurrentTeamName,
}: IProps) => {
  const [promptText, setPromptText] = React.useState('save');
  const dispatch = useDispatch();
  const handleSaveBtn = () => {
    const now = moment().toISOString();
    const currentTeam = userTeam.map(
      ({id, name, position, typeEffectiveness}: Pokemon) => ({
        id,
        name,
        position,
        typeEffectiveness,
        pokemonBackgroundColor: 'rgba(0,0,0,0)',
      }),
    );

    const newTeam = {
      name: currentTeamName,
      last_updated: now,
      user_id: 1,
      team: currentTeam,
    };
    dispatch(saveTeamData(newTeam));
  };
  const previousTeams = useSelector((state: any) => state.manageTeams);

  useEffect(() => {
    console.log('previousTeams', previousTeams);
    if (previousTeams) {
      previousTeams.find((team: any) => {
        if (team.name === currentTeamName) {
          setPromptText('update');
        } else {
          setPromptText('save');
        }
      });
    }
  }, [currentTeamName, previousTeams]);

  return (
    <>
      <View style={styles.savedTeamsBase.currentTeamContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.savedTeamsBase.subtitle}>Current Team:</Text>
          <TextInput
            placeholder={currentTeamName}
            style={[
              styles.savedTeamsBase.teamName,
              {color: 'black'}, // Set text color to black
            ]}
            maxLength={16} // Set maximum length to 20 characters
            placeholderTextColor="black" // Set placeholder color to black
            onChange={e => setCurrentTeamName(e.nativeEvent.text)}
          />
          <Image
            style={{height: 12, width: 12, left: 5, top: 3}}
            source={require('../assets/images/icons/edit-icon.png')}
          />
        </View>

        <TouchableOpacity
          onPress={handleSaveBtn}
          style={styles.buttons.saveBtnContainer}>
          <Text style={styles.buttons.saveBtnText}>{promptText}</Text>
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
