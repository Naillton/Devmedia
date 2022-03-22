import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Back from './assets/backend-img.png';
import Full from './assets/fullstack-img.png';
import Mobile from './assets/mobile-img.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <Text style={ styles.title}>Mobile Developer</Text>
        <Text style={ styles.normalText }>Michonne</Text>
        <Image 
          source={ Mobile }
          style={ styles.img }
        />
      </View>
      <View style={styles.card}>
        <Text style={ styles.title}>BackEnd Developer</Text>
        <Text style={ styles.normalText }>Elijah Price</Text>
        <Image 
          source={ Back }
          style={ styles.img }
        />
      </View>

      <View style={styles.card}>
        <Text style={ styles.title}>FullStack Developer</Text>
        <Text style={ styles.normalText }>Chuck Norris</Text>
        <Image 
          source={ Full }
          style={ styles.img }
        />
      </View>
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

  card: {
    backgroundColor: '#5450d6',
    width: 350,
    height: 150,
    padding: 20,
    borderRadius: 10,
    borderWidth: 3,
    marginBottom: 30,
  },

  title: {
    fontSize: 30,
    color: 'white'
  },

  normalText: {
    color: 'white',
    fontSize: 15,
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
  borderWidth: 4,
  borderColor: 'white',
  }
});
