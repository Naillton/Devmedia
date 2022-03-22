import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Congo from './floresta-congo.png';
import Taiga from './floresta-taiga.png';
import Amazonica from './floresta-amazonica.png';

export default function App() {
  return (
    <View style={ styles.container }>
      <StatusBar style='black' />
      <Text style={ styles.titulo }>Florestas pelo mundo</Text>

      <Image
        source={ Congo } 
        style={ styles.img } 
      />
      <Text style={ styles.margem }>Floresta do congo (África)</Text>

      <Image
        source={ Taiga } 
        style={ styles.img } 
      />
      <Text style={ styles.margem }>Floresta (Hemisfério Norte)</Text>

      <Image
        source={ Amazonica } 
        style={ styles.img }
      />
      <Text>Floresta Amazônica (América do Sul)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 30,
  },

  img: {
    width: 300,
    height: 100,
    marginTop: 10,
  },
});