import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MyProvider from './src/context/MyProvider';
import Home from './src/Screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyProvider>
        <Home />
      </MyProvider>
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
});
