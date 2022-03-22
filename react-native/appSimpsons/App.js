import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Bart from './assets/bart-img.png'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={ styles.titulo }>Os Simpsons!</Text>
      <Image 
        source={ Bart }
        style={ styles.img }
      />
      <Text style={ styles.normalText }>Bart o filho mais velho</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#feda0a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 30,
    marginBottom: 20,
  },

  img: {
    borderColor: 'black',
    borderRadius: 100,
    borderWidth: 5,
    width: 200,
    height: 200,
  },

  normalText: {
    fontSize: 20,
    marginTop: 20,
  }
});
