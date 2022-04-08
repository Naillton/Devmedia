import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { PressableComponent } from './src/components/pressable';

export default function App() {
  return (
    <View style={{ flex: 1}}>
      <StatusBar style="auto" />
      <PressableComponent />
    </View>
  );
}
