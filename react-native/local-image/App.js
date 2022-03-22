import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Capa from './capa.png'
import Films from './MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style=''/>
      <Text style={ styles.textoOne }>Guerra do Amanhã</Text>
      <Text style={ styles.textTwo }>Genero ação e ficção</Text>
      <Image
        source={ Capa }
        style={ styles.img }
      />
      <ScrollView>
        <Films />
        <Films />
        <Films />
        <Films />
        <Films />
        <Films />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },

  textoOne: {
    fontSize: 20,
  },
  
  textTwo: {
    margin: 20,
  },

  img: {
    width: 600,
    height: 400,
  },

});
