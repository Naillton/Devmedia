import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';

import Card from './src/components/Cards';

export default function App() {
  return (
    <ScrollView>
      <View style={{ flex: 1}}>
        <StatusBar style="auto" />
        <Card />
      </View>
    </ScrollView>
  );
}
