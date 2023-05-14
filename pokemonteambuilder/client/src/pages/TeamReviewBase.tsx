import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {MyTeam} from '../components/MyTeam';
import {ScrollView} from 'react-native-gesture-handler';
import {TeamReview} from '../components/TeamReview';
import styles from '../styles/index';
import {updatePokemonBackgrounds} from '../state/slices/teamSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export interface TypeEffectiveness {
  [key: string]: number;
}

export interface Pokemon {
  id: number;
  name: string;
  position: number;
  typeEffectiveness: TypeEffectiveness;
  pokemonBackgroundColor: string;
}

export interface MergedTypeEffectiveness {
  typeName: string;
  typeValue: number;
}

export const TeamReviewBase = () => {
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
  useEffect(() => {
    let result: MergedTypeEffectiveness[] = [];
    userTeam.forEach((pokemon: Pokemon) => {
      Object.entries(pokemon.typeEffectiveness).forEach(
        ([typeName, typeValue]: [string, number]) => {
          const existingType = result.find(t => t.typeName === typeName);
          if (!existingType) {
            result.push({typeName, typeValue});
          } else {
            existingType.typeValue *= typeValue;
          }
        },
      );
    });
    setTeamEffectiveness(result);
  }, [userTeam]);
  return (
    <ImageBackground
      source={require('../assets/images/water-starter-background.png')}
      style={styles.reviewBase.container}>
      <SafeAreaView>
        <View style={styles.reviewBase.topView}>
          <TouchableWithoutFeedback onPress={handleProceedBtn}>
            <Image
              source={require('../assets/images/back-arrow.png')}
              style={styles.reviewBase.backArrow}
            />
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          <Text style={styles.reviewBase.matchUpsTitle}>Results:</Text>
          <TeamReview
            typeSelected={typeSelected}
            setTypeSelected={setTypeSelected}
            teamEffectiveness={teamEffectiveness}
          />
        </ScrollView>
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
    </ImageBackground>
  );
};
