import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
