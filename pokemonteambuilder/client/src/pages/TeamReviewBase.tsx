import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {MyTeam} from '../components/MyTeam';
import {ScrollView} from 'react-native-gesture-handler';
import {TeamReview} from '../components/TeamReview';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

interface TypeEffectiveness {
  [key: string]: number;
}

interface Pokemon {
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
  const navigation = useNavigation();
  const handleProceedBtn = () => {
    navigation.navigate('TeamBuilder');
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
      style={styles.container}>
      <SafeAreaView>
        <View style={styles.topView}>
          <TouchableWithoutFeedback onPress={handleProceedBtn}>
            <Image
              source={require('../assets/images/back-arrow.png')}
              style={styles.backArrow}
            />
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          <Text style={styles.matchUpsTitle}>Team Match Ups:</Text>
          <TeamReview teamEffectiveness={teamEffectiveness} />
        </ScrollView>
        <Text style={styles.matchUpsSubtitle}>Team Match Ups:</Text>
        <View style={styles.teamContainer}>
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

const styles = StyleSheet.create({
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
    fontSize: 30,
    fontWeight: '600',
  },
  matchUpsSubtitle: {
    paddingTop: 25,
    fontSize: 21,
    fontWeight: '500',
  },
  teamContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    right: 25,
    paddingTop: 5,
  },
});
