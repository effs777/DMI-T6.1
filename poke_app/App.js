import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} options={{ title: 'Lista de Pokémon'}}/>
        <Stack.Screen name="Detalle" component={DetailScreen} options={{ title: 'Detalle de Pokémon'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;