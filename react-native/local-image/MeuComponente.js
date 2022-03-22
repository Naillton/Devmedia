import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Films() {
  return (
    <View style={styles.container}>
      <Text style={ styles.textoOne }>More films...</Text>
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

  textoOne: {
    marginTop: 30,
    fontSize: 20,
  },

});
