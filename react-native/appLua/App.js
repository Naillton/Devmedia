import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';

import Lua from './assets/lua.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={ Lua }
        style={ styles.img }
      />
      <View style={ styles.card }>
        <Text style={ styles.title }>Lua</Text>
        <Text style={ styles.text }>A Lua é o satelite natural do <Text style={ styles.destaque }>planeta
          terra</Text> , distanciados por aproximadamente 384.405 km.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 100,
    height: 100,
  },

  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  card: {
    marginTop: 20,
    borderStyle: 'dotted',
    padding: 20,
    borderColor: 'white',
    borderWidth: 2,
    width: 300,
  },

  text: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },

  destaque: {
    fontWeight: 'bold',
  },
});
