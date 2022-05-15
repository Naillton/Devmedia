import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Routes from './src/Routes';
import Appstyles from './main.scss';

export default function App() {
  return (
    <View style={ Appstyles.container }>
      <StatusBar
        style="auto"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </View>
  );
}
