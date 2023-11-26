import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [originalPokemonList, setOriginalPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const sortedResponse = response.data.results.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setPokemonList(sortedResponse);
        setOriginalPokemonList(sortedResponse);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    if (searchTerm === '') {
      setPokemonList(originalPokemonList);
    } else {
      const filteredList = pokemonList.filter((pokemon) =>
        pokemon.name.includes(searchTerm.toLowerCase())
      );
      setPokemonList(filteredList);
    }
  };

  const handleSearchInput = (text) => {
    setSearchTerm(text);
    if (text === '') {
      setPokemonList(originalPokemonList);
    } else {
      const filteredList = pokemonList.filter((pokemon) =>
        pokemon.name.includes(searchTerm.toLowerCase())
      );
      setPokemonList(filteredList);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar Pokémon"
        value={searchTerm}
        onChangeText={(text) => handleSearchInput(text)}
      />

      <Button
        style={styles.searchButton}
        title="Buscar" 
        onPress={handleSearch} 
      /> 

      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text 
            style={styles.pokemonName} onPress={() => navigation.navigate('Detalle', { pokemon: item })}>
            {item.name}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    margin:10,
    paddingLeft: 10,
  },
  searchButton: {
    width: '50%',
    marginTop: 10,
  },
  pokemonName: {
    marginLeft:10,
    marginTop: 10,
  },
});

export default HomeScreen;