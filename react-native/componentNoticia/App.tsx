import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Head from './src/components/Head/Head';
import Main from './src/components/Main/Main';

export default function App() {
  return (
    <View>
      <StatusBar />
      <Head />
      <Main />
    </View>
  );
}
