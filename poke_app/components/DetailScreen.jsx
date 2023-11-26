import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const DetailScreen = ({ route }) => {
  const { pokemon } = route.params;
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(pokemon.url);
        setPokemonDetails(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [pokemon]);

  if (!pokemonDetails) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png` }}
      />
      <Text style={styles.namePoke}>Nombre: {pokemonDetails.name}</Text>
      <Text>Altura: {pokemonDetails.height}</Text>
      <Text>Peso: {pokemonDetails.weight}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  namePoke:{
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export default DetailScreen;