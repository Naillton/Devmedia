import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={ styles.img }
        source={ {uri: 'https://www.devmedia.com.br/arquivos/cursos/rn_exibindo_imagem/aula_3.png'} }
      />
      <Text style={styles.paragrafo}>Queen é o nome da kendaria banda britanica, criada em 1970 por Freddie Mercury e dois ex-musicos do smile.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 600,
    height: 400,
  },

  paragrafo: {
    marginTop: 20,
    textAlign: 'center',
  },

});
