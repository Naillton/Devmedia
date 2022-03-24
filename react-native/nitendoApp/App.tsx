import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Conteudo from './src/components/conteudo/Conteudo';
import Topo from './src/components/Topo/Topo';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Topo />
      <Conteudo />
    </View>
  );
}
