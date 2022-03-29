import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text>Testando botao</Text>
      <TouchableOpacity
        onPress={() => {console.log('Botao clicado')}}
        style={ styles.btn }
      ><Text style={ styles.text }>Clique Aqui!</Text></TouchableOpacity>
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

  btn: {
    width: 100,
    height: 30,
    backgroundColor: 'violet',
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
  }
});
