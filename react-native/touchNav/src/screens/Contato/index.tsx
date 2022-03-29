import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function Contato(props: { navigation: { navigate: any; }; }) {
  const { navigate } = props.navigation
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <TouchableOpacity
         onPress={() => { navigate('Tela inicial') }}
         style={ styles.btn }
      >
        <Text>Home</Text>
      </TouchableOpacity>
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
    backgroundColor: 'pink',
    borderRadius: 8,
    alignItems:  'center',
    justifyContent: 'center',
  }
});