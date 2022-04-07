import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Backs from './src/components/Backgrounds';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Backs />
    </View>
  );
}