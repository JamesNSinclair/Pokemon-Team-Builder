import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 4,
    paddingBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
