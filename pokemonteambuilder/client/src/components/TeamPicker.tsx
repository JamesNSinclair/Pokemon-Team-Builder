import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Pokemon {
  dex_number: number;
  id: number;
  name: string;
  type_1: string;
  type_2: string | null;
}

export const TeamPicker = ({pokemon}: {pokemon: Pokemon[]}) => {
  const [inputText, setInputText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  const onInputChange = (text: string) => {
    setInputText(text);
    setShowSuggestions(true);
  };

  const onPokemonSelect = (name: string) => {
    setInputText(name);
    setSelectedPokemon(name);
    setShowSuggestions(false);
  };

  const filteredPokemon = pokemon.filter(p =>
    p.name.toLowerCase().startsWith(inputText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={onInputChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        placeholder="Type Pokémon name"
      />
      {inputText && showSuggestions ? (
        <View style={styles.suggestionsContainer}>
          <ScrollView
            style={styles.suggestions}
            keyboardShouldPersistTaps="handled">
            {filteredPokemon.map(p => (
              <TouchableOpacity
                key={p.id}
                style={[
                  styles.suggestionItem,
                  p.name === selectedPokemon
                    ? styles.selectedSuggestionItem
                    : null,
                ]}
                onPress={() => onPokemonSelect(p.name)}
                activeOpacity={1}>
                <Text
                  style={
                    p.name === selectedPokemon
                      ? styles.selectedSuggestionText
                      : null
                  }>
                  {p.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 1,
    paddingLeft: 10,
  },
  suggestionsContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  suggestions: {
    maxHeight: 200,
  },
  suggestionItem: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  selectedSuggestionItem: {
    backgroundColor: '#f8f8f8',
  },
  selectedSuggestionText: {
    textDecorationLine: 'underline',
  },
});
