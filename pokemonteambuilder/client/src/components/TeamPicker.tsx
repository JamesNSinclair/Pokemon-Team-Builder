import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {fetchPokemonTypeEffectiveness} from '../services/api';
import {getTypeStyle} from '../types/typeColours';
import styles from '../styles/index';
import {updateTeamData} from '../state/slices/teamSlice';
import {useDispatch} from 'react-redux';

interface Pokemon {
  dex_number: number;
  id: number;
  name: string;
  type_1: string;
  type_2: string | null;
}

export const TeamPicker = ({
  position,
  pokemon,
}: {
  position: number;
  pokemon: Pokemon[];
}) => {
  const [inputText, setInputText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);
  const dispatch = useDispatch();
  const onInputChange = (text: string) => {
    setInputText(text);
    setShowSuggestions(true);
  };

  const addPokemonToTeam = async (pokemon: Pokemon) => {
    const pokemonTypeEffectiveness = await fetchPokemonTypeEffectiveness(
      pokemon.name,
    );
    const pokemonWithState = {
      id: pokemon.id,
      name: pokemon.name,
      position: position,
      typeEffectiveness: await pokemonTypeEffectiveness,
      pokemonBackgroundColor: '#fff',
    };
    dispatch(updateTeamData(pokemonWithState));
  };

  const onPokemonSelect = async (pokemon: Pokemon) => {
    setInputText(pokemon.name);
    setSelectedPokemon(pokemon.name);
    setShowSuggestions(false);
    addPokemonToTeam(pokemon);
  };

  const filteredPokemon = pokemon.filter(p =>
    p.name.toLowerCase().startsWith(inputText.toLowerCase()),
  );

  return (
    <View style={styles.teamPicker.container}>
      <TextInput
        style={styles.teamPicker.input}
        value={inputText}
        onChangeText={onInputChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        placeholder="Type Pokémon name"
      />
      {inputText && showSuggestions ? (
        <View style={styles.teamPicker.suggestionsContainer}>
          <ScrollView
            style={styles.teamPicker.suggestions}
            keyboardShouldPersistTaps="handled">
            {filteredPokemon.map(p => (
              <TouchableOpacity
                key={p.id}
                style={[
                  styles.teamPicker.suggestionItem,
                  p.name === selectedPokemon
                    ? styles.teamPicker.selectedSuggestionItem
                    : null,
                ]}
                onPress={() => onPokemonSelect(p)}
                activeOpacity={1}>
                <Text
                  style={
                    p.name === selectedPokemon
                      ? [styles.teamPicker.selectedSuggestionText]
                      : null
                  }>
                  {p.name}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={getTypeStyle(p.type_1)}>{p.type_1}</Text>
                  {p.type_2 && (
                    <Text>
                      / <Text style={getTypeStyle(p.type_2)}>{p.type_2}</Text>
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};
